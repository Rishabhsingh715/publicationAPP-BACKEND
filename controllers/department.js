import Department from "../models/departmentModel.js";

const getDepartments=async(req,res)=>{
    try {
        let departments=await Department.find({})
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addDepartment=async(req,res)=>{
    try {
        let {dept_name,dept_id}=req.body
        let departments=await Department.create({dept_name,dept_id})
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getDepartments,addDepartment}