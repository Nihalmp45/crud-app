const express = require('express')
const bodyParser = require("body-parser");
const connectDB = require('./server/database/connect');

const app = express()


const port = 8080



//parse request to body-parser
app.use(bodyParser.urlencoded({ extended : true}))


app.get('/',(req,res)=>{
    res.send('Crud Application')
})

const start = async () =>{
    try{
        await connectDB()
        app.listen(port,
            console.log(`server is connected to port ${port}`))
    }catch(error){
        console.log(error)
    }
}
start();