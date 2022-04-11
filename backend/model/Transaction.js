const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Transaction = new Schema({
    amount: {
        type: Number
    },
    type: {
        type: String
    },
    description: {
        type: String
    },
    balance: {
        type: Number
    },
    transactionDate: {
        type: Date, 
        default: Date.now
    },
    CreatedAt: {
        type: Date, 
        default: Date.now
    }
}, {
  collection: 'transaction'
})
module.exports = mongoose.model('Transaction', Transaction)