const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken')

// Register
router.post("/register", async (req, res) => {
  const newUser = new User({  
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Login
router.post("/login", async (req, res) => {
  try { 
    const user = await User.findOne({ username: req.body.username });
    
    if (!user) res.status(401).json({ message : "Wrong credentials!"})

    // DB user password decrypt
    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );

    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    
    if (OriginalPassword !== req.body.password) res.status(401).json({ message : "Wrong credentials!"})

    const accesToken = jwt.sign({
        id : user._id,
        isAdmin : user.isAdmin
    },
    process.env.JWT_SEC, 
    { expiresIn : "3d" } // TokenTime : 3 days. Login again after 3 days
    )
    
    // to not send a password 
    const { password, ...others} = user._doc;

    res.status(200).json({...others, accesToken})

  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
