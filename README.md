
<h1 align="center" style="font-weight: bold;">Projeto BackEnd NodeJs 💻</h1>

<p align="center">
 <a href="#about">Sobre</a> • 
 <a href="#started">Passo a passo</a> • 
 <a href="#structure">Estrutura do projeto</a> • 
 <a href="#colab">Colaboradores</a>
</p>

<h2 id="about">📌 Sobre</h2>

<p>Um projeto de backend construído com Node.js, Express.js e Sequelize. Ele implementa um sistema de gerenciamento de usuários, categorias e produtos, incluindo autenticação JWT. O projeto utiliza um banco de dados MySQL para persistência dos dados.</p>

<h2>Pré-requisitos</h2>

<ul>
  <li>Node.js - v20.15.1 ou superior</li>
  <li>MySQL - Para o banco de dados</li>
</ul>

<h3 id="started">🚀 Passo a passo</h3>

<h4>Instalação</h4>
<p>Clone o repositório:</p>
<pre><code>
git clone https://github.com/romcesar/ProjectBackEndNodeJs/tree/main
cd seu-repositorio
</code></pre>

<h4>Instale as dependências:</h4>
<pre><code>
npm install
</code></pre>

<h4>Configure o arquivo .env:</h4>
<p>Crie um arquivo <code>.env</code> na raiz do projeto com o seguinte conteúdo:</p>
<pre><code>
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=root
DB_NAME=seu_banco_de_dados
JWT_SECRET=sua_chave_secreta
</code></pre>

<h4>Inicialize o banco de dados:</h4>
<p>Certifique-se de que o MySQL está rodando e crie o banco de dados especificado no arquivo <code>.env</code>.</p>
<pre><code>
npx sequelize db:create
npx sequelize db:migrate
</code></pre>

<h4>Rodando o Projeto:</h4>
<p>Para iniciar o servidor, use:</p>
<pre><code>
npm start
</code></pre>
<p>Ou se você estiver desenvolvendo e quiser que o servidor reinicie automaticamente quando os arquivos mudarem, use:</p>
<pre><code>
npx nodemon src/server.js
</code></pre>

<h4>Testando o Projeto:</h4>
<p>Para rodar os testes:</p>
<pre><code>
npm test
</code></pre>

<h3 id="structure">📍 Estrutura do projeto</h3>

<pre><code>
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
</code></pre>

<h2>Uso:</h2>

<p><strong>Usuários:</strong> Faça requisições CRUD para a rota <code>/api/users</code>.</p>
<p><strong>Categorias:</strong> Faça requisições CRUD para a rota <code>/api/categories</code>.</p>
<p><strong>Produtos:</strong> Faça requisições CRUD para a rota <code>/api/products</code>.</p>
<p><strong>Autenticação:</strong> Utilize as rotas de login e registro em <code>/api/users/register</code> e <code>/api/users/login</code> para gerenciar tokens JWT.</p>

<h2>Endpoints:</h2>
https://documenter.getpostman.com/view/16679987/2sA3s9D8WA

<h2 id="colab">🤝 Colaboradores</h2>

<p>Um agradecimento especial às seguintes pessoas:</p>

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://github.com/romcesar/ProjectBackEndNodeJs/blob/main/ROMIM.jpg?raw=true" width="100px;" alt="Rômulo Cesar imagem"/><br>
        <sub><b>Rômulo Cesar</b></sub>
      </a>
    </td>
    <td align="center">
      <a href="#">
        <img src="https://github.com/romcesar/ProjectBackEndNodeJs/blob/main/HANYEL.jpg" width="100px;" alt="Guilherme Uchôa imagem"/><br>
        <sub><b>Guilherme Uchôa</b></sub>
      </a>
    </td>
  </tr>
</table>
