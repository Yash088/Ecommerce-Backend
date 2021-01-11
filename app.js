require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = new express();
const port = process.env.PORT || 8080;
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('DB CONNECTED');
  });
app.listen(port, () => {
  console.log(`app is runnint on ${port}`);
});
