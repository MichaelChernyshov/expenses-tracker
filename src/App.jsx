import { useState } from 'react'

import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

const DUMMY_EXPENSES = []

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  )
}

export default App
