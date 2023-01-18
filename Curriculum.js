# Exam_Rest_API

import express from 'express'
import {getCurriculum, getCurriculums, addtCurriculum, updateCurriculum, deletetCurriculum,} from '../cntrollers/curriculums.js'
import {verifyToken} from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getCurriculums)
router.get('/:id', verifyToken, getCurriculum)
router.post('/', verifyToken, addCurriculum)
router.put('/:id', verifyToken, updateCurriculum)
router.delete('/:id', verifyToken, deleteCurriculum)

export default router
