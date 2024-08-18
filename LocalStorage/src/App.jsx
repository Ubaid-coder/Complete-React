import { useState } from 'react'
import './App.css'
import ExpenseForm from './components/ExpenseForm'
import ExpenseTable from './components/ExpenseTable'
import expenseData from './expenseData'
import { useLocalStorage } from './hooks/useLocalStorage'

function App() {
  const [expenses, setExpenses] = useLocalStorage( 'expenses', expenseData);
  const [expense, setExpense] = useLocalStorage('expnese',{
    title: '',
    category: '',
    amount: ''
  })
  const [editingRowId, seteditingRowId] = useLocalStorage( 'editingID','')

  return (
    <main>
      <h1>Track Your Expense</h1>
    
      <div className="expense-tracker">
        <ExpenseForm
          setExpenses={setExpenses}
          expense={expense}
          setExpense={setExpense} 
          editingRowId={editingRowId}
          seteditingRowId={seteditingRowId}
          />

        <ExpenseTable expenses={expenses} setExpenses={setExpenses} setExpense={setExpense} seteditingRowId={seteditingRowId} />
      </div>
    </main>
  )
}

export default App