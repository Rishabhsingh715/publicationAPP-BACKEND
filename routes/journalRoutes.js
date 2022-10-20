import express from 'express'
import { addjournals,getAlljournals } from '../controllers/journal.js';
const router=express.Router();

router.route('/all').get(getAlljournals);
router.route('/add').post(addjournals);

export default router