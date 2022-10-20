import express from 'express'
import { addResearch,getAllResearch} from '../controllers/research.js';
const router=express.Router();

router.route('/all').get(getAllResearch);
router.route('/add').post(addResearch);

export default router