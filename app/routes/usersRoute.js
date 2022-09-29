const { Router }= require('express')
const router = Router();
const path = require('path');
const fs = require('fs');
const Service = require('../service/userService');
// const { getUser } = require('../service/userService');
// console.log("mimon");

const{getUser,setUser}=require("../service/userService")

router.post('/create-user', async function (req, res) {
    try {
        let userData = {
            name: req.body.name,
            // addres: req.body.addres,
            // phone: req.body.phone,
           
        }
      
        let txHash = await Service.setUser(
            req.user.ethAddress,
            req.user.privateKey,
            userData
        );
        return res.status(200).json({ txHash: txHash,});

    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});

router.get('/get-user',async function (req, res) { 
    // res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');  
 
    try {
        let userid = await Service.getUser(req.user.ethAddress);
        // if (nid.nid.name) {
        //     let nidImg = await nidImageService.searchByUsername(req.user.username);
         return res.status(200).json({ userData: userid.userid, });
        // }
        //return res.status(200).json({message: "No nid provided", userData: null});
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});


// router.get('/user', getUser)
//     { 
//         res.send('Welcome to Edurekas REST API with Node.js Tutorial!!');  
//         console.log("mimon"); 
// }






module.exports = router;
