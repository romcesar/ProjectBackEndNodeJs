const { createServer } = require('node:http')

const rotas = require('./src/routes/router');

const hostname = 'localhost';
const port = 3000;


// Implementando métodos para adicionar, remover e listar produtos.
const app = createServer((req, res) => {

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

app.listen(port, hostname, () => {
  console.log(`Servidor rodando em http://${hostname}:${port}/`);
});

