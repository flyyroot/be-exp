const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const k = await mongoose.connect('mongodb+srv://miel:miele@cluster0.ztwxt.mongodb.net/learnMongo?retryWrites=true&w=majority')
        console.log(`Koneksi mongoDB berhasil ke akses ${k.connection.host}`)
    }
    catch (err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDB
