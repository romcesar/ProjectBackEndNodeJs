[PROJECT__BADGE]: https://img.shields.io/badge/📱Visit_this_project-000?style=for-the-badge&logo=project
[PROJECT__URL]: https://github.com/romcesar/ProjectBackEndNodeJs/tree/main

<h1 align="center" style="font-weight: bold;">Projeto BackEnd NodeJs 💻</h1>

<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#started">Passo a passo</a> • 
  <a href="#started">Estrutura do projeto</a> • 
  <a href="#colab">Colaboradores</a> •
</p>

<h2 id="started">📌 Sobre</h2>

Um projeto de backend construído com Node.js, Express.js e Sequelize. Ele implementa um sistema de gerenciamento de usuários, categorias e produtos, incluindo autenticação JWT. O projeto utiliza um banco de dados MySQL para persistência dos dados.

[![project][PROJECT__BADGE]][PROJECT__URL]

<h2>Prerequisites</h2>

Node.js - v20.15.1 ou superior
MySQL - Para o banco de dados

<h3 id="started">🚀 Passo a passo</h3>

Instalação
Clone o repositório:

bash
git clone https://github.com/romcesar/ProjectBackEndNodeJs/tree/main
cd seu-repositorio
Instale as dependências:

bash
npm install
Configure o arquivo .env:

Crie um arquivo .env na raiz do projeto com o seguinte conteúdo:

env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=seu_banco_de_dados
JWT_SECRET=sua_chave_secreta

Inicialize o banco de dados:

Certifique-se de que o MySQL está rodando e crie o banco de dados especificado no arquivo .env.

bash
npx sequelize db:create
npx sequelize db:migrate
Rodando o Projeto:

Para iniciar o servidor, use:

bash
npm start
Ou se você estiver desenvolvendo e quiser que o servidor reinicie automaticamente quando os arquivos mudarem, use:

bash
npx nodemon src/server.js
Testando o Projeto:

Para rodar os testes:

bash
npm test


<h3 id="routes">📍 Estrutura do projeto</h3>

root/
├── node_modules/
├── src/
│   ├── config/
│   │   └── database.js       # Configuração do Sequelize e conexão com MySQL
│   ├── controllers/
│   │   ├── categoryController.js  # Lógica de CRUD para Categorias
│   │   ├── productController.js   # Lógica de CRUD para Produtos
│   │   └── userController.js      # Lógica de CRUD para Usuários e autenticação
│   ├── middleware/
│   │   ├── auth.js           # Middleware de autenticação JWT
│   │   └── errorHandler.js   # Manipulador de erros
│   ├── models/
│   │   ├── category.js       # Modelo Sequelize para Categorias
│   │   ├── product.js        # Modelo Sequelize para Produtos
│   │   └── user.js           # Modelo Sequelize para Usuários
│   ├── routes/
│   │   ├── categoryRoutes.js # Rotas para Categorias
│   │   ├── productRoutes.js  # Rotas para Produtos
│   │   └── userRoutes.js     # Rotas para Usuários
│   ├── services/
│   │   └── userService.js    # Lógica de serviço para Usuários
│   ├── tests/
│   │   ├── category.test.js  # Testes unitários para Categorias
│   │   ├── product.test.js   # Testes unitários para Produtos
│   │   └── user.test.js      # Testes unitários para Usuários
│   ├── app.js                # Arquivo principal de configuração do app
│   └── server.js             # Inicialização do servidor
├── .env                      # Configurações do ambiente
├── .gitignore                # Arquivos e pastas a serem ignorados pelo Git
├── package.json              # Dependências do projeto e scripts
└── README.md                 # Este arquivo

## Uso:

Usuários: Faça requisições CRUD para a rota /api/users.
Categorias: Faça requisições CRUD para a rota /api/categories.
Produtos: Faça requisições CRUD para a rota /api/products.
Autenticação: Utilize as rotas de login e registro em /api/users/register e /api/users/login para gerenciar tokens JWT.

<h2 id="colab">🤝 Colaboradores</h2>

Um agradecimento especial as seguintes pessoas:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="src/public/WhatsApp Image 2024-08-11 at 21.39.28 (1).jpeg" width="100px;" alt="Rômulo Cesar imagem"/><br>
        <sub>
          <b>Rômulo Cesar</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="src/public/WhatsApp Image 2024-08-11 at 21.39.28.jpeg" width="100px;" alt="Guilherme Uchôa imagem"/><br>
        <sub>
          <b>Guilherme Uchôa</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
