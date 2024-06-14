const express = require('express');
const mongoose = require('mongoose');
const userRouter = require("./routes/user");
const loginRouter = require("./routes/login");
const forgetRouter = require("./routes/forget");
const memberRouter = require("./routes/member");
const cors = require('cors');

const app = express();
const port = 7000;
// app.use(express.urlencoded({ extended: false })); // Middleware to parse the frontend data
mongoose.connect("mongodb://127.0.0.1:27017/Eventify")
    .then(() => {
        console.log("MongoDB Connected");
    }).catch(() => {
        console.log("MongoDB NOt connected");
    });

app.use(cors());
app.use(express.json({ extended: true })); // Middleware to parse JSON

// app.use(cors({
//     origin: 'http://localhost:3000', // Replace with your front-end URL
//     methods: 'GET,POST,PUT,DELETE',
//     allowedHeaders: 'Content-Type,Authorization'
//   }));



app.use("/api", userRouter);
app.use("/api", loginRouter);
app.use("/api", forgetRouter);
app.use("/api", memberRouter);



app.listen(port, () => {
    console.log(`Eventify Server started on port  ${port}`);
});