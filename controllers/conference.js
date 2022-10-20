import Conference from '../models/conferenceModel.js'

const getAllConference=async(req,res)=>{
    try {
        let conferences=await Conference.find({})
        res.status(200).json(conferences)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addConference=async(req,res)=>{
    try {
        let {conf_name,conf_id}=req.body
        let conferences=await Conference.create({conf_name,conf_id})
        res.status(200).json(conferences)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllConference,addConference}