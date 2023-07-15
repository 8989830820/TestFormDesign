

const express = require("express");

const User = require("./Model.js/User");


const { body,validationResult } = require('express-validator');
const router = express.Router();

router.post("/signin",async(req,res)=>{
   
  
  try{
    let email = "johndoe@example.com" ;
    let password = "test1" ;
  
    
        await User.create({email,password}); 
        res.json({success : true})
        console.log("user created")
  }catch(err){

    res.status(400).json({success  : false})
    console.log("error in creating user ")

  }
})


// router.post("/login",
// body('email').isEmail(),
   
    
//     async (req, res) => {
//         let email = req.body.email;
//         const errors = validationResult(req);
//         if (!errors.isEmpty()) {
//             return res.status(400).json({ errors: errors.array() })
//         },async(req,res)=>{
    
//     // try{
//     //     let email = req.body.email;
//     // let userData =  await User.findOne({email}); 
//     // if(!userData){
//     //     return res.status(400).json({ errors: "incorrect email " })

//     // }
    
//         res.json({success : true});
         
//     }
//     catch(err){
  
//       res.status(400).json({success  : false})
//       console.log("error in login")
  
//     }
//   })


router.post("/login",
    body('email').isEmail(),
    async (req, res) => {
        let email = req.body.email;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() })
        }
        try {
            let userData = await User.findOne({ email })

            if (!userData) {
                return res.status(400).json({ errors: "incorrect email " })
            }
            return res.json({ success: true})

        } catch (error) {
                console.log(error);
            res.json({ success: false })
        }
    })



  
module.exports = router;