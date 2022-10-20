import mongoose from "mongoose";

const faculitySchema=mongoose.Schema({
    fac_name:{
        type:String
    },
    dept_id:{
        type:String
    },
    password:{
        type:String
    },
    fac_id:{
        type:String
    }
})

const Faculity=mongoose.model('Faculity',faculitySchema)
export default Faculity