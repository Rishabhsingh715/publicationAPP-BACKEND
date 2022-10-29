import {db} from './database.js';

const getAllFaculity=async(req,res)=>{
    try {
       
        let FACULTY =  await db.promise().query(`SELECT * FROM FACULTY`);
        res.status(200).json(FACULTY[0]);

    } catch (error) {
        res.status(500).json(error)
    }
}

const addFaculity=async(req,res)=>{
    try {
        let {fac_name,dept_id,password,fac_id}=req.body
        try {
            await db.promise().query(`INSERT INTO FACULTY VALUES('${fac_name}','${password}','${dept_id}',
                                '${fac_id}'
            )`);
           } catch (error) {
            console.log(error, 'while storing the scholar in sql database');
           }
        
        res.status(200);
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllFaculity,addFaculity}