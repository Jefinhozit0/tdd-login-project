const userService = require('../src/services/userService');
const userRepository = require('../src/repositories/userRepository');

beforeEach(() => {
  userRepository._clear();
});

describe('UserService', () => {
  test('deve cadastrar usuário com dados válidos', () => {
    const result = userService.register({
      name: 'Ana',
      email: 'ana@email.com',
      password: '123456'
    });
    expect(result.success).toBe(true);
  });

  test('não deve cadastrar usuário com e-mail duplicado', () => {
    const user = {
      name: 'João',
      email: 'joao@email.com',
      password: '123456'
    };
    userService.register(user);
    const result = userService.register(user);
    expect(result.success).toBe(false);
    expect(result.message).toBe('E-mail já cadastrado');
  });

  test('deve permitir login com credenciais válidas', () => {
    const user = {
      name: 'Carlos',
      email: 'carlos@email.com',
      password: 'senha123'
    };
    userService.register(user);
    const result = userService.login({ email: user.email, password: user.password });
    expect(result.success).toBe(true);
  });

  test('deve falhar login com senha incorreta', () => {
    const user = {
      name: 'Maria',
      email: 'maria@email.com',
      password: 'senha'
    };
    userService.register(user);
    const result = userService.login({ email: user.email, password: 'errada' });
    expect(result.success).toBe(false);
  });

  test('deve validar campos obrigatórios no cadastro', () => {
    const result = userService.register({ name: '', email: '', password: '' });
    expect(result.success).toBe(false);
    expect(result.message).toMatch(/obrigatórios/);
  });
});
