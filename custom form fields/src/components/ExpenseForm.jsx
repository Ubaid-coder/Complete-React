import React, { useState } from 'react'
import Input from './input.jsx'
import SelectMenu from './SelectMenu.jsx';

export default function ExpenseForm({ setExpenses }) {
  const [expense, setExpense] = useState({
    title: '',
    category: '',
    amount: '',
  })

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: 'Please enter title' },
      { minlength: 5, message: 'Title shold be atleast 5 characters long' }
    ],
    category: [
      { required: true, message: 'Please select category' },
    ],

    amount: [
      { required: true, message: 'Please enter amont' },
      
    ],
  }


  const validate = (formData) => {
    const errorsData = {};

    Object.entries(formData).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
      
        if(rule.required && !value){
          errorsData[key] = rule.message;
          return true;
        }

        if(rule.minlength && value.length < 5) {
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
      <button className="add-btn">Add</button>
    </form>
  )
}