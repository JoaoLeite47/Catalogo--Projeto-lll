import express from 'express'
import { getIndex, getCriar, postCriar, getDetalhes, getEdit, update } from '../controllers/Controlador.js'

export const routers = express.Router() // instancia do express (filtro de rotas)

routers.get('/', getIndex) // rota raiz

routers.get('/signup', getCriar) // rota criar

routers.get('/detalhes/:id', getDetalhes) // rota detalhes

routers.post('/cadastro', postCriar) // rota criar execução

routers.get('/getEdit/:id/:method', getEdit) // rota editar

routers.post('/update/:id', update) // rota editar execução)



