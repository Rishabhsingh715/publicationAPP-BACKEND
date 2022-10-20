import express from 'express'
import {addFaculity,getAllFaculity  } from '../controllers/faculity.js';
const router=express.Router();

router.route('/all').get(getAllFaculity);
router.route('/add').post(addFaculity);

export default router