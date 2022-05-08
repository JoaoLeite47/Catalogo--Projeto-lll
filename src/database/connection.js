import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config() 

export const connection = new Sequelize( 
    // process.env.DB_BASE,  //REQUISIÇÃO PARA O DB LOCAL NA MAQUINA, NÃO MAIS NECESSÁRIO AO FAZER DEPLOY DO DB
    // process.env.DB_USER,
    // process.env.DB_PASS, 
    // {
    //     host: process.env.DB_LOCAL,
    //     port: 5432,
    //     dialect: 'postgres'
    // }
    process.env.DB_URL, // requisição para DB em nuvem criado no render
    {
       dialect: 'postgres',
       dialectOptions: {
           ssl: { //requisição para ssl na url do site
               require: true,
               rejectUnauthorized: false  // caso a requisição falhe, o usuário poderá entrar do msm jeito
           }
       } 
    }

)