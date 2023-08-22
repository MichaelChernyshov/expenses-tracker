/* eslint-disable react/prop-types */
import { useState } from "react";

import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEdditing, setIsEdditing] = useState(false);
  
  const saveExpenseHandler = (enteredExpenseData) => {
    const expensData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expensData);
    setIsEdditing(false)
  };

  const startEditingHandler = () => {
    setIsEdditing(true);
  };

  const stopEditingHandler = () => {
    setIsEdditing(false);
  };
  return (
    <div className="new-expense">
      {!isEdditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEdditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
