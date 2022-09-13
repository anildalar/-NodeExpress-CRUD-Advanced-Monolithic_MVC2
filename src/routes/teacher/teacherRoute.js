const express = require('express');
const { teacherController } = require('../../controllers/teacher/teacherController');
const { authMiddleware, adminTeacherAuth } = require('../../middlewares/authMiddleware');


const teacherRoute = express.Router();

teacherRoute.post('/teacher/create',authMiddleware,adminTeacherAuth,teacherController);


module.exports = { teacherRoute }


