const express = require('express');
const app = express();
const transactionRoute = express.Router();
let TransactionModel = require('../model/Transaction');
// Add Transaction
transactionRoute.route('/create').post((req, res, next) => {
  TransactionModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
});
// Get all Transaction
transactionRoute.route('/').get((req, res) => {
  TransactionModel.find({}, {}, { sort: { 'CreatedAt' : -1 } }, (error, data,) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})


transactionRoute.route('/get-transaction').get((req, res) => {
  TransactionModel.findOne({}, {}, { sort: { 'CreatedAt' : -1 } }, function(error, data) {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  });
})


module.exports = transactionRoute;