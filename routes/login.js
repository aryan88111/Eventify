const express = require('express');
const User = require('../model/user');
const Member = require('../model/member');
const router = express.Router();
const bcrypt = require("bcrypt");


router.post("/user-login", async(req, res) => {
    const loginData = await User.findOne({ email: req.body.email });

    if (loginData) {

        const validPassword = await bcrypt.compare(req.body.passWord, loginData.passWord);
        if (validPassword) {
            res.send("Login Successfully")
        } else {
            res.send("login failed")
        }
    } else {
        return res.send("User not found Please Create  new Account");

    }


})
router.post("/member-login", async(req, res) => {
    const loginData = await Member.findOne({ email: req.body.email });

    if (loginData) {

        const validPassword = await bcrypt.compare(req.body.passWord, loginData.passWord);
        if (validPassword) {
            res.send(" MemberLogin Successfully")
        } else {
            res.send("login failed")
        }
    } else {
        return res.send("Member not found Please Create  new Account");

    }


})
module.exports = router;