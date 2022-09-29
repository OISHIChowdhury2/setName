const { Router} = require('express');
const router = Router();
const Service = require('./index');

const{
    getInfo
}=require("./index");

router.post('/set_user',  async function (req, res, next) {
        try{
            let userData = {
                name: req.body.name,
                addres: req.body.addres,
                phone: req.body.phone
            }
            return res.status(200).json({txHash: txHash})
        }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});

module.exports =router;