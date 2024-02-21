'use client'
import { useTodos } from '@/store/todos'
import { useSearchParams } from 'next/navigation';
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form';

function AddTodo() {

   const [todo, setTodo] = useState("")

   const {todos,handleAddTodo} = useTodos()

   const searchParams = useSearchParams()
   const todosFilter = searchParams.get('todos')
  
   const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // const handleFormSubmit=(event: FormEvent<HTMLFormElement>) => {
  //   event.preventDefault()
  //   handleAddTodo(todo)
  //   setTodo("")
  // }
  const onSubmit = (data:any) => {
    handleAddTodo(data.todo);
    setTodo("")
    };


  return (
    <div>
      {todosFilter === "completed" && (
        <h3 style={{ borderBottom: "1px solid black"}}>Show all Completed To-do</h3>
      )}
      {todosFilter != "completed" && (
      <form onSubmit={handleSubmit(onSubmit)}>
           
            <input type= "text" id="" 
              placeholder='Enter your todo here'
              value={todo}
              {...register('todo', { required: 'Todo is required.' })}
              onChange={(e:any)=> setTodo(e.target.value)}
            />
           
          {errors.todo && <p className="errorMessage">{'Todo is required.'}</p>}
           <button type='submit' className='btn1'>
              Add
            </button>
        </form>  
      )}  
    </div>
  )
}

export default AddTodo