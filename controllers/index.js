'use strict';
var nconf = require('nconf');


module.exports = function (server) {

    server.get('/', function (req, res) {
        var model = { name: nconf.get("applicationName") };
        res.render('index', model);

    });

};
