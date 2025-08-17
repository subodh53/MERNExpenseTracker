import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTransactions from './components/AddTransactions';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransactions = (tx) => {
    setTransactions([tx, ...transactions]);
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Expense Tracker</h1>
      <AddTransactions onAdd={addTransactions}/>
      <Summary transactions={transactions}/>
      <TransactionList transactions={transactions}/>
    </div>
  );
}

export default App;
