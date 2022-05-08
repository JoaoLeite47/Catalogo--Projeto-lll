import Sequelize from "sequelize";
import { connection } from "../database/connection.js";

export const catalogo = connection.define( // cria a tabela no banco de dados
  "catalogo",
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    preco: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    img: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,  // não altera o nome da tabela
    createdAt: false,  // não cria a coluna createdAt
    updatedAt: false,  // não cria a coluna updatedAt
    timestamps: false, // comandos para não registrar a data de criação e atualização
  }
);

const initTable = async() =>{ //function para criar um DB caso não haja algum 
  try {
    await catalogo.sync() 
}
catch(error){ 
    error.message
}
}

initTable()
