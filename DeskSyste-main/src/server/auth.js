const { ipcMain, ipcRenderer } = require('electron');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbFilePath = path.join(process.cwd(), 'database.db');

function login(email, password) {
  // Criação da instância do banco de dados
  const db = new sqlite3.Database(dbFilePath);

  // Consulta SQL para encontrar o usuário com o email fornecido
  const sql = "SELECT * FROM users WHERE email = ?";
  db.get(sql, [email], (err, row) => {
    if (err) {
      console.error(err.message);
      db.close(); // Fechar a conexão com o banco de dados em caso de erro
      return;
    }

    // Se um usuário correspondente for encontrado
    if (row) {
      // Verificar se a senha corresponde ao usuário encontrado
      if (row.password === password) {
        // Envie um sinal para verificar os dados do usuário e fechar a tela de login
        ipcRenderer.send('checkUserData');
        ipcRenderer.send('closeAppSignin');
      } else {
        console.log("Senha incorreta");
      }
    } else {
      console.log("Usuário não encontrado");
    }

    // Fechar o banco de dados após a consulta
    db.close();
  });
}

// Função para lidar com o logout
function logout() {
  ipcMain.emit('fecharTelaCarregamento');
}

module.exports = { login, logout };