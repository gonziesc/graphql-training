const mapUsers = users => users.map(({ id, name, username, email }) => ({ id, name, username, email }));

module.exports = { mapUsers };
