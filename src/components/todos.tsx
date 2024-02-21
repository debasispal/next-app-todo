'use client'
import { useTodos } from '@/store/todos'
import { useSearchParams } from 'next/navigation'
import React from 'react'

function Todos() {
 
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos()
    const searchParams = useSearchParams()
    const todosFilter = searchParams.get('todos')

    let filterTodos = todos;

    if(todosFilter === "active") {
        filterTodos = filterTodos.filter((todo) => !todo.completed)
    } else if(todosFilter === "completed"){
        filterTodos = filterTodos.filter((todo) => todo.completed)
    }

  return (
    <div>
      <ul>
         {filterTodos.map((todo:any)=> {
            return (
                <li key={todo.id} className='li' >
                  <input type='checkbox' name='' id={`todo-${todo.id}`} checked= {todo.completed} 
                    onChange={()=> toggleTodoAsCompleted(todo.id)}  
                  /> 
                 
                  <label htmlFor={`todo-${todo.id}`}className='task' >{todo.task}</label>
                  
                  {
                    todo.completed && (
                        <button type='submit' onClick={()=>handleTodoDelete(todo.id)} className='btn1'>
                            Delete
                        </button>
                    )
                  }

                </li>
            )
         })}
      </ul>
    </div>
  )
}

export default Todos