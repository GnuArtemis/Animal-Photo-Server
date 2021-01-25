const express = require("express");
const router = express.Router();
const db = require("../models");
const cors = require("cors");

router.use(cors( {origin: ["http://localhost:3000"]}))

router.get("/animals",function (req, res) {
    res.send("test successful")
    // db.animal.findAll({}).then(result => {
    //     res.json(result);
    // }).catch(err => {
    //     res.json(err)
    // })
})

module.exports = router;