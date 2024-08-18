const Categoria = require('../models/CategoriaModel');


exports.getAllCategorias = async (req, res) => {
    try {
        const categorias = await Categoria.findAll();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.createCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.create(req.body);
        res.json(categoria);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.updateCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
        await categoria.update(req.body);
        res.json(categoria);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

exports.deleteCategoria = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
        await categoria.destroy();
        res.json({ message: 'Categoria deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

exports.getCategoriaById = async (req, res) => {
    try {
        const categoria = await Categoria.findByPk(req.params.id);
        if (!categoria) return res.status(404).json({ message: 'Categoria not found' });
        res.json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
