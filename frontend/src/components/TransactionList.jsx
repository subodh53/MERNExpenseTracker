import React from 'react'

const TransactionList = ({ transactions }) => {
    if(transactions.length === 0) {
        return <p className='text-gray-500 text-center'>No transactions yet</p>
    }
  return (
    <ul className='space-y-3 mt-4'>
        {transactions.map((tx) => (
            <li
                key={tx.id}
                className={`flex justify-between items-center p-3 rounded shadow ${tx.type === 'income' ? "bg-green-100" : "bg-red-100"}`}
            >
                <div>
                    <p className='font-medium'>{tx.category}</p>
                    <p className='text-sm text-gray-600'>{tx.date}</p>
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
