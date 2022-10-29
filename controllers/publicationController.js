import {db} from './database.js';

const getAllPublication = async (req, res) => {
    try {
        let publication =  await db.promise().query(`SELECT * FROM publication`);
        
        if (publication) {
            res.status(200).json(publication[0])
        } else {
            res.status(400).json({ message: 'publications not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const addPublication = async (req, res) => {
    try {
        const {scholar,papertitle,pp,conference,department,faculity,journal } = req.body
        // console.log(req.body, 'is the body');
        try {
            await db.promise().query(`INSERT INTO publication VALUES('${scholar}','${papertitle}','${pp}',
            '${conference}','${department}','${faculity}','${journal}')`);
           } catch (error) {
            console.log(error, 'while storing the publication in sql database');
           }
        
        res.status(200);
    } catch (error) {
        res.status(500).json(error)
    }
}

const getFaculityPublication = async (req, res) => {
    try {
        let id = ObjectId(req.parms.faculity)
        const publication = await Publications.find({ faculity: id })
        if (publication) {
            res.status(200).json(publication)
        } else {
            res.status(404).json({ message: 'not found' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}



export { getAllPublication, addPublication, getFaculityPublication }