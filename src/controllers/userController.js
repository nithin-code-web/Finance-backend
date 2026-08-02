const userService = require("../services/userService");

exports.getUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();

    res.json({
      message: "Users fetched",
      data: users
    });
  } catch (err) {
    next(err);
  }
};

exports.updateRole = async (req, res, next) => {
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
    next(err);
  }
};

exports.updateStatus = async (req, res, next) => {
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
    next(err);
  }
};
