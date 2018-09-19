const {neo4jSession, neo4jClose} = require('./conf/neo4j');
const twitter = require('./conf/twitter');
const confFile = require('./conf/confFile');

const cleanAll = require('./functions/cleanAll');
const saveTweet = require('./repository/saveTweet')

const main = async() => {
    if (confFile.app.production == false) {
        await cleanAll(neo4jSession);
    }

    twitter.stream('statuses/filter', {track: confFile.app.track}, (stream) => {
        console.info(`track twitter rules : ${confFile.app.track}`);
    
        stream.on('data', (tweet) => {
            saveTweet(neo4jSession, tweet)
                .catch(error => {
                    console.error(error);
                    neo4jClose();
                });
        });
        
        stream.on('error', (error) => {
            console.error(error);
            neo4jClose();
        });
    });
}

main();