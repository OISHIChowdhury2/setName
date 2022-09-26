// // const jwt = require('jsonwebtoken');
// const fs = require('fs');
// const path = require('path');

// var authenticate = async  (message) =>{
//         try {
//             if(!fs.existsSync(path.join(__dirname,'..','log')))
//             {
//                 await fsPromises.mkdir(path.join(__dirname,'..','log'));
//             }
//             await fsPromises.appendFile(path.join(__dirname,'..','log',));
//             }
//     catch (ex) {
//         return res.status(400).json({ message: "Bad Request" });
//        }
//     }

// module.exports = { authenticate,authenticate}