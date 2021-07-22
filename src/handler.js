const addBook = require('./handlers/addBook');
const deleteBookById = require('./handlers/deleteBookById');
const getAllBook = require('./handlers/getAllBook');
const getBookById = require('./handlers/getBookById');
const updateBookById = require('./handlers/updateBookById');

const handlers = {
  addBookHandler: addBook,
  getAllBookHandler: getAllBook,
  getBookByIdHandler: getBookById,
  updateBookByIdHandler: updateBookById,
  deleteBookByIdHandler: deleteBookById,
};

module.exports = { handlers };
