const express = require('express');
const app = express();

const env = require('dotenv');
const { registerRoute, loginRoute } = require('./routes/authRoute');
const { teacherRoute } = require('./routes/teacher/teacherRoute');
const { studentRoute } = require('./routes/student/studentRoute');

env.config();
let port = process.env.PORT || 6000;

//mongodb+srv://oklabs:letmein123321@oklabsmongodbserver.dgmru.mongodb.net/?retryWrites=true&w=majority

app.use(express.json());

app.use('/api',registerRoute);
app.use('/api',loginRoute);
app.use('/api',teacherRoute);
app.use('/api',studentRoute);

app.listen(port,()=>{
    console.log('listening on port',port)
});