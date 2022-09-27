
function ethStringify(obj) {
    let str = JSON.stringify(obj);
    str = str.replace(/"/g, "'");
    return str;
}

function ethParse(ethStr) {
    str = ethStr.replace(/'/g, '"');
    obj = JSON.parse(str);
    return obj;
}

module.exports = {
    ethStringify: ethStringify,
    ethParse: ethParse
}