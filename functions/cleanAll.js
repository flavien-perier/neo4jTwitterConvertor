module.exports = async (neo4jSession) => {
    await neo4jSession.run('MATCH (a)-[b]->(c) DELETE b, a, c');
    await neo4jSession.run('MATCH (a) DELETE a');
    neo4jSession.close();
}