import Journal from '../models/journalsModel.js'

const getAlljournals=async(req,res)=>{
    try {
        let journals=await Journal.find({})
        res.status(200).json(journals)
    } catch (error) {
        res.status(500).json(error)
    }
}

const addjournals=async(req,res)=>{
    try {
        let {jour_name,jour_id}=req.body
        let journals=await Journal.create({jour_name,jour_id})
        res.status(200).json(journals)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAlljournals,addjournals}