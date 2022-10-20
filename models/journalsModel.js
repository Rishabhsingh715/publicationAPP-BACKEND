import mongoose from "mongoose";

const journalsSchema=mongoose.Schema({
    jour_name:{
        type:String
    },
    jour_id:{
        type:String
    }

})

const Journal=mongoose.model('Journal',journalsSchema)

export default Journal