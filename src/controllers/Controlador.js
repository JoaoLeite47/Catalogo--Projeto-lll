import { catalogo } from "../models/catalogo.js";

export const getIndex = async (req, res) => {
  // rota raiz
  try {
    let lista_produtos = await catalogo.findAll({ order: [["id", "ASC"]] }); // busca todos os produtos // indo por ordem crescente
    res.render("index.ejs", {
      lista_produtos,
      produtoPut: null,
      produtoDel: null,
    }); // renderiza a página index.ejs
  } catch (err) {
    // caso ocorra algum erro, executa o bloco abaixo
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const getEdit = async (req, res) => {
  // rota editar
  try {
    const method = req.params.method; // pega o método
    let lista_produtos = await catalogo.findAll({ order: [["id", "ASC"]] }); // busca todos os produtos // indo por ordem crescente
    const produto = await catalogo.findByPk(req.params.id); // busca o produto pelo id

    if (method == "put") {
      // se o método for put
      res.render("index.ejs", {
        lista_produtos,
        produtoPut: produto,
        produtoDel: null,
      },);
    } else {
      res.render("index.ejs", {
        // se o método for delete
        lista_produtos,
        produtoPut: null,
        produtoDel: produto,
      });
    }
  } catch (err) {
    // caso ocorra algum erro, executa o bloco abaixo
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const update = async (req, res) => {
  try {
    // rota editar execução
    const produto = req.body; // pega os dados do formulário
    await catalogo.update(produto, { where: { id: req.params.id } }); // atualiza o produto
    res.redirect("/");
  } catch (err) {
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const getCriar = async (req, res) => {
  // rota criar
  try {
    res.render("signup.ejs", {isAdded: false}); // renderiza a página signup.ejs com o modal de confirmação false
  } catch (err) {
    // caso ocorra algum erro, executa o bloco abaixo
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const getDetalhes = async (req, res) => {
  // rota detalhes
  try {
    let produto = await catalogo.findByPk(req.params.id); // busca o produto pelo id
    res.render("detalhes.ejs", { produto }); // renderiza a página detalhes.ejs
  } catch (err) {
    // caso ocorra algum erro, executa o bloco abaixo
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const postCriar = async (req, res) => {
  // rota criar execução
  try {
    const { nome, descricao, preco, img } = req.body; // pega os dados do formulário
    if (!nome || !descricao || !preco || !img) {
      res.redirect("/error");
    } // se não tiver nome, descrição, preço ou imagem, redireciona para a página de erro
    await catalogo.create({ nome, descricao, preco, img }); // cria um novo produto
    res.render("signup.ejs", {isAdded: true}); // redireciona para a rota raiz junto com o modal de confirmação true
  } catch (err) {
    res.status(500).send({ err: err.message }); // erro 500
  }
};

export const remove = async (req, res) => {
  // rota remover
  try {
    // rota remover execução
    await catalogo.destroy({ where: { id: req.params.id } }); // remove o produto
    res.redirect("/"); // redireciona para a rota raiz
  } catch (err) {
    res.status(500).send({ err: err.message }); // erro 500
  }
};
