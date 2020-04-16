import { OpenDataBase } from './database.js';

export function insert(imovel) {
  return new Promise((resolve, reject) => {
    try {
      var sql =
        `insert into Imovel 
            (   
                descricao,
                email,
                logradouro,
                numero,
                complemento, 
                bairro,
                cidade,
                cep,
                uf,
                situacaoImovel,
                idUsuario
            ) values 
            (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          [
            imovel.descricao,
            imovel.email,
            imovel.logradouro,
            imovel.numero,
            imovel.complemento,
            imovel.bairro,
            imovel.cidade,
            imovel.cep,
            imovel.uf,
            imovel.situacaoImovel,
            imovel.idUsuario,
          ],
          (tx, results) => {
            imovel.idImovel = results.insertId;
            resolve(imovel);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function getAll(idUsuario) {
  return new Promise((resolve, reject) => {
    try {
      const sql =
        'select * from Imovel where idUsuario = ' +
        idUsuario;

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(sql, [], (tx, results) => {
          if (results.rows.length === 0) {
            reject('Nenhum imovel cadastrado');
          }
          
          resolve(montar(results));
        });
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function getSearch(search) {
  return new Promise((resolve, reject) => {
    try {
      const sql = "select * from Imovel where descricao like '%" + search + "%'";

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(sql, [], (tx, results) => {
          if (results.rows.length === 0) {
            reject('Nenhum imovel encontrado');
          }
          
          resolve(montar(results));
        });
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function update(imovel) {
  return new Promise((resolve, reject) => {
    try {
      var sql =
        `update Imovel set descricao = ?,
        email = ?,
        logradouro = ?,
        numero = ?,
        complemento = ?, 
        bairro = ?,
        cidade = ?,
        cep = ?,
        uf = ?,
        situacaoImovel = ? where idImovel = ?`;

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          [
            imovel.descricao,
            imovel.email,
            imovel.logradouro,
            imovel.numero,
            imovel.complemento,
            imovel.bairro,
            imovel.cidade,
            imovel.cep,
            imovel.uf,
            imovel.situacaoImovel,
            imovel.idImovel,
          ],
          (tx, results) => {
            resolve(imovel);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

export function excluir(idImovel) {
  return new Promise((resolve, reject) => {
    try {
      var sql = `delete from Imovel where idImovel = ?`;

      const db = OpenDataBase();
      db.transaction((tx) => {
        tx.executeSql(
          sql,
          [
            idImovel
          ],
          (tx, results) => {
            resolve(imovel);
          },
        );
      });
    } catch (err) {
      reject(err.message);
    }
  });
}

function montar(dado) {
  let imoveis = [];
  for (let i = 0; i <dado.rows.length; i++) {
    imoveis[i] = dado.rows.item(i);
  }
  return imoveis
}

