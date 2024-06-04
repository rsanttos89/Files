const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const fs = require('fs');

const dbFilePath = path.join(process.cwd(), 'database.db');

function createDatabase() {
  // Verificar se o banco de dados já existe
  if (!fs.existsSync(dbFilePath)) {
    let db = new sqlite3.Database(dbFilePath);

    db.serialize(function () {
      db.run("CREATE TABLE IF NOT EXISTS users (email TEXT PRIMARY KEY, password TEXT)");

      // Inserção de dados iniciais
      db.run("INSERT INTO users (email, password) VALUES (?, ?)", ["t@t", "123"], function (err) {
        if (err) {
          console.error(err.message);
        } else {
          console.log("Usuário inicial inserido com sucesso");
        }
      });
    });

    db.close();
  } else {
    console.log("O banco de dados já existe.");
  }
}

module.exports = {
  createDatabase
};