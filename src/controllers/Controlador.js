import { catalogo } from '../models/catalogo.js'

export const getIndex = async (req, res) => { // rota raiz
    try {
        let lista_produtos = await catalogo.findAll(); // busca todos os produtos
    res.render('index.ejs', {lista_produtos}) // renderiza a página index.ejs
    } catch (err) { // caso ocorra algum erro, executa o bloco abaixo
        res.status(500).send({err: err.message}) // erro 500
    }
}

export const getCriar = async (req, res) => { // rota criar
    try {
    res.render('signup.ejs') // renderiza a página signup.ejs
    } catch (err) { // caso ocorra algum erro, executa o bloco abaixo
        res.status(500).send({err: err.message}) // erro 500
    }
}

export const postCriar = async (req, res) => { // rota criar 2
    try {
    const { nome, descricao , preco, img} = req.body // pega os dados do formulário
    if(!nome || !descricao || !preco || !img ){res.redirect('/error')} // se não tiver nome, descrição, preço ou imagem, redireciona para a página de erro
    await catalogo.create({nome, descricao, preco, img}) // cria um novo produto
    res.redirect('/') // redireciona para a rota raiz
    }
    catch(err) {
        res.status(500).send({err: err.message}) // erro 500
    }
}
