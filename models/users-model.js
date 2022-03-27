
const { type } = require('express/lib/response');
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eventmanagerbd'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM user';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (iduser,next)=>{
        console.log('user-model',iduser)
        let sql = 'SELECT `iduser`, `nom`, `prenom`, `tel`, `Adress`, `mail`, `mdp`, `type` FROM `user` WHERE  id = ?'
        db.query(sql,iduser,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByEmail : async (email,next)=>{
        let sql = 'SELECT * FROM user WHERE mail = ?'
        db.query(sql,mail,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (user,next)=>{
        let sql =  'INSERT INTO user SET ?'
        db.query(sql,user,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (iduser,{nom,mail},next)=>{
        let sql = '`UPDATE `user` SET `nom`=?,`prenom`= ?,`tel`= ?,`Adress`= ?,`mail`= ?,`mdp`= ?,`type`= ?` WHERE `iduser`=?'

        db.query(sql,[nom,prenom,Tel,Adress,mail,mdp,type,iduser],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (iduser,next)=>{
        let sql = `DELETE FROM user WHERE iduser=${iduser}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}