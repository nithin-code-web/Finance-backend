const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");
const { createTransaction } = require("../controllers/transactionController");
const {getTransactions} = require("../controllers/transactionController");
const {updateTransaction} = require("../controllers/transactionController");
const {deleteTransaction} = require("../controllers/transactionController"); 


// Only admin & analyst can create

router.post("/", auth, roleCheck("admin", "analyst"), createTransaction);

// All authenticated users can view their transactions
router.get("/",auth,getTransactions);

// Admin & analyst can update any transaction
router.put("/:id", auth, roleCheck("admin"), updateTransaction);

// Admin can delete any transaction
router.delete("/:id", auth, roleCheck("admin"), deleteTransaction);




module.exports = router;