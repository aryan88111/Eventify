const express = require('express');
const router = express.Router();
const User = require("../model/user");
const bcrypt = require("bcrypt");
router.post("/user-signup", async(req, res) => {

    const data = await User.findOne({ email: req.body.email });
    if (data) {
        return res.send("User Already Present in DataBase");
    } else {

        const newPassword = await bcrypt.hashSync(req.body.passWord, 10);
        const userData = new User({
            name: req.body.name,
            email: req.body.email,
            passWord: newPassword,
            answer1:req.body.answer1,
            answer2:req.body.answer2,
            answer3:req.body.answer3
        })
        await userData.save();
        return res.send({ userData, msg: ("user Created Successfully") });
    }




});
module.exports = router;