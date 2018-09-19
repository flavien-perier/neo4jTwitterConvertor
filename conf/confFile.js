"use strict";

const yaml = require('js-yaml');
const fs   = require('fs');

let confFile = null;

try {
    confFile = yaml.safeLoad(fs.readFileSync('./conf.yml', 'utf8'));
} catch (e) {
    console.error(e);
}

module.exports = confFile;