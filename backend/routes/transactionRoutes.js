import express from 'express';
import { getTransactions, addTransaction } from '../controllers/transactionController.js';

const router = express.Router();

router.get('/getTransactions', getTransactions);
router.post('/addTransaction', addTransaction);

export default router;