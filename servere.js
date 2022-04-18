const mongo = require('mongoose')
const express = require('express')
const app = express()
const connectDB = require('./server/db/koneksi')
const route = require('./server/routes/record')
const port = process.env.port || 6000
app.listen(port,()=>console.log(`Server running at port ${port}`))
connectDB()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use('/songs',route)


