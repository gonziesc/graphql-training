const request = require('request-promise');
const USERS_API = require('../../config').common.usersApi;
const logger = require('../logger');

console.log(USERS_API);

const getUsers = () =>
  request({
    url: `${USERS_API}/users`,
    method: 'get',
    json: true
  }).then(res => {
    logger.info(res);
    return res.body;
  });

module.exports = { getUsers };
