const Hapi = require('@hapi/hapi');
const routes = require('./routes');

// Server Initialization
const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

// Exit 1 if process is rejected(unhandled)
process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
