import mongoose from "mongoose";

const researchSchema=mongoose.Schema({
    roll_no:{
        type:String
    },
    name:{
        type:String
    },
    dept_id:{
        type:String
    },
    password:{
        type:String
    }
})

const Research=mongoose.model('Research',researchSchema)
export default Research