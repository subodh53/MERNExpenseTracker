import React from 'react'

const Summary = ({transactions}) => {
    const income = transactions
        .filter(tx => tx.type === "income")
        .reduce((acc, tx) => acc + tx.amount, 0);

    const expense = transactions
        .filter(tx => tx.type === "expense")
        .reduce((acc, tx) => acc + tx.amount, 0);

    const balance = income - expense;
  return (
    <div className='grid grid-cols-3 gap-4 mt-6'>
      <div className='bg-green-100 p-4 rounded shadow text-center'>
        <h3 className='font-semibold text-green-700'>Income</h3>
        <p className='text-xl font-bold'>Rs.{income}</p>
      </div>
      <div className='bg-red-100 p-4 rounded shadow text-center'>
        <h3 className='font-semibold text-red-700'>Expense</h3>
        <p className='text-xl font-bold'>Rs.{expense}</p>
      </div>
      <div className='bg-blue-100 p-4 rounded shadow text-center'>
        <h3 className='font-semibold text-blue-700'>Balance</h3>
        <p className='text-xl font-bold'>Rs.{balance}</p>
      </div>
    </div>
  );
}

export default Summary;
