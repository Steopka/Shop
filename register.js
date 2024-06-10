const mysql = require("mysql");
const express = require("express");
const parser = require("body-parser");
const app = express();
const reg = express.Router();
const connect = mysql.createConnection({
    host: "localhost",
    user: "baseadmin",
    password: "admin",
    database: "shop"
});

app.use(parser.urlencoded({extended: true}));

reg.post("/reg", (req, resp) => {
    const login = req.body.login;
    const password = req.body.login;
    connect.query(`INSERT INTO users (login, password) VALUES (${login}, ${password})`, (err, result) => {
        if (err != null) {
            console.log(err);
        }
        else{
            resp.redirect("/");
            console.log(result);
        }
    })
    connect.end();
})

module.exports = reg;