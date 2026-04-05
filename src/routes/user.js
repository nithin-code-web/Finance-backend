const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const roleCheck = require("../middleware/roleCheck");


const {
  getUsers,
  updateRole,
  updateStatus
} = require("../controllers/userController");

// Only admin can manage users
router.get("/", auth, roleCheck("admin"), getUsers);

router.patch("/:id/role", auth, roleCheck("admin"), updateRole);

router.patch("/:id/status", auth, roleCheck("admin"), updateStatus);



module.exports = router;