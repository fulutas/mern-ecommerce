const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");

// UPDATE USER FIELD 
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    
   if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.PASS_SEC
      ).toString()
   }

   try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, {
        $set : req.body
    }, { new : true})

    // to not send a password 
    const { password, ...others} = updatedUser._doc

    res.status(200).json({...others})

   } catch (error) {
    res.status(500).json(error)
   }
})

// DELETE USER
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        const { password, ...others} = user._doc 

        res.status(200).json({ message : 'User has been deleted.', ...others })
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET USER
router.get('/find/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...others} = user._doc 

        res.status(200).json(others)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL USER
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    // query.new params convert string to boolean
    const query = JSON.parse(req.query.new) 
    try {
        // If there is new in the query, it returns the last 5 created user information.
        // select => for skip password 
        const users = query ? await User.find().sort({ createdAt : -1 }).limit(1) : await User.find().select('-password')        
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router