const produtos = require('./produtos');

const rotas = {
  '/products': {
    'GET': produtos.listar(),
    'POST': produtos.adicionar(),
    'PUT': produtos.editar(0),
    'DELETE': produtos.excluir(0)
  },
  'usuarios': {
    'GET': usuarios.listar(),
    'POST': usuarios.adicionar(),
    'PUT': usuarios.editar(0),
    'DELETE': usuarios.excluir(0)
  }
}