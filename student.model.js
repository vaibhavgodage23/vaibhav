const mongoose=require("mongoose");
require("../config/db");
const VaibhavSchema =new mongoose.Schema({
    emp_id:Number,
    name:String,
    dept_id:Number,
  address:String,



},
{strict:false})
const Student =mongoose.model("vaibhav",VaibhavSchema);
module.exports=Student;
