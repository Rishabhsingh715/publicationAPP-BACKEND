import express from 'express'
import {getDepartments,addDepartment} from '../controllers/department.js'
const router=express.Router();


router.route('/all').get(getDepartments);
router.route('/add').post(addDepartment)

export default router