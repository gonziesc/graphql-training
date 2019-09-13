const { ApolloError } = require('apollo-server');

const createError = (message, statusCode) => new ApolloError(message, statusCode);

const DATABASE_ERROR = 503;
const NOT_FOUND = 404;

exports.databaseError = message => createError(message, DATABASE_ERROR);
exports.notFound = message => createError(message, NOT_FOUND);
