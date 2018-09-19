const confFile = require('./confFile');
const neo4j = require('neo4j-driver').v1;

const conf = confFile.neo4j;

const driver = neo4j.driver(conf.uri, neo4j.auth.basic(conf.user, conf.password));
const session = driver.session();

module.exports.neo4jSession = session;
module.exports.neo4jClose = function() {
    driver.close();
}