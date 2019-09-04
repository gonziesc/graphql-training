const request = require('request-promise');
const USERS_API = require('../../config').common.usersApi;

const getUsers = () =>
  request({
    url: `${USERS_API}/users`,
    method: 'get',
    json: true
  });

module.exports = { getUsers };
