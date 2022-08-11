const router = require("express").Router();
const Cart = require("../models/Product");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// CREATE CART
router.post('/', verifyToken, async (req, res) => {
    const newCart = new Product(req.body)

    try {
        const savedCart = await newCart.save()
        res.status(200).json(savedCart)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE CART
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
 
   try {
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
        $set : req.body
    }, { new : true})

    res.status(200).json(updatedCart)

   } catch (error) {
    res.status(500).json(error)
   }
})

// DELETE CART
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id)

        res.status(200).json({ message : 'Cart has been deleted.', cart })
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET USER CART
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId : req.params.userId })

        res.status(200).json(cart)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL USERS CART
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts)
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router