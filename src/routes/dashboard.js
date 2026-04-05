const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const { getSummary } = require("../controllers/transactionController");
const { getCategorySummary } = require("../controllers/transactionController");

// Dashboard summary
router.get("/summary", auth, getSummary);

// Category summary
router.get("/category", auth, getCategorySummary);


module.exports = router;