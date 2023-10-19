const mongoose = require('mongoose');


const transectionSchema= new mongoose.Schema({
    userid:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        require:[true,'amount is required']
    },
    type:{
        type:String,
        required:[true,"type is required"],
    },
    category:{
        type:String,
        require:[true,'category is required']
    },
    refrence:{
        type:String
    },
    description:{
        type:String,
        require:[true,'description is required']
    },
    date:{
        type:Date,
        require:[true,'date is required']
    }
},{timestamps:true});

const transectioModel = mongoose.model('transections',transectionSchema)
module.exports = transectioModel;