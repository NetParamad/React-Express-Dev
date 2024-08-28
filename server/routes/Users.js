const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/", async (req, res) => {
    const { username, password } = req.body;
    bcrypt.hash(password, 10).then((hash) => {
        Users.create({
            username: username,
            password: hash
        });
        res.json("User created");
    });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await Users.findOne({ where: { username: username } });
    if (user) {
        bcrypt.compare(password, user.password).then((match) => {
            if (match) {
                res.json(user);
            } else {
                res.json("Wrong password");
            }
        });
    } else {
        res.json("Wrong username");
    }
})


module.exports = router;
