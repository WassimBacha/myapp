
const express = require('express');
var mysql = require('mysql');

// cree une connection db connect
const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password :'',
    port : '3306'  ,
    
    
   
});
// connection 
db.connect(function(err) {
    if (err) throw err;
    console.log("Connected to mysql!");
  });



const app = express();
// create database 
app.get('/createdb' , (req,res) => {
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql,(err,result)=>{
        if(err) throw err ;
        console.log(result);
        res.send('database created');
    });
});




app.listen('5000',()=>{
    console.log('server started on porte 3306')
});


