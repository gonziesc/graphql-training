const { getUsers: getUsersFromExternalService } = require('../../services/users');

const getUsers = (_, params) => getUsersFromExternalService(params);

module.exports = {
  Query: {
    users: getUsers
  }
};
