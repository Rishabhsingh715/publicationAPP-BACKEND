import Department from "../models/departmentModel.js";
import { db } from "./database.js";

const getDepartments=async(req,res)=>{
    try {
        // let departments=await Department.find({})
        let departments = await db.promise().query(`SELECT * FROM DEPARTMENTS`)  // TABLE => DEPARTMENTS
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addDepartment=async(req,res)=>{
    try {
        let {dept_name,dept_id}=req.body
        // let departments=await Department.create({dept_name,dept_id})
        let departments = await db.promise().query(`INSERT INTO DEPARTMENTS VALUES(
            ${dept_name},
            ${dept_id}
        )`);
        res.status(200).json(departments)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getDepartments,addDepartment}