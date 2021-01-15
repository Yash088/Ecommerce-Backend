require('dotenv').config();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const app = new express();
const port = process.env.PORT || 8080;
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
// DB COnnection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(() => {
    console.log('DB CONNECTED');
  });

//Middleware Connectioin
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My Routes
app.use('/api', authRoutes);
app.use('/api', userRoutes);

//Port Listeining
app.listen(port, () => {
  console.log(`app is runnint on ${port}`);
});
