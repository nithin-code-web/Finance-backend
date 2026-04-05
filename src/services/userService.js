const User = require("../models/User");

exports.getAllUsers = async () => {
  return await User.find().select("-password");
};

exports.updateUserRole = async (id, role) => {
  const user = await User.findByIdAndUpdate(
    id,
    { role },
    { new: true }
  );

  if (!user) throw new Error("User not found");

  return user;
};

exports.updateUserStatus = async (id, status) => {
  const user = await User.findByIdAndUpdate(
    id,
    { status },
    { new: true }
  );

  if (!user) throw new Error("User not found");

  return user;
};