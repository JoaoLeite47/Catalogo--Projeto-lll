import express from 'express'
import { getIndex, getCriar, postCriar,  } from '../controllers/Controlador.js'

export const routers = express.Router() // instancia do express (filtro de rotas)

routers.get('/', getIndex) // rota raiz

routers.get('/signup', getCriar) // rota criar

routers.post('/cadastro', postCriar) // rota criar 2 


