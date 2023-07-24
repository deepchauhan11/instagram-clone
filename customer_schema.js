const base = require("./mongo")
const mongoose=require("mongoose")

const customerSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const customer = mongoose.model("customer",customerSchema)

module.exports=customer
