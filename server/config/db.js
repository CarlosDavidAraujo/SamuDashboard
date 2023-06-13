require('dotenv').config();
const sql = require("mssql");

// Configurações de conexão com o banco de dados
const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  options: {
    encrypt: true,
    trustServerCertificate: true,
    requestTimeout: 20000
  },
};

sql
  .connect(dbConfig)
  .then(() => {
    console.log("Connected to the SQL Server database.");
  })
  .catch((err) => {
    console.error("Failed to connect to the SQL Server database:", err);
  });

module.exports = sql;
