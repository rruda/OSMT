const http = require("http")
const express = require("express")
const app = express()
const router = require("./routes.js")
const bodyParser = require('body-parser')
const cors = require('cors')

const PORT = 5000
const url = "mongodb+srv://rula:rula@cluster0.mrzuj.mongodb.net/?retryWrites=true&w=majority"

app.use(cors())
app.use(bodyParser.json())
app.use("/api",router)

async function startApp(){
    try{
        app.listen(PORT,()=>{
            console.log("sucsefully conected with mongoDB")
        })
    }catch(e){
        console.log(e)
    }
}


startApp() 


