const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

mongoose
  .connect(process.env.MONGO_URL, {
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASS,
  })
  .then(() => {
    console.log("DB Connection Successfull!");
  })
  .catch((err) => {
    console.log(err);
  });

app.get('/api/test', () => {
    console.log('test is successfully')
})  

app.listen(PORT, () => {
  console.log(`Backend server is running PORT : ${PORT}`);
});
