import {db} from './database.js';

const getAllConference=async(req,res)=>{
    try {
        // let conferences=await Conference.find({})
        // res.status(200).json(conferences)
        let CONFERENCES =  await db.promise().query(`SELECT * FROM CONFERENCES`);
        // console.log(CONFERENCES[0], 'is the CONFERENCES');
        res.status(200).json(CONFERENCES[0]);

    } catch (error) {
        res.status(500).json(error)
    }
}

const addConference=async(req,res)=>{
    try {
        let {conf_name,conf_id}=req.body
      
        try {
            await db.promise().query(`INSERT INTO CONFERENCES VALUES('${conf_name}','${conf_id}' )`);
           } catch (error) {
            console.log(error, 'while storing the CONFERENCES in sql database');
           }
        
        res.status(200);
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllConference,addConference}