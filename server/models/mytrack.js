const mongoose = require('mongoose')

const mySchema = mongoose.Schema(
    {
        judul_lagu : {
            type:String,
            require:true,
        },
        penyanyi:{
            type:String,
            require:true,
        },
        tahun_terbit:{
            type:Number,
            require:true,
        },
        
    },
    {timestamps:true}
    )
mySchema.method("toJSON", function() {
        const { __v, _id, ...object } = this.toObject();
        object.id = _id;
        return object;
});

module.exports = mongoose.model('blogs',mySchema)