import React, { useState } from 'react'
import Input from './input.jsx'
import SelectMenu from './SelectMenu.jsx';

export default function ExpenseForm({ seteditingRowId, editingRowId, setExpenses, expense, setExpense, }) {

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minlength: 2, message: 'Title shold be atleast 2 characters long' }
    ],
    category: [
      { required: true, message: 'Please select category' },
    ],

    amount: [
      { required: true, message: 'Please enter amont', },
      { pattern: /^(0|[1-9]\d*)$/, message: 'enter amount in numbers' }

    ],
  }


  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {

        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.minlength && value.length < 2) {
          errorsData[key] = rule.message;
          return true;
        }

        if (rule.pattern && !rule.pattern.test(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      })
    })

    setErrors(errorsData);
    return errorsData;
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(expense);
    if (Object.keys(validateResult).length) return;

    if (editingRowId) {
      setExpenses((prevState) =>
        prevState.map((singleExpense) => {
          if (singleExpense.id === editingRowId) {
            return { ...expense, id: editingRowId }
          }
          return singleExpense;
        })
      )
      setExpense({
        title: '',
        category: '',
        amount: '',
      })
      seteditingRowId('');
    }

    setExpenses((prevState) => [
      ...prevState,
      { ...expense, id: crypto.randomUUID() },
    ])
    setExpense({
      title: '',
      category: '',
      amount: '',
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
        setExpense((prevState) => ({
          ...prevState,
          [name]: value,
        }));
    
    setErrors({})

  }
  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <Input
        label='Title'
        id='title'
        name='title'
        value={expense.title}
        onChange={handleChange}
        error={errors.title}
      />

      <SelectMenu
        label='Category'
        id='category'
        name='category'
        onChange={handleChange}
        value={expense.category}
        defaultOption='Select Category'
        options={[
          'Grocery',
          'Clothes',
          'Bills',
          'Education',
          'Medicens'
        ]}
        error={errors.category}

      />

      <Input
        label='Amount'
        id='amount'
        name='amount'
        onChange={handleChange}
        value={expense.amount}
        error={errors.amount}
      />
      <button className="add-btn">{editingRowId ? 'Save' : 'Add'}</button>
    </form>
  )
}