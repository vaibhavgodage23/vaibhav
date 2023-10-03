const express = require('express');
const route = express.Router();
const studentService = require('../services/student.service');

route.get("/", (req, res) => {
  res.send('Hello, World!');
});

route.post('/post', async (req, res) => {
  const result = await studentService.save(req.body);
  res.send({
    status: 200,
    data: result,
    success: true
  });
});


route.get('/sqrt', (req, res) => {
  const {number} = req.query;
  const sqrt = Math.sqrt(number);
  res.send(`Square root of ${number} is ${sqrt}`);
});

route.put("/update/:id", async (req, res) => {
  const result = await studentService.update(req.params.id, req.body); 
  res.send({
    status: 200,
    data: result,
    success: true
  });
});

route.delete("/delete/:id", async (req, res) => {
  const result = await studentService.delete(req.params.id); 
  res.send({
    status: 200,
    data: result,
    success: true
  });
});
module.exports = route;
