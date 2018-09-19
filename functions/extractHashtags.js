module.exports = function(message) {
    const hashtagList = message.match(/#[a-zA-Z0-9_-]+/g);
    if (hashtagList) {
        return hashtagList.map(m => m.substr(1).toLowerCase());
    }
    return [];
}