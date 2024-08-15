class Produto {

  static produtos = [];

  static listar() {
    return Produto.produtos;
  }

  static adicionar(produto) {
    Produto.produtos.push(produto);
  }

  static editar(id) {
    Produto.produtos = Produto.produtos.filter(produto => produto.id !== id);
  }

  static remover(id) {
    Produto.produtos = Produto.produtos.filter(produto => produto.id !== id);
  }
}

module.exports = Produto;