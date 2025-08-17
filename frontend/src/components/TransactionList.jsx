import React from 'react'
import { useState, useEffect } from 'react';

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const res = await fetch('http://localhost:5000/api/v1/transactions/getTransactions');
                const data = await res.json();
                setTransactions(data);
            } catch (error) {
                console.error("Error fetching transactions: ", error);
            }
        };
        fetchTransactions();
    }, []);
  return (
    <ul className='space-y-3 mt-4'>
        {transactions.map((tx) => (
            <li
                key={tx._id}
                className={`flex justify-between items-center p-3 rounded shadow ${tx.type === 'income' ? "bg-green-100" : "bg-red-100"}`}
            >
                <div>
                    <p className='font-medium'>{tx.category}</p>
                    <p className='text-sm text-gray-600'>{new Date(tx.date).toLocaleDateString()}</p>
                    {tx.note && <p className='text-sm italic'>{tx.note}</p>}
                </div>
                <p>
                    {tx.type === "income" ? "+" : "-"}Rs.{tx.amount}
                </p>
            </li>
        ))}
    </ul>
  );
}

export default TransactionList;
