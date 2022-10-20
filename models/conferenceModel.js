import mongoose from "mongoose";

const conferenceSchema=mongoose.Schema({
    conf_name:{
        type:String
    },
    conf_id:{
        type:String
    }
})

const Conference=mongoose.model('Confernece',conferenceSchema)

export default Conference