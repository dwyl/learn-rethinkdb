var Hapi = require('hapi');
var server = new Hapi.Server();
var PORT   = Number(process.argv[2] || 5000)
server.connection({ port: PORT });
server.route({
  path:'/{p*}',
  method: 'GET',
  handler: function (request, reply) {
    reply.proxy({
    	host: '127.0.0.1',
    	port: 8080,
      protocol: 'http',
      passThrough: true
    });
  }
});

server.start();
