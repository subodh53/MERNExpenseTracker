import Transaction from '../models/Transaction.js';

export const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find().sort({date: -1});
        res.json(transactions);
    } catch (error) {
        res.status(500).json({message: "Server Error"});
    }
};

export const addTransaction = async(req, res) => {
    try {
        const { amount, type, category, date, note} = req.body;
        const transaction = new Transaction({
            amount,
            type,
            category,
            date,
            note
        });
        await transaction.save();
        res.status(201).json(transaction);
    } catch (error) {
        res.status(500).json({message: "Invalid Data"});
    }
};

