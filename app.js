const express= require('express')
require('dotenv').config()
const dbConnect =require ('./config/conection')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('./public'))
app.set('view engine','ejs')

const common=require("./routes/commonRouter")
const { signupPost } = require('./controller/authcontroller')
app.use("/",common)

dbConnect().then(()=>{
    app.listen(port,()=>{
        console.log(`server running on ${port}`);
    })
}).catch((err)=>{
    console.error('Database connection failed:', err);
})
