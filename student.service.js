const express=require('express');
const studentModel=require('../model/student.model');
const app={

save:async(data)=>{
    return await studentModel.create(data);
},
data: async (id,topic)=>{
    const result =await studentModel.findByIdAndUpdate(id,topic,{new:true});
    return result;

},

delete:async(id)=>{
    const result=await studentModel.findByIdAndDelete(id);
    return result;
},


};
module.exports=app;