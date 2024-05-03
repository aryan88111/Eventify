const express = require('express');
const User = require('../model/user');
const router = express.Router();
const bcrypt = require("bcrypt");

router.post("/forget",async(req,res)=>{
  try{
    const userData=await User.findOne({email: req.body.email});
    await userData.save()
    console.log(userData,"uuuuuuuu");
    if(userData){
      console.log("asdfghj");
      console.log(userData.answer1);
      const Id=userData._id;
      console.log(Id);
        if(req.body.answer1==userData.answer1 && req.body.answer2==userData.answer2 && req.body.answer3==userData.answer3){
          const newPassword = await bcrypt.hashSync(req.body.passWord, 10);
          // const newPassword = await req.body.passWord;

          console.log(req.body);
          console.log(newPassword);
            const updatePassword=await User.findByIdAndUpdate(Id,{
              $set:{passWord:newPassword}
            });
            await updatePassword.save();
            await userData.save();
            console.log(updatePassword,"rrrrrrrr");
           return res.send("Password Updated")
        }
    }else{
       return res.send("Please check your email")
    }
    
  }catch{
    res.status(505);
  }
});
module.exports=router;