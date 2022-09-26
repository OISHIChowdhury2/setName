const Service = require('../service/userService');

async function Check(req, res, next) {
    try {
        let status = await Service.isEthAlive();
        if (status) next();
        else return res.status(500).json({ message: "Blockchain Node is Down" });
    }
    catch (ex) {
        return res.status(500).json({ message: ex.toString() });
    }
}
module.exports = {
    Check: Check
}