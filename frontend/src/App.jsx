import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AddTransactions from './components/AddTransactions';
import TransactionList from './components/TransactionList';
import Summary from './components/Summary';

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/v1/transactions/getTransactions');
        const data = await res.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions: ". error);
      }
    };
    fetchTransactions();
  }, []);

  const addTransactions = (tx) => {
    console.log(tx);
    setTransactions([tx, ...transactions]);
  };

  return (
    <div className='max-w-2xl mx-auto p-6'>
      <h1 className='text-3xl font-bold text-center mb-6'>Expense Tracker</h1>
      <AddTransactions onAdd={addTransactions}/>
      <Summary transactions={transactions}/>
      <TransactionList/>
    </div>
  );
}

export default App;
