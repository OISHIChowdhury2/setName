const { Router} = require('express');
const router = Router();
const contract= require('./controller');


router.get('/', (req, res) => {
    return res.status(200).json({})
})
router.post('/setUser', async function(req, res, next)  {
     try{
        let userData = {
                name: req.body.name,
                addres: req.body.addres,
                phone: req.body.phone
            }
            let txHash = await contract.setUser(

                userData,
            );
            // console.log(userData);
            return res.status(200).json({txHash: txHash});
        }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});

router.get('/get-user', async function (req, res, next) {

    // try {
    //     let nl = await SetGetContract.getInfo(req.user.Contract);
    //     return res.status(200).json({ nidLog: nl });
    // }
    // catch (ex) {
    //     console.log(ex);
    //     return res.status(500).json({message: ex.toString()});
    // }
    try {
        let nl = await contract.getInfo(req.user.user);
        return res.status(200).json({nl});
    }
    catch (ex) {
        console.log(ex);
        return res.status(500).json({message: ex.toString()});
    }
});


module.exports = router;