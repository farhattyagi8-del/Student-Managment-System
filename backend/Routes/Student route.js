import express from 'express'
import addStudent from '../Controller/Student Controller.js'

const router = express.Router();

router.post('/', addStudent)

export default router ;