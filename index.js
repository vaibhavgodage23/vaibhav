const express=require('express');
const bodyParser=require('body-parser');


const PORT=4000;

const app=express();
app.use(express.json());
app.use(bodyParser.json());
 

const studentapi=require('./route/student.route');


app.use('/student',studentapi)
app.listen(PORT,()=>{
    console.log("api is running");
});

