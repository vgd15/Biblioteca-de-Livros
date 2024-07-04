import autores from "../models/autor.js";

class AutorController {

    static listarAutores = async (req, res) => {
        try {
            let autorEncontrados = await autores.find();
            res.status(200).json(autorEncontrados);
        } catch (error) {
            console.log('erro na requisição:', error);
            res.status(500).send('Erro na requisição');
        }
    }

    static obterAutoresId = async (req, res) => {
        try {
            let id = req.params.id
            let autorId = await autores.findById(id);

            autorId
                ? `${res.json(autorId)}`
                : `${res.send(`Livro com ID: ${id} não encontrado`)}`
        } catch (erro) {
            res.status(500).send('Erro na requisição por id')
        }
    }

    static cadastrarAutores = async (req, res) => {
        try {
            let autorCadastrado = new autores(req.body);
            await autorCadastrado.save();
            res.status(201).send('Livro cadastrado com sucesso!')
        } catch (erro) {
            res.status(500).send(`erro na requisição post, ${erro.message}`)
        }
    }

    static atualizarAutores = async (req, res) => {
        try {
            let id = req.params.id;
            await autores.findByIdAndUpdate(id, { $set: req.body })
            res.send(`O livro foi atualizado com sucesso!`)
        } catch (erro) {
            res.status(500).send('Erro no método put')
        }
    }

    static excluirAutores = async (req, res) => {
        try {
            let id = req.params.id
            let autorId = await autores.findByIdAndDelete(id);
            const mensagem = autorId
                ? "Livro excluído com sucesso!"
                : "Livro não encontrado";
            res.status(200).send(`${mensagem}`)

        } catch (erro) {
            res.status(500).send('Erro na requisição por id')
        }
    }
}


export default AutorController;