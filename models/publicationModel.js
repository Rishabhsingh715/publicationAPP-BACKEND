import mongoose from 'mongoose'


const publicationSchema=mongoose.Schema({
    scholar:{
        type:String,
    },
    papertitle:{
        type:String
    },
    pp:{
        type:String
    },
    conference:{
        type:String
    },
    department:{
        type:String
    },
    faculity:{
        type:String
    },
    journal:{
        type:String
    }
})
const Publications=mongoose.model('publication',publicationSchema)

export default Publications