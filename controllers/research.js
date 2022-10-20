import Research from '../models/reserachModel.js'

const getAllResearch=async(req,res)=>{
    try {
        let researchs=await Research.find({})
        res.status(200).json(researchs)
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
        console.log(researchs);
        res.status(200).json(researchs)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllResearch,addResearch}