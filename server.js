const express = require("express");
const router = require("./routing");
const static = require("./static");
const reg = require("./register");
const app = express();
const PORT = 3000;

app.listen(PORT, (err, res) => {
    if (err != null){
        console.log(err);
    }
    else{
        console.log("Succesful listen!");
    }
})

app.use(router);
app.use(static);
app.use(reg);