const books = require('../books');

const getAllBook = () => ({
  status: 'success',
  data: {
    books,
  },
});

module.exports = getAllBook;
