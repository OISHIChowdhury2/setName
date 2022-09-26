const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');;
const auth = require('../middlewares/auth');
const Service = require('../service/userService')

// router.post('/create-user', async function (req, res, next) {
//     try {
//         let tempUser = await tempUserService.search(req.body.Id);
//         if (tempUser) {
//                 let info = Service.createEthinfo();
//                 let newPermanentUser = await userService.insert(
//                     tempUser.name,
//                     tempUser.addres,
//                     tempUser.phone,
//                     info.address,
//                     info.privateKey
//                 );
//                 let txHash = await Service.transferEthFromDefaultAccount(info.address, "1");
//                 return res.status(200).json({
//                     userId: newPermanentUser._id,
//                     Address: account.address,
//                     txHash: txHash
//                 });

//             }
//             else {
//                 return res.status(401).json({ message: "Invalid pin" });
//             }
//         }
//     catch (ex) {
//         return res.status(500).json({message: ex.toString()});
//     }
// });


// router.get('/get-user-info', async function(req, res) {
//     try {
//         let userInfo = await Service.searchByname(req.user.name);
//         console.log("from route: ", userInfo);
//         let selectedInfo = {
//             name: userInfo.name,
//             address: userInfo.address,
//             phone: userInfo.phone,
//         }
//         return res.status(200).json(selectedInfo);
//     }
//     catch(ex) {
//         return res.status(500).json({message: ex.toString()});
//     }
// });




router.get('./get-nid', async function (req, res, next) {
    try {
        let user = await Service.getUser(req.user.ethAddress);
        if (user.user.name) {
            let userName = await Service.searchByUsername(req.user.username);
            return res.status(200).json({ Data: user.user, userName: userName.userName });
        }
        return res.status(200).json({message: "No nid provided", Data: null});
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});
module.exports = router;