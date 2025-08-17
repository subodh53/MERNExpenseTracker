import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        enum: ['income', 'expense'],
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    note: {
        type: String,
    },
}, {timestamps: true});

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;