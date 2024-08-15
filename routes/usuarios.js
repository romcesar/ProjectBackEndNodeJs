class Usuario {

  static usuarios = [];

  static listar() {
    return Usuario.usuarios;
  }

  static adicionar(usuario) {
    Usuario.usuarios.push(usuario);
  }

  static editar(id) {
    Usuario.usuarios = Usuario.usuarios.filter(usuario => usuario.id !== id);
  }

  static remover(id) {
    Usuario.usuarios = Usuario.usuarios.filter(usuario => produto.id !== id);
  }
}

module.exports = Usuario;