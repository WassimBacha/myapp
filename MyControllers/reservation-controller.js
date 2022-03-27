const reservationModel = require('../models/reservation-model')


module.exports = {
    get : (req,res) => {
        reservationModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        reservationModel.selectById(req.params.idevent, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            reservationModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            reservationModel.update(req.params.idreservation,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
            reservationModel.delete(req.params.idreservation, result =>{res.json({success : true, result})})
    }
}

