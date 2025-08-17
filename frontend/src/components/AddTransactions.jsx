import React from 'react'
import { useState } from 'react'

const AddTransactions = ({ onAdd }) => {
    const [form, setForm] = useState({
        type: "expense",
        category: "",
        amount: "",
        date: "",
        note: ""
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!form.category || !form.amount) return;

        const newTransaction = {
            ...form,
            id: Date.now(),
            amount: Number(form.amount)
        };

        onAdd(newTransaction);

        setForm({
            type: "expense",
            category: "",
            amount: "",
            date: "",
            note: ""
        });
    };

  return (
    <form
        onSubmit={handleSubmit}
        className='bg-white p-4 shadow rounded-lg mb-4 grid gap-2'
    >
        <select
            name='type'
            value={form.type}
            onChange={handleChange}
            className='border p-2 rounded'
        >
            <option value="expense">Expense</option>
            <option value="income">Income</option>
        </select>
        <input
            type='text'
            name='category'
            value={form.category}
            onChange={handleChange}
            placeholder='Category'
            className='border p-2 rounded'
        />
        <input
            type='number'
            name='amount'
            value={form.amount}
            onChange={handleChange}
            placeholder='Amount'
            className='border p-2 rounded'
        />
        <input
            type='date'
            name='date'
            value={form.date}
            onChange={handleChange}
            className='border p-2 rounded'
        />
        <input
            type='text'
            name='note'
            value={form.note}
            onChange={handleChange}
            placeholder='Note'
            className='border p-2 rounded'
        />
        <button
            type='submit'
            className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded'
        >
            Add Transaction
        </button>
    </form>
  );
}

export default AddTransactions;

