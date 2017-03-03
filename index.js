'use strict';

const Redis = require('ioredis');

module.exports.create = function (config) {
    const options = {
        host: config.host,
        port: config.port
    }

    if(config.password) {
        options.password = config.password;
    }
    if(config.db) {
        options.db = config.db;
    }

    return new Redis(options);
};
