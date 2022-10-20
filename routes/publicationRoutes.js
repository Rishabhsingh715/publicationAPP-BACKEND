import express from "express";
const router=express.Router();
import {getAllPublication,addPublication,getFaculityPublication} from '../controllers/publicationController.js'

router.route('/all').get(getAllPublication)
router.route('/add').post(addPublication)
router.route('/all/:faculity').get(getFaculityPublication)

export default router