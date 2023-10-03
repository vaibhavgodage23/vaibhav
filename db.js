
const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/task")
.then(()=>{
    console.log(`connect to the database`);
}).catch((e)=>{
    console.log(`not connnected`);
})