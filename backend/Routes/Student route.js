import express from 'express'
import {addStudent, addClass} from '../Controller/Student Controller.js'


 export const router = express.Router();

  router.post('/student', addStudent)

  router.post('/class', addClass)

