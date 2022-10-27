import Faculity from '../models/faculityModel.js'
import { db } from './database.js'

const getAllFaculity=async(req,res)=>{
    try {
        // let faculityies=await Faculity.find({})
        let faculityies = await db.promise().query(`SELECT * FROM FACULTY`);  //TABLE => FACULTY
        res.status(200).json(faculityies)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addFaculity=async(req,res)=>{
    try {
        let {fac_name,dept_id,password,fac_id}=req.body
        // let faculityies=await Faculity.create({
        //     fac_name:fac_name,
        //     dept_id:dept_id,
        //     password:password,
        //     fac_id:fac_id
        // })
        let faculityies = await db.promise().query(`INSERT INTO FACULTY VALUES(
            ${fac_name},
            ${dept_id},
            ${password},
            ${fac_id},
        )`);
        console.log(faculityies,'ddddddddddddddd');
        res.status(200).json(faculityies)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllFaculity,addFaculity}