const userRepository = require('../repositories/userRepository');

function register({ name, email, password }) {
  if (!name || !email || !password) {
    return { success: false, message: 'Todos os campos são obrigatórios' };
  }

  if (userRepository.findByEmail(email)) {
    return { success: false, message: 'E-mail já cadastrado' };
  }

  const user = { name, email, password };
  userRepository.save(user);
  return { success: true, user };
}

function login({ email, password }) {
  const user = userRepository.findByEmail(email);
  if (!user || user.password !== password) {
    return { success: false, message: 'E-mail ou senha inválidos' };
  }

  return { success: true, user };
}

module.exports = {
  register,
  login
};
