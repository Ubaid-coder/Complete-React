import { useState } from 'react'
import {todos} from './todos.js'

function About() {
  const [todoList, settodoList ] = useState([])
  return (
    <div>
      <h1>Welcome to about page</h1>
      <button className='bg-green-300 p-2 rounded-xl font-bold text-purple-900 hover:bg-green-600' onClick={() => {
        return import('./todos.js').then((module) => settodoList(module.todos))
      }}>Load Data</button>
    {todoList.map((todo) => {
      return(
        <div key={todo.id}>
          <ol className='pl-5 '>
            <li><h2>{todo.todo}</h2></li>
          </ol>
        </div>
      )
    })}
    </div>
  )
}

export default About
