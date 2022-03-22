var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'express_sql'
  });

module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM Evenement ';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (idevent,next)=>{
        console.log('evenement-model',idevent)
        let sql = 'SELECT idevent ,namevent,address , prix, date,catigorie  FROM Evenement  WHERE idevent = ?'
        db.query(sql,idevent,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    selectByNamevent : async (namevent ,next)=>{
        let sql = 'SELECT * FROM Evenement WHERE namevent = ?'
        db.query(sql,namevent,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (Evenement,next)=>{
        let sql = 'INSERT INTO Evenement SET ?'
        db.query(sql,Evenement,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (idevent,{namevent,address,prix,image,date,catigorie},next)=>{
        let sql = 'UPDATE Evenement SET namevent=?, address=? ,prix=? ,image=? ,date=? ,catigorie=?  WHERE idevent=?'

        db.query(sql,idevent,namevent,address,prix,image,date,catigorie,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (idevent,next)=>{
        let sql ='DELETE FROM Evenement WHERE idevent=${idevent}'
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}