const express = require("express")
const cors = require("cors")
const app=express()

app.listen(5000,()=>{
    console.log("Server Connected 5000 ")

})

app.use(cors())
app.use(express.json())