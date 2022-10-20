import mongoose from "mongoose";

const departmentSchema=mongoose.Schema({
    dept_name:{
        type:String
    },
    dept_id:{
        type:String
    }
})

const Department=mongoose.model('Department',departmentSchema)
export default Department