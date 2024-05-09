const express = require('express')
 const router= express.Router();
 const Member=require("../model/member.js");
const bcrypt = require("bcrypt");
router.post("/join-us", async(req, res) => {

    const data = await Member.findOne({ email: req.body.email });
    if (data) {
        return res.send("Member Already Present in DataBase");
    } else {

        const newPassword = await bcrypt.hashSync(req.body.passWord, 10);
        const memberData = new Member({
            name: req.body.name,
            email: req.body.email,
            passWord: newPassword,
            contact_No:req.body.contact_No,
            address:req.body.address,
            image:req.body.image,
            answer1:req.body.answer1,
            answer2:req.body.answer2,
            answer3:req.body.answer3
        })
        await memberData.save();
        return res.send({ memberData, msg: ("Member Joined Successfully") });
    }




});
module.exports = router;