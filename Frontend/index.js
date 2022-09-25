const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
// init express app
const app = express();
// enabling cors
const options = {
    allowedHeaders: "Origin, X-Requested-With, Content-Type, Accept, x-auth-token",
    exposedHeaders: "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
}
app.use(cors(options));
// importing Routes
const userRoute = require('./routes/users');
// public folder conf
app.use(express.static(path.join(__dirname, 'public')));

// body-parser config
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// for handling uncaught exception from application
process.on('uncaughtException', (err) => {
    console.error("Uncaught Exception : ", err.message);
});

process.on('unhandledRejection', error => {
    console.log("From event: ", error.toString());
});
// Routes
app.use('/user', userRoute);
// Server start
app.listen(4000, (err, res) => {
    console.log("Listening on port 4000");
});