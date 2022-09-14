const express = require('express');
const { teacherController } = require('../../controllers/teacher/teacherController');
const { authMiddleware, adminAuth } = require('../../middlewares/authMiddleware');


const teacherRoute = express.Router();

teacherRoute.post('/teacher/create',authMiddleware,adminAuth,teacherController);


module.exports = { teacherRoute }


