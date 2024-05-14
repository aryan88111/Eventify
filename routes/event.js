const express = require('express');
const router = express.Router();
const Event = require('../model/event');
router.post("/event", async(req, res) => {
    try {
        const { name, details, city, menu1, menu2, menu3, image, person, member, memberId } = req.body;
        console.log(req.body);
        const event = new Event({
            name,
            details,
            city,
            menu1,
            menu2,
            menu3,
            image,
            person,
            member,
            member: memberId

        })

    } catch {
        res.status(505).json({
            err: "error"
        })
    }
})