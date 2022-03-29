const userModel = require('../models/users-model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = {
    get : (req,res) => {
        userModel.selectAll((result)=>{res.json({success : true, result})})
    },
    //Helper
    getById : (req,res)=>{
        userModel.selectById(req.params.iduser, result =>{res.json(result)})
    },
    //Resiter
    post : (req,res) => {
        const newUser = req.body
        if(!newUser.mail || !newUser.mdp || !newUser.nom) 
            return res.satus(400).json({success : false, message : "Please enter all data"})

        userModel.selectByEmail(newUser.mail, user => {
            if(user)
                return res.status(400).json({success : false, message : "Email already exist"})

            bcrypt.genSalt(10, (err, salt)=>{
                if(err) throw err
                bcrypt.hash(newUser.mdp, salt, (err, hash)=>{
                    if (err) throw err
                    newUser.mdp = hash
                    userModel.insert(newUser, message =>{
                        jwt.sign(
                            {iduser : message.insertId},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },
                            (err, token)=>{
                                if(err) throw err
                                res.json({
                                    success : true,
                                    token,
                                    user : {
                                        iduser: newUser.iduser,
                                        name: newUser.nom,
                                        email: newUser.prenom,
                                        tel: newUser.tel,
                                        Adress: newUser.Adress,
                                        type: newUser.type,
                                    }
                                })
                            }
                        )
                    })
                })
            })
        })
    },
    put : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.update(req.params.id,req.body, result =>{res.json({success : true , result})})
    },
    delete : (req,res)=>{
        if(!req.userid)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        userModel.delete(req.params.id, result =>{res.json({success : true , result})})
    }
}