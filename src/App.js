import React, {useState} from 'react';

import NewExpense from "./components/NewExpense/NewExpense";

import Expenses from "./components/Expenses/Expenses";

// import ExpenseDate from "./components/ExpenseDate";

const DUMMY_EXPENSES = [
  { 
    id:'e1',
    title: 'Toilet paper',
     amount: 128.76,
     date: new Date(2020, 5, 12)
    },
  { 
    id:'e2',
    title: 'New TV',
   amount: 8284.76, 
   date: new Date(2019, 6, 6)
  },
  { 
    id:'e3',
    title: 'Car Insurance',
     amount: 284.76,
      date: new Date(2022, 8, 12)
  },
  { 
    id:'e4',
    title: 'New Desk (wooden)',
     amount: 784.76,
      date: new Date(2021, 2, 1)
    },
];

const  App = () => {
 const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return(
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses  items={expenses}/>
    </div>
  );
}

export default App;