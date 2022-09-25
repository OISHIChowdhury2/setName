const {Router} =require('express');
const router = Router();
const{
    getAll,
} = require("../config");

router.get("/", getAll);

module.exports = router;