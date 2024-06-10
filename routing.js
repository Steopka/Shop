const express = require("express");
const router = express.Router();
const path = require("path");
const pathtoFront = "../frontend";

function createpath(page) {
    return path.resolve(__dirname, `${pathtoFront}/${page}.html`)
}


router.get("/", (req, resp) => {
    resp.sendFile(createpath('index'));
})

module.exports = router;