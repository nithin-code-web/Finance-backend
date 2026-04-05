const transactionService = require("../services/transactionService");

// Create a new transaction
exports.createTransaction = async (req, res) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    if (!amount || !type || !category) {
      return res.status(400).json({
        message: "Amount, type, and category are required"
      });
    }

    const transaction = await transactionService.createTransaction({
      userId: req.user.id, // from JWT
      amount,
      type,
      category,
      date,
      notes
    });

    res.status(201).json({
      message: "Transaction created",
      data: transaction
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// Get transactions with filters
exports.getTransactions = async (req, res) => {
  try {
    const filters = {
      type: req.query.type,
      category: req.query.category,
      startDate: req.query.startDate,
      endDate: req.query.endDate
    };

    const transactions = await transactionService.getTransactions(
      req.user.id,
      req.user.role,
      filters
    );

    res.json({
      message: "Transactions fetched",
      data: transactions
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// Dashboard summary
exports.getSummary = async (req, res) => {
  try {
    const summary = await transactionService.getSummary(
      req.user.id,
      req.user.role
    );

    res.json({
      message: "Dashboard summary",
      data: summary
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};

// Update transaction (admin only)
exports.updateTransaction = async (req, res) => {
  try {
    const transaction = await transactionService.updateTransaction(
      req.params.id,
      req.body
    );

    res.json({
      message: "Transaction updated",
      data: transaction
    });

  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }
};


// Delete transaction (admin only)
exports.deleteTransaction = async (req, res) => {
  try {
    await transactionService.deleteTransaction(req.params.id);

    res.json({
      message: "Transaction deleted"
    });

  } catch (err) {
    res.status(404).json({
      message: err.message
    });
  }
};

//` Category summary for dashboard  
exports.getCategorySummary = async (req, res) => {
  try {
    const data = await transactionService.getCategorySummary(
      req.user.id,
      req.user.role
    );

    res.json({
      message: "Category summary",
      data
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    });
  }
};