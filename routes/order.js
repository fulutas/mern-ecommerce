const router = require("express").Router();
const Order = require("../models/Order");
const CryptoJS = require("crypto-js");
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("../middleware/verifyToken");


// CREATE ORDER (all users can create)
router.post('/', verifyToken, async (req, res) => {
    const newOrder = new Order(req.body)

    try {
        const savedOrder = await newOrder.save()
        res.status(200).json(savedOrder)
    } catch (error) {
        res.status(500).json(error)
    }
})


// UPDATE ORDER (only admins can update cart records)
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {
 
   try {
    const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
        $set : req.body
    }, { new : true})

    res.status(200).json(updatedOrder)

   } catch (error) {
    res.status(500).json(error)
   }
})

// DELETE ORDER (only admins can delete cart records)
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        const order = await Order.findByIdAndDelete(req.params.id)

        res.status(200).json({ message : 'Order has been deleted.', order })
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET USER ORDERS 
router.get('/find/:userId', verifyTokenAndAuthorization, async (req, res) => {
    try {
        const order = await Order.find({ userId : req.params.userId })

        res.status(200).json(order)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL ORDERS (only admins can see all cart records)
router.get('/', verifyTokenAndAdmin, async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET MONTHLY INCOME ORDERS (only admins - last 2 months orders income)
router.get("/income", verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router