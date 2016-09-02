'use strict';

const Hapi = require('hapi');
const Inert = require('inert');


var routes = require('./src/routes')

const server = new Hapi.Server();
server.connection({ port: 3000 });

for (var route in routes)
 {
 	server.route(routes[route])
 }

server.register(require('vision'), (err) => {

    server.views({
        engines: {
            html: require('handlebars')
        },
        path: './src/views',
        partialsPath: './src/views/tmpls'
    });
});

server.register(Inert, () => {})

server.start(function () {
    console.log('Server running at:', server.info.uri);
});
