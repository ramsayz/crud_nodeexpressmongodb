const express=require("express")
const mongoose=require("mongoose")
const url="mongodb://localhost/milkpowders"

const app=express()
app.use(express.json())
app.use("/milkpowders",require("./router/milkpowders"))


mongoose.connect(url,{useNewUrlParser:true})
const conn=mongoose.connection



conn.on('open',()=>{
    console.log("Connected./././././././././././")
})

app.listen(9000,()=>{
    console.log("Server started on the port number 9000....")
})
