const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com seu banco no XAMPP
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // deixe vazio se você não colocou senha
  database: "site_igreja"
});

// Testar conexão
db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao MySQL!");
});

// Rota para salvar formulário
app.post("/cadastro-ejc", (req, res) => {
  const { nome, email, endereco, bairro, nascimento, tipo } = req.body;

  const sql =
    "INSERT INTO formularioEJC (Nome, `E-mail`, Endereço, Bairro, `Data de Nascimento`, `Tipo de Cadastro`) VALUES (?)";

  const values = [nome, email, endereco, bairro, nascimento, tipo];

  db.query(sql, [values], (err, result) => {
    if (err) return res.json({ error: err });
    return res.json({ message: "Cadastro salvo com sucesso!" });
  });
});

// Iniciar servidor
app.listen(3001, () => {
  console.log("Servidor rodando na porta 3001");
});
