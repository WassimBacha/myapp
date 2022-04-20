const { uuid } = require('uuidv4');
const resuid = uuid() ;
var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eventmanagerbd'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM `reservation` ';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (idreservation,next)=>{
        console.log('reservation-model',idreservation)
        let sql = 'SELECT `idreservation`, `iduser`, `idevent`, `chairnumber`, `siege` FROM `reservation` WHERE  idreservation = ?'
        db.query(sql,idreservation,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectBynumber : async (chairnumber ,next)=>{
        let sql = 'SELECT * FROM `reservation` WHERE chairnumber = ?'
        db.query(sql,nomevent,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    
    insert : async (event,next)=>{
        
        let sql = 'INSERT INTO event SET ?'
        db.query(sql,event,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (idevent,{namevent,address,prix,image,date,catigorie},next)=>{
        let sql = 'UPDATE `event` SET `idevent`= ? ,`nomevent`= ?,`adressevent`= ?,`prix`= ?,`siege`= ? ,`date`= ? ,`category`= ?,`nbplaces`= ? WHERE idevent=?'

        db.query(sql,idevent,nomevent,adressevent,prix,siege,date,catigory,nbplaces, (err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (idevent,next)=>{
        let sql ='DELETE FROM `event` WHERE idevent=${idevent}'
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}