const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const Service = require('../service/userService')

router.post('/create-user', async function (req, res) {
    console.log("mimon");
    // try {
    //     let userData = {
    //         name: req.body.name,
    //         addres: req.body.addres,
    //         phone: req.body.phone,
    //         issueDate: req.body.issueDate,
    //         address: req.body.address
    //     }
      
    //     let txHash = await Service.setUser(
    //         req.user.ethAddress,
    //         req.user.privateKey,
    //         userData
    //     );
    //     return res.status(200).json({ txHash: txHash,});

    // }
    // catch (ex) {
    //     console.log(ex);
    //     return res.status(500).json({message: ex.toString()});
    // }
});

router.get('/all-user',async function (req, res) {    
    try {
        let userid = await Service.getUser(req.user.Address);
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

router.get('/get-nidlog',  async function (req, res, next) {
    try {
        let nl = await Service.getUser(req.user.ethAddress);
        return res.status(200).json({ userLog: nl });
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});




module.exports = router;