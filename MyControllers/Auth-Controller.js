const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const { uuid } = require('uuidv4');
const config = require('config')
const usersModel = require("../models/users-model")

module.exports = {
    login : (req,res) => {
        let {mail,mdp} = req.body
        
        if (!mail || !mdp) {
            return res.status(400).json({success : false, message : "Please enter all data"})
        }
        usersModel.selectByEmail(mail, user => {
            if(!user) {
                return res.status(400).json({success : false, message : "User does not exist"})}
            
            bcrypt.compare(mdp, user.mdp)
                .then(result => {
                    if(!result) 
                        return res.status(400).json({success : false, message : "Bad credantials"})

                    usersModel.selectByEmail(user.mail, user =>{
                        jwt.sign(

                            {id : user.iduser},
                            config.get("jwtSecret"),
                            { expiresIn: config.get("tokenExpire") },

                            (err, token)=>{
                                if(err) throw err
                                return res.status(200).json({
                                    success : true,
                                    token,
                                    user : {
                                        id: user.iduser,
                                        name: user.nom,
                                        prenom: user.prenom,
                                        tel: user.tel,
                                        Adress: user.Adress,
                                        mail: user.mail,
                                        type: user.type
                                    },
                                    })
                            }
                        )
                            
                    })
                })
        })
    },
    verifyToken : (req,res) => {
        console.log(req.iduser)
    }
}