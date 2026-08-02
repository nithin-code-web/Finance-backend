const transactionService = require("../services/transactionService");

// Create a new transaction
exports.createTransaction = async (req, res, next) => {
  try {
    const { amount, type, category, date, notes } = req.body;

    if (!amount || !type || !category) {
      const err = new Error("Amount, type, and category are required");
      err.statusCode = 400;
      throw err;
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
    next(err);
  }
};

// Get transactions with filters
exports.getTransactions = async (req, res, next) => {
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
    next(err);
  }
};

// Dashboard summary
exports.getSummary = async (req, res, next) => {
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
    next(err);
  }
};

// Update transaction (admin only)
exports.updateTransaction = async (req, res, next) => {
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
    next(err);
  }
};


// Delete transaction (admin only)
exports.deleteTransaction = async (req, res, next) => {
  try {
    await transactionService.deleteTransaction(req.params.id);

    res.json({
      message: "Transaction deleted"
    });

  } catch (err) {
    next(err);
  }
};

//` Category summary for dashboard  
exports.getCategorySummary = async (req, res, next) => {
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
    next(err);
  }
};
