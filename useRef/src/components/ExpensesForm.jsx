import { useEffect, useRef, useState } from "react";

function ExpensesForm({ setexpenses }) {

  // let num = 0;
  // const myRef = useRef();
  const titleRef = useRef(null);
  const categoryRef = useRef(null);
  const amountRef = useRef(null);



  /* The main difference in num and myRef is
   when our component is rendered 
   myRef knows its previous value.
    while! num is not.
   */
  // console.log(myRef.current);

  // useEffect(() => {
  //   // myRef.current.style.backgroundColor = 'pink';
  //   // console.log(myRef.current.value);
  // })
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setexpenses((prevState) => [
      ...prevState,
      {
        title: titleRef.current.value,
        category: categoryRef.current.value,
        amount: amountRef.current.value,
        id: crypto.randomUUID()
  
      }
    ])
  
  }

  return (
    <>
      {/* <button
        onClick={(e) => {
          // myRef.current++;
          num = num + 1;
          console.log(num)
        }
        }
        
        >click</button> */}
      {/* <h1>myRef:{myRef.current}</h1> */}
      {/* <h1>num:{num}</h1> */}
      <form className="expense-form" onSubmit={handleSubmit} >
        <div className="input-container">
          <label htmlFor="title" >Title</label>

          <input
            id="title"
            name="title"
            // value={expense.title}
            // onChange={(e) => setExpense((prevState) => ({ ...prevState, title: e.target.value }))}
            // ref={myRef}
            ref={titleRef}
          />
        </div>
        <div className="input-container">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            name="category"
            // value={expense.category}
            // onChange={(e) => setExpense((prevState) => ({ ...prevState, category: e.target.value }))}
            ref={categoryRef}
             >
            <option value="" hidden>Select Category</option>
            <option value="grocery">Grocery</option>
            <option value="clothes">Clothes</option>
            <option value="bills">Bills</option>
            <option value="education">Education</option>
            <option value="medicine">Medicine</option>
          </select>

        </div>
        <div className="input-container">
          <label htmlFor="amount">Amount$</label>
          <input id="amount"
           name="amount"
            // value={expense.amount}
            //  onChange={(e) => setExpense((prevState) => ({ ...prevState, amount: e.target.value }))}
             ref={amountRef}
              />
              
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  )
}

export default ExpensesForm
