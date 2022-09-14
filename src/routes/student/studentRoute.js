
const express = require('express');
const { studentController } = require('../../controllers/student/studentController');
const { authMiddleware, adminTeacherAuth } = require('../../middlewares/authMiddleware');
const { myValidator } = require('../../validators/validator');

const studentRoute = express.Router();


studentRoute.post('/student/create',authMiddleware,adminTeacherAuth,myValidator,studentController);


module.exports = { studentRoute }

