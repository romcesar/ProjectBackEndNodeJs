const http = require('http');

const Produto = require('./routes/produtos');
const rotas = require('./routes/router');

// Inicializando produtos


// Implementando métodos para adicionar, remover e listar produtos.
const server = http.createServer((req, res) => {

  const { url, method } = req;

  console.log(url);

  if (url === '/') {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ status: 'OK' }));

  }

  if (!rotas[url] || !rotas[url][method]) {
    res.writeHead(404, { "Content-Type": "application/jsonn" })
    return res.end(JSON.stringify({ error: 'Rota não encontrada' }));
  }
});

// Iniciando o servidor na porta 3000.
const PORT = 3000;
const HOST = '127.0.0.1';

server.listen(PORT, HOST, () => {
console.log(`Servidor rodando em http://${HOST}:${PORT}/`); });

const http = require('http'); 
const server = http.createServer((req, res) => { 

  const { url, method } = req; 
  
  if (url === '/' && method === 'GET') { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Servidor Node.js'); 
  }
  else if (url === '/produtos' && method === 'GET') { 
    res.statusCode = 200; 
    res.setHeader('Content-Type', 'text/plain');
    res.end('Listagem de Produtos'); 
  } 
  else { 
    res.statusCode = 404; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.end('Páginanão encontrada'); 
  } 

}); 

const hostname = '127.0.0.1'; 
const port = 3000; 
server.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`); });