const express = require("express");
const router = express.Router();
const path = require("path");

function createpath(page) {
    return path.resolve(__dirname, `../frontend/${page}.html`)
}

router.get("/", (req, resp) => {
    resp.sendFile(createpath('index'));
})

module.exports = router;