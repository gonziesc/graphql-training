const { getUsers: getUsersFromExternalService } = require('../../services/users');
const { mapUsers } = require('../../mappers/users');

const getUsers = (_, params) => getUsersFromExternalService(params).then(mapUsers);

module.exports = {
  Query: {
    users: getUsers
  }
};
