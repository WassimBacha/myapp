var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'express_sql'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM notif';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (idnotif,next)=>{
        console.log('notif-model',id)
        let sql = 'SELECT id,date FROM notif WHERE idnotif = ?'
        db.query(sql,idnotif,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    
    insert : async (notif,next)=>{
        let sql = 'INSERT INTO notif SET ?'
        db.query(sql,notif,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (idnotif,{date},next)=>{
        let sql = `UPDATE users SET  date=? WHERE id=?`

        db.query(sql,[date,idnotif],(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (idnotif,next)=>{
        let sql = `DELETE FROM notif WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}