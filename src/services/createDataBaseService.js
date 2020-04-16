import {OpenDataBase} from './database.js';

export function CreateDataBaseService() {
  try {
    const db = OpenDataBase();

    const sqlCreateTableUser =
      'CREATE TABLE IF NOT EXISTS Usuario (' +
      ' IdUsuario INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,' +
      ' NomeUsuario VARCHAR(100) NOT NULL,' +
      ' IdeUsuario VARCHAR(50) NOT NULL,' +
      ' SenhaUsuario VARCHAR(200) NOT NULL,' +
      ' EMail varchar(200) not null );';
    const sqlCreateIndexUserIdeUsuario =
      'CREATE UNIQUE INDEX IF NOT EXISTS [IX_IdeUsuario] ON [Usuario] ([IdeUsuario]);';
    const sqlCreateIndexUserEmail =
      'CREATE UNIQUE INDEX IF NOT EXISTS [IX_Email] ON [Usuario] ([EMail]);';
    const sqlCreateTableImovel = 
      'CREATE TABLE IF NOT EXISTS Imovel (' +
      ' idImovel INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,' +
      ' descricao VARCHAR(200) NOT NULL,' +
      ' email VARCHAR(200) NOT NULL,' +
      ' logradouro VARCHAR(200) NOT NULL,' +
      ' numero INTEGER NOT NULL,' +
      ' complemento VARCHAR(30),' +
      ' bairro VARCHAR(50) NOT NULL,' +
      ' cidade VARCHAR(50) NOT NULL,' +
      ' cep VARCHAR(8) NOT NULL,' +
      ' uf VARCHAR(2) NOT NULL,' +
      ' idUsuario INTEGER NOT NULL,' +
      ' situacaoImovel VARCHAR(1) NOT NULL,' +
      ' FOREIGN KEY (IdUsuario) REFERENCES Usuario(IdUsuario))';

    db.transaction(function(txn) {
      txn.executeSql(sqlCreateTableUser, []);
      txn.executeSql(sqlCreateIndexUserIdeUsuario, []);
      txn.executeSql(sqlCreateIndexUserEmail, []);
      txn.executeSql(sqlCreateTableImovel, []);
    });

    return '';
  } catch (err) {
    return err.message;
  }
}
