import { useState } from 'react'
import './App.css'
import ExpensesForm from './components/ExpensesForm.jsx'
import ExpenseTable from './components/ExpensesTable.jsx'
import expensesData from './expensesData.js'

function App() {

    const [expenses, setexpenses] = useState(expensesData);
    
    return (
        <>
            <main>
                <h1>Track Your Expense</h1>
                <div className="expense-tracker">
                    <ExpensesForm setexpenses={setexpenses} />
                    <ExpenseTable expenses={expenses} />
                </div>
            </main>
        </>
    )
}

export default App
