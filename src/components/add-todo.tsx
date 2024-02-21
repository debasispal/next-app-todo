'use client'
import { useTodos } from '@/store/todos'
import React, { FormEvent, useState } from 'react'
import { useForm } from 'react-hook-form';

function AddTodo() {

   const [todo, setTodo] = useState("")

   const {handleAddTodo} = useTodos()

  
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
      <form onSubmit={handleSubmit(onSubmit)}>
            <input type= "text" id="" 
              placeholder='Enter your todo here'
              value={todo}
              {...register('todo', { required: 'Todo is required.' })}
              onChange={(e:any)=> setTodo(e.target.value)}
            />
           {errors.todo && (
            <p className='errorMessage'>{errors.todo.message}</p>
           )}            
           <button type='submit' className='btn1'>
              Add
            </button>
        </form>    
    </div>
  )
}

export default AddTodo