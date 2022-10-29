import {db} from './database.js';


const getDepartments=async(req,res)=>{
    try {
        // let departments=await Department.find({})
        // res.status(200).json(departments)
        let research =  await db.promise().query(`SELECT * FROM DEPARTMENT`);
        // console.log(research[0], 'is the DEPARTMENT');
        res.status(200).json(research[0]);
    } catch (error) {
        res.status(500).json(error)
    }
}

const addDepartment=async(req,res)=>{
    try {
        let {dept_name,dept_id}=req.body
       
        try {
            await db.promise().query(`INSERT INTO DEPARTMENT VALUES('${dept_name}','${dept_id}' )`);
           } catch (error) {
            console.log(error, 'while storing the DEPARTMENT in sql database');
           }
        
        res.status(200);

    } catch (error) {
        res.status(500).json(error)
    }
}

export {getDepartments,addDepartment}