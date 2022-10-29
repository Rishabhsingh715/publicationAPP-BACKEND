import {db} from './database.js';

const getAllResearch=async(req,res)=>{
    try {
        // let researchs=await Research.find({})
        let research =  await db.promise().query(`SELECT * FROM RESEARCHERS`);
        // console.log(research[0], 'is the scholars');
        res.status(200).json(research[0]);
    } catch (error) {
        res.status(500).json(error)
    }
}

const addResearch=async(req,res)=>{
    try {
        let {roll_no,name,dept_id,password}=req.body
        
        await db.promise().query(`INSERT INTO RESEARCHERS VALUES('${roll_no}','${name}','${dept_id}',
                            '${password}'
        )`);

        res.status(200).json(researchs)
    } catch (error) {
        res.status(500).json(error)
    }
}

export {getAllResearch,addResearch}