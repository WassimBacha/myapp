const eventModel = require('../models/event-model')


module.exports = {
    get : (req,res) => {
        eventModel.selectAll((result)=>{res.json(result)})
    },
    getById : (req,res)=>{
        eventModel.selectById(req.params.idevent, result =>{res.json(result)})
    },
    post : (req,res) => {
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        eventModel.insert(req.body, message =>{res.json({success : true, message})})
    },
    put : (req,res)=>{
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        eventModel.update(req.params.idevent,req.body, result =>{res.json({success : true, result})})
    },
    delete : (req,res)=>{
        if(!req.iduser)
            return res.status(400).json({success : false, message : "Access denied, please login."})
        eventModel.delete(req.params.idevent, result =>{res.json({success : true, result})})
    }
}

