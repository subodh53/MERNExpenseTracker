import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import transactionRoutes from './routes/transactionRoutes.js';

dotenv.config();
connectDb();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/transactions', transactionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server runninbg on port ${PORT}`));

