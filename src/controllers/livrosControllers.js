import livros from "../models/livros.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
            let livrosEncontrados = await livros.find().populate('autor').exec();;
            res.status(200).json(livrosEncontrados);
        } catch (error) {
            console.log('erro na requisição:', error);
            res.status(500).send('Erro na requisição');
        }
    }

    static obterLivroId = async (req, res) => {
        try {
            let id = req.params.id
            let livroId = await livros.findById(id).populate('autor', 'nome').exec();

            livroId
                ? `${res.json(livroId)}`
                : `${res.send(`Livro com ID: ${id} não encontrado`)}`
        } catch (erro) {
            res.status(500).send('Erro na requisição por id')
        }
    }

    static cadastrarLivro = async (req, res) => {
        try {
            let livroCadastrado = new livros(req.body);
            await livroCadastrado.save();
            res.status(201).send('Livro cadastrado com sucesso!')
        } catch (erro) {
            res.status(500).send(`erro na requisição post, ${erro.message}`)
        }
    }

    static atualizarLivro = async (req, res) => {
        try {
            let id = req.params.id;
            await livros.findByIdAndUpdate(id, { $set: req.body })
            res.send(`O livro foi atualizado com sucesso!`)
        } catch (erro) {
            res.status(500).send(`Erro no método put ${erro.message}`)
        }
    }

    static excluirLivro = async (req, res) => {
        try {
            let id = req.params.id
            let livroId = await livros.findByIdAndDelete(id);
            const mensagem = livroId
                ? "Livro excluído com sucesso!"
                : "Livro não encontrado";
            res.status(200).send(`${mensagem}`)

        } catch (erro) {
            res.status(500).send('Erro na requisição por id')
        }
    }

    static livrosPorEditora = async (req, res) => {
        try {
            const editora = req.query.editora
            const livrosDaEditora = await livros.find({ 'editora': editora }, {},)

            livrosDaEditora
                ? `${res.send(livrosDaEditora)}`
                : 'Editora não encontrada'

        } catch (erro) {
            res.status(500).send('Erro ao obter livro por editora')
        }
    }
}


export default LivroController;