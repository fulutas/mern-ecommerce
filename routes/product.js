const router = require("express").Router();
const Product = require("../models/Product");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// CREATE NEW PRODUCT
router.post('/', verifyTokenAndAdmin, async (req, res) => {
    const newProduct = new Product(req.body)

    const productTitleExists = await Product.exists({ title : newProduct.title})
    if(productTitleExists) {
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

        res.status(200).json({ message : 'Product has been deleted.', product })
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET PRODUCT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)

        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL PRODUCTS & QUERY PARAMS
router.get('/', async (req, res) => {

    const qNew = req.query.new
    const qCategory = req.query.category

    try {
        let products;
        
        // last top 5 product
        if(qNew){
            products = await Product.find().sort({ createdAt : -1 }).limit(5)
        } else if(qCategory){
            products = await Product.find({ categories : {
                $in : [qCategory],
            }}) 
        }else {
            products = await Product.find()
        }

        res.status(200).json(products)

    } catch (error) {
        res.status(500).json(error)
    }
})


module.exports = router