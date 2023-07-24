const express = require("express")
const Customer = require("./customer_schema")
const app = express()
const cors = require("cors")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get("/",cors(),(req,res)=>{

})

app.post("/login",async(req,res)=>{
    console.log("req.body", req.body)
    
    const{email,password}=req.body

    try{
        const data=await Customer.findOne({email:email, password:password}).exec()
        if(data){
            res.json(data)
        }
        else{
            res.json("invalid")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/signup",async(req,res)=>{
    const{name,email,username,password}=req.body

    const data={
        email:email,
        name:name,
        username:username,
        password:password
    }

    try{
        const check=await Customer.findOne({email:email})

        if(check){
            res.json("email already exists")
        }
        else{
            await Customer.insertMany([data])
            res.json("sign up successful")
        }

    }
    catch(e){
        res.json("error while creating new customer")
    }
})



app.listen(8001,()=>{
    console.log("port connected");
})