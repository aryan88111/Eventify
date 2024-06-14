const express = require('express')
const router = express.Router();
const Member = require("../model/member.js");
const bcrypt = require("bcrypt");

///posting the member data
router.post("/member-signup", async(req, res) => {


    const data = await Member.findOne({ email: req.body.email });
    if (data) {
        return res.send("Member Already Present in DataBase");
    } else {

        const newPassword = await bcrypt.hashSync(req.body.passWord, 10);
        const memberData = new Member({
            name: req.body.name,
            email: req.body.email,
            passWord: newPassword,
            contact_No: req.body.contact_No,
            address: req.body.address,
            image: req.body.image,
            answer1: req.body.answer1,
            answer2: req.body.answer2,
            answer3: req.body.answer3

        })
        await memberData.save();
        return res.send({ memberData, msg: ("Member Joined Successfully") });
    }




});


// get alll the members

router.get("/member", async(req, res) => {
    try {
        let memberData = await Member.find();
        if (memberData) {
            res.send(memberData);
        } else {
            res.send("No Member is Present")
        }

    } catch {
        res.send("errrrrrr")
    }
});

//get member using id
router.get("/member/:id", async(req, res) => {
    try {
        const Id = req.params.id;
        let memberData = await Member.findById(Id);
        if (memberData) {
            res.send(memberData);
        } else {
            res.send("No Member is Present")
        }

    } catch {
        res.send("errrrrrr")
    }
});


//update member at perticular id

router.patch("/member/:id", async(req, res) => {
    try {
        const Id = req.params.id;
        let memberData = await Member.findByIdAndUpdate(Id, req.body, { new: true });
        if (memberData) {
            res.send(memberData);
        } else {
            res.send("No Member is Present")
        }

    } catch {
        res.send("errrrrrr")
    }
});


///delete the perticular member
router.delete("/member/:id", async(req, res) => {
    try {
        const Id = req.params.id;
        let memberData = await Member.findById(Id);
        if (memberData) {
            await Member.findByIdAndDelete(Id)
            res.send("Member Deleted Successfully");
        } else {
            res.send("No Member is Present")
        }

    } catch {
        res.send("errrrrrr")
    }
});

module.exports = router;