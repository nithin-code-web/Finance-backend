const Transaction = require("../models/Transaction");
const mongoose = require("mongoose");


exports.createTransaction = async (data) => {
  const transaction = await Transaction.create(data);
  return transaction;
};

exports.getTransactions = async (userId, role, filters) => {
  let query = {};

  // 🔥 Role-based data access
  if (role !== "admin") {
    query.userId = userId; // only own data
  }

  // Filters
  if (filters.type) {
    query.type = filters.type;
  }

  if (filters.category) {
    query.category = filters.category;
  }

  if (filters.startDate && filters.endDate) {
    query.date = {
      $gte: new Date(filters.startDate),
      $lte: new Date(filters.endDate)
    };
  }

  const transactions = await Transaction.find(query).sort({ date: -1 });

  return transactions;
};

// Summary for dashboard
exports.getSummary = async (userId, role) => {
  let matchStage = {};

  // Admin sees all data
  if (role !== "admin") {
    matchStage.userId = new mongoose.Types.ObjectId(userId);
  }

  const result = await Transaction.aggregate([
    { $match: matchStage },

    {
      $group: {
        _id: "$type",
        total: { $sum: "$amount" }
      }
    }
  ]);

  let income = 0;
  let expense = 0;

  result.forEach(item => {
    if (item._id === "income") income = item.total;
    if (item._id === "expense") expense = item.total;
  });

  return {
    totalIncome: income,
    totalExpense: expense,
    netBalance: income - expense
  };
};

// admin can update any transaction
exports.updateTransaction = async (id, updates) => {
  const transaction = await Transaction.findByIdAndUpdate(
    id,
    updates,
    { new: true } // return updated document
  );

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return transaction;
};

// Admin can delete any transaction
exports.deleteTransaction = async (id) => {
  const transaction = await Transaction.findByIdAndDelete(id);

  if (!transaction) {
    throw new Error("Transaction not found");
  }

  return transaction;
};


// Category summary for dashboard
exports.getCategorySummary = async (userId, role) => {
  let matchStage = {};

  if (role !== "admin") {
    matchStage.userId = new mongoose.Types.ObjectId(userId);
  }

  const result = await Transaction.aggregate([
    { $match: matchStage },
    {
      $group: {
        _id: "$category",
        total: { $sum: "$amount" }
      }
    }
  ]);

  return result;
};