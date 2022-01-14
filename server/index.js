const express = require("express")
const req = require("express/lib/request")
const app = express()
const { Pool } = require('pg')
const cors = require("cors")


const db = new Pool({
  host: 'localhost',
  user: 'postgres',
  password: 'Info@1234',
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
})

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
    const { email } = req.body;
    const { nome } = req.body;
    const { sobrenome } = req.body;
    const { cpf } = req.body;
    const { data_nascimento } = req.body;

    console.log(email);
})

app.listen(3001, () => {
    console.log("rodando")
})