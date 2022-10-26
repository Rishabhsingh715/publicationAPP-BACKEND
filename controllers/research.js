import Research from '../models/reserachModel.js'
// const db = require('./database');
import {db} from './database.js';


const getAllResearch=async(req,res)=>{
    try {
        // let researchs=await Research.find({})
        let research =  await db.promise().query(`SELECT * FROM USERS`);
        console.log(research[0], 'is the scholars');
        res.status(200).json(research[0])
    } catch (error) {
        res.status(500).json(error)
    }
}

const addResearch=async(req,res)=>{
    try {
        let {roll_no,name,dept_id,password}=req.body
        let researchs=await Research.create({
            roll_no:roll_no
            ,name:name
            ,dept_id:dept_id
            ,password:password
        })

       try {
        await db.promise().query(`INSERT INTO USERS VALUES('${name}',
                            '${password}'
        )`);
       } catch (error) {
        console.log(error, 'while storing the scholar in sql database');
       }

        console.log(researchs);
        res.status(200).json(researchs)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllResearch,addResearch}