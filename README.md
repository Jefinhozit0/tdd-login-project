# 🧪 Projeto TDD - Cadastro e Login com Node.js e Jest

Este projeto demonstra a aplicação de Test-Driven Development (TDD) usando Node.js e Jest, com as funcionalidades básicas de **cadastro** e **login** de usuários.

## 📋 Funcionalidades

- ✅ Cadastro de usuário com nome, e-mail e senha.
- 🔒 Verificação de e-mail já existente.
- 🔑 Login com e-mail e senha válidos.
- ❌ Mensagem de erro para login inválido.
- ⚠️ Validação de campos obrigatórios.

## 🧪 Requisitos de Testes Automatizados

- Verificar se é possível cadastrar um usuário com dados válidos.
- Verificar se o sistema impede o cadastro com e-mail já existente.
- Garantir que o login seja possível com credenciais válidas.
- Garantir que o login falhe com e-mail ou senha inválidos.
- Verificar que os campos obrigatórios são validados corretamente.

## 🚀 Como Executar

### 1. Instale as dependências

```bash
npm install
npm test
```
```estrutura
tdd-login-project/
├── src/
│   ├── repositories/
│   │   └── userRepository.js
│   └── services/
│       └── userService.js
├── tests/
│   └── user.test.js
├── package.json
└── README.md
```
##🛠 Tecnologias
Node.js

Jest (Framework de Testes)

JavaScript

##📚 Prática de TDD
Este projeto foi desenvolvido seguindo o ciclo TDD:

🔴 Red: Escreve-se o teste e ele falha.

🟢 Green: Implementa-se o mínimo necessário para o teste passar.

🟡 Refactor: Refatora-se o código mantendo os testes passando.

👥 Autor
Nome: Jefferson Silva

Professora: Ana Claudia

Curso: Análise e Desenvolvimento de Sistemas

