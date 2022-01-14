const db = require('./db')

const registro = db.sequelize.define('registros',{
    email: {
        type: db.Sequelize.STRING
    },
    nome: {
        type: db.Sequelize.STRING
    },
    sobrenome: {
        type: db.Sequelize.STRING
    },
    cpf: {
        type: db.Sequelize.BIGINT
    },
    data_nascimento: {
        type: db.Sequelize.DATE
    }
})

// Apagar tabela já existente e criar outra vazia
//registro.sync({force: true})

module.exports = registro