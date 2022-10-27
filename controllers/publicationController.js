import Publications from "../models/publicationModel.js"
import mongoose from "mongoose";
import { db } from "./database";
const ObjectId = mongoose.Types.ObjectId;

const getAllPublication = async (req, res) => {
    try {
        // const publication = await Publications.find({})
        const publication = await db.promise().query(`SELECT * FROM PUBLICATIONS`)   //TABLE ==> PUBLICATIONS
        if (publication) {
            res.status(200).json(publication)
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
        // const publication = await Publications.create({scholar,papertitle,pp,conference,department,faculity,journal })
        const publication = await db.promise().query(`INSERT INTO PUBLICATIONS VALUES(
            '${scholar}',
            '${papertitle}'
            '${pp}',
            '${conference}',
            '${department}',
            '${faculity}',
            '${journal}',
        ,)`)
        if (publication) {
            res.status(200).json(publication)
        } else {
            res.status(500).json({ message: 'something went wrong' })
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

const getFaculityPublication = async (req, res) => {
    try {
        let id = ObjectId(req.parms.faculity)
        // const publication = await Publications.find({ faculity: id })
        const publication = await db.promise().query(`
                SELECT * FROM PUBLICATIONS WHERE ${faculty} EQUALS ${id}
        `);
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