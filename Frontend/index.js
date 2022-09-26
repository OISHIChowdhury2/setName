const fs = require('fs');
const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


// const Userroute = require('./routes/usersRoute')

// init express app
const app = express();
app.use(cors);

const userRoute = require('./routes/usersRoute');
// app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// process.on('uncaughtException', (err) => {
//     console.error("Uncaught Exception : ", err.message);
// });
// process.on('unhandledRejection', error => {
//     console.log("From event: ", error.toString());
// });
console.log("Oishi");
// Routes
app.use('/get', userRoute);
// app.use('/nid', nidRoute);
// app.use('/tin', tinRoute);
// app.use('/eth', ethRoute);

// Server start
app.listen(3000, (err, res) => {
    console.log("Listening on port 3000");
}

);

