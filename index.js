const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 3000;

const userRoute = require('./routes/user')

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

app.use(express.json())  
app.use('/api/users', userRoute)

app.listen(PORT, () => {
  console.log(`Backend server is running PORT : ${PORT}`);
});
