const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors);

const userRoute = require('./route');

// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception : ", err.message);
});
process.on('unhandledRejection', error => {
    console.log("From event: ", error.toString());
});
// console.log("Oishi");
// Routes
app.use('/user', userRoute);

// Server start
app.listen(7545,function(req,res) {
    console.log("Listening on port 7545");
    
});

