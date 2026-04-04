const authService = require("../services/authService");

exports.register = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if ( !email || !password || !name) {
      return res.status(400).json({ message: "All fields required" });
    }

    const result = await authService.registerUser({
      name,
      email,
      password,
      role
    });

    res.status(201).json({
      message: "User registered",
      data: result
    });

  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const result = await authService.loginUser({ email, password });

    res.json({
      message: "Login successful",
      data: result
    });

  } catch (err) {
    res.status(401).json({ message: err.message });
  }
};