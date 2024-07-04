import express from "express";
import LivroController from "../controllers/livrosControllers.js";

const router = express.Router();

router 
  .get("/livros", LivroController.listarLivros)
  .get("/livros/busca", LivroController.livrosPorEditora)
  .get("/livros/:id", LivroController.obterLivroId)
  .post("/livros", LivroController.cadastrarLivro)
  .put("/livros/:id", LivroController.atualizarLivro)
  .delete("/livros/:id", LivroController.excluirLivro)


export default router;

