require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const { PORT, HOST, MONGODBURL } = process.env;
const homeRouter = require('./routers/homeRouter');
const AdminRouter = require('./routers/AdminRouter');

app.use(express.json());

app.use('/', homeRouter);
app.use('/admin', AdminRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../', 'client', 'build')));
  app.use((request, response) => {
    response.sendFile(
      path.join(__dirname, '../', 'client', 'build', 'index.html')
    );
  });
}

mongoose.set('strictQuery', false);
mongoose.connect(MONGODBURL, {}, (error) => {
  if (error) return console.log(error);

  if (process.env.NODE_ENV === 'production') {
    app.listen(4000, HOST, () => {
      console.log(`server started in port: ${4000}`);
    });
  } else {
    app.listen(PORT, HOST, () => {
      console.log(`server started in port: ${PORT}`);
    });
  }
});
