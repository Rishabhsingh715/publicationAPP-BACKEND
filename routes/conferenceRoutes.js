import express from 'express'
import { getAllConference,addConference } from '../controllers/conference.js';
const router=express.Router();

router.route('/all').get(getAllConference);
router.route('/add').post(addConference);

export default router