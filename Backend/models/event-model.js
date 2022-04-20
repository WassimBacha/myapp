var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eventmanagerbd'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM event ';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (idevent,next)=>{
        console.log('event-model',idevent)
        let sql = 'SELECT `idevent`, `nomevent`, `adressevent`, `prix`, `siege`, `date`, `category`, `nbplaces` FROM `event` WHERE idevent = ?'
        db.query(sql,idevent,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByNamevent : async (nomevent ,next)=>{
        let sql = 'SELECT * FROM event WHERE nomevent = ?'
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
    update : async (idevent,{nomevent,adressevent,prix,date,catigory},next)=>{
        let sql = 'UPDATE `event` SET `idevent`= ? ,`nomevent`= ?,`adressevent`= ?,`prix`= ?,`siege`= ? ,`date`= ? ,`category`= ?,`nbplaces`= ? WHERE idevent=?'

        db.query(sql,idevent,nomevent,adressevent,prix,siege,date,catigory,nbplaces, (err, result) => {
            if (err) throw err;
            next(result)
        })
       
    },
    delete : async (idevent,next)=>{
        let sql =`DELETE FROM event WHERE idevent=${idevent}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}