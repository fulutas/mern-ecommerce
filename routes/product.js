const router = require("express").Router();
const Product = require("../models/Product");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// CREATE NEW PRODUCT
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    if(Product.find({ "title" : newProduct.title }).limit(1)){
        return res.status(401).json({ message : 'You cannot add a new record from the same product title.' })
    }

    try {
        const savedProduct = await newProduct.save()
        res.status(200).json(savedProduct)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE PRODUCT
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
 
   try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
        $set : req.body
    }, { new : true})

    res.status(200).json(updatedProduct)

   } catch (error) {
    res.status(500).json(error)
   }
})

// DELETE PRODUCT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id)

        res.status(200).json({ message : 'Product has been deleted.', ...product })
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
        const users = query ? await User.find().sort({ createdAt : -1 }).limit(5) : await User.find().select('-password')        
        res.status(200).json(users)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET USER STATS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date()
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

    try {
        
        const data = await User.aggregate([
            // ref schema field createdAt
            { $match : { createdAt : { $gte : lastYear } }},
            { $project : { 
                month : { $month : "$createdAt" }
            }},
            { $group : {
                _id : "$month",
                total : { $sum : 1 }, // total user count
            }}
        ])

        res.status(200).json(data)

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router