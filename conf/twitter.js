const confFile = require('./confFile');
const Twitter = require('twitter');

module.exports = new Twitter(confFile.twitterApi);