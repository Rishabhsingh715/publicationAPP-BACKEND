import {db} from './database.js';

const getAlljournals=async(req,res)=>{
    try {
        let JOURNAL =  await db.promise().query(`SELECT * FROM JOURNAL`);
        res.status(200).json(JOURNAL[0])
    } catch (error) {
        res.status(500).json(error)
    }
}

const addjournals=async(req,res)=>{
    try {
        let {jour_name,jour_id}=req.body
        try {
            await db.promise().query(`INSERT INTO JOURNAL VALUES('${jour_name}','${jour_id}' )`);
           } catch (error) {
            console.log(error, 'while storing the JOURNAL in sql database');
           }
        res.status(200);
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAlljournals,addjournals}