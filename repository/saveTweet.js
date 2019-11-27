"use strict";

const Location = require('../model/node/Location');
const Lang = require('../model/node/Lang');
const Hashtag = require('../model/node/Hashtag');
const Message = require('../model/node/Message');
const User = require('../model/node/User');

const Localised = require('../model/relation/Localised');
const UserLang = require('../model/relation/UserLang');
const MessageLang = require('../model/relation/MessageLang');
const Content = require('../model/relation/Content');
const Tweet = require('../model/relation/Tweet');
const ReTweet = require('../model/relation/ReTweet');

const extractHashtags = require('../functions/extractHashtags');

const confFile = require('../conf/confFile');

const findOrCreateNode = async (neo4jSession, object) => {
    neo4jSession.run(`MERGE (:${object._type} ${object.toString()})`);
}

const createRelation = (neo4jSession, object) => {
    return neo4jSession.run(`MATCH (a:${object._from._type} {id: "${object._from.id}"}), (b:${object._to._type} {id: "${object._to.id}"}) `
        + `MERGE (a)-[:${object._type} ${object.toString()}]->(b)`);
}

module.exports = async (neo4jSession, tweet) => {
    if (confFile.app.authorizedLanguages.indexOf(tweet.lang) != -1) {

        const user = new User(tweet.user.id_str, tweet.user.name, tweet.user.screen_name);
        await findOrCreateNode(neo4jSession, user);
        
        const message = new Message(tweet.id_str, tweet.text, tweet.created_at, tweet.lang);
        await findOrCreateNode(neo4jSession, message);

        const tweetRelation = new Tweet(user, message, tweet.created_at);
        await createRelation(neo4jSession, tweetRelation);

        // Create hashtag
        const hashtags = extractHashtags(tweet.text).map(str => new Hashtag(str));
        await hashtags.forEach(async (hashtag) => {
            await findOrCreateNode(neo4jSession, hashtag)
            const contentRelation = new Content(message, hashtag);
            await createRelation(neo4jSession, contentRelation);
        });

        // Create location
        if (tweet.user.location) {
            const location = new Location(tweet.user.location);
            await findOrCreateNode(neo4jSession, location);
            const localised = new Localised(user, location);
            await createRelation(neo4jSession, localised);
        }

        if (tweet.user.lang) {
            const userLang = new Lang(tweet.user.lang);
            await findOrCreateNode(neo4jSession, userLang);
            const userLangRelaton = new UserLang(user, userLang);
            await createRelation(neo4jSession, userLangRelaton);
        }

        if (tweet.lang) {
            const messageLang = new Lang(tweet.lang);
            await findOrCreateNode(neo4jSession, messageLang);
            const messageLangRelaton = new MessageLang(message, messageLang);
            await createRelation(neo4jSession, messageLangRelaton);
        }
        
        // Create retweeted relation
        const reTweetRelation = new ReTweet(tweet.created_at);
        await neo4jSession.run(`MATCH (a:Message) `
            + `WITH MIN(a.date) AS minDate `
            + `MATCH (a:${message._type}  {id: "${message.id}"}), (b:${message._type}) `
            + `WHERE b.text = a.text AND a.id <> b.id `
            + `AND b.date = minDate `
            + `MERGE (a)-[:${reTweetRelation._type} ${reTweetRelation.toString()}]->(b)`);
    }
}