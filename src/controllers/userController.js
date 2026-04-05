const userService = require("../services/userService");

exports.getUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();

    res.json({
      message: "Users fetched",
      data: users
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateRole = async (req, res) => {
  try {
    const { role } = req.body;

    const user = await userService.updateUserRole(
      req.params.id,
      role
    );

    res.json({
      message: "Role updated",
      data: user
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    const user = await userService.updateUserStatus(
      req.params.id,
      status
    );

    res.json({
      message: "Status updated",
      data: user
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};