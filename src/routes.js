const { handlers } = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: handlers.addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: handlers.getAllBookHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: handlers.getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{bookId}',
    handler: handlers.updateBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{bookId}',
    handler: handlers.deleteBookByIdHandler,
  },
];

module.exports = routes;
