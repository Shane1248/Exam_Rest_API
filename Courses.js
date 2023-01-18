# Exam_Rest_API
import express from 'express'
import {getCourse, getCourses, updateCourse, deleteCourse} from '../controllers/courses.js'
import {verifyToken} from '../middleware/auth.js'

const router = express.Router({mergeParams: true})

router.get('/', verifyToken, getCourses)
router.get('/:id', verifyToken, getCourse)
router.post('/', verifyToken, addCourse)
router.put('/:id', verifyToken, updatetCourse)
router.delete('/:id', verifyToken, deletetCourse)

export default router
