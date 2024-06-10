const express = require("express");
const router = require("./routing")
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