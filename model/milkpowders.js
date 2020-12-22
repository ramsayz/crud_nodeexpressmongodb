const mongoose=require("mongoose")
const milkpowderSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    colour:{
        type:String,
        required:true
    },
    weight:{
        type:Number,
        required:true
    },
    recommended:{
        type:Boolean,
        default:false,
        required:true
    }
})
module.exports=mongoose.model('MilkPowder',milkpowderSchema)
