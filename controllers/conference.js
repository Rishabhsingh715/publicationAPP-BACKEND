import Conference from '../models/conferenceModel.js'
import { db } from './database.js'

const getAllConference=async(req,res)=>{
    try {
        // let conferences=await Conference.find({})
        let conferences = await db.promise().query(` SELECT * FROM CONFERENCES `)     //TABLE => CONFERENCES
        res.status(200).json(conferences)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addConference=async(req,res)=>{
    try {
        let {conf_name,conf_id}=req.body
        // let conferences=await Conference.create({conf_name,conf_id})
        let conferences = await db.promise().query(`INSERT INTO CONFERENCES VALUES(
            ${conf_name},
            ${conf_id},
        )`);
        res.status(200).json(conferences)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllConference,addConference}