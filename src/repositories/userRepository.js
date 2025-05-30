const users = [];

function findByEmail(email) {
  return users.find(user => user.email === email);
}

function save(user) {
  users.push(user);
  return user;
}

module.exports = {
  findByEmail,
  save,
  _clear: () => users.splice(0)
};
