const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");

// Only admin can access
router.get("/", auth, roleCheck("admin"), (req, res) => {
  res.json({
    message: "Admin access granted",
    user: req.user
  });
});

module.exports = router;