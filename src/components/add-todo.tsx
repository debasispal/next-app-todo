'use client'
import { useTodos } from '@/store/todos'
import React, { FormEvent, useState } from 'react'

function AddTodo() {

   const [todo, setTodo] = useState("")

   const {handleAddTodo} = useTodos()

  const handleFormSubmit=(event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    handleAddTodo(todo)
    setTodo("")
  }

  return (
    <div>
        <form onSubmit={handleFormSubmit}>
            <input type= "text"  id="" 
              placeholder='Enter your todo here'
              value={todo}
              onChange={(e:any)=> setTodo(e.target.value)}
            />
            <button type='submit' className='btn1'>
              Add
            </button>
        </form>    
    </div>
  )
}

export default AddTodo