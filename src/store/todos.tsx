'use client'
import { createContext, useContext, useState } from "react";

export type Todo = {
   id: string;
   task: string;
   completed: boolean;
   createdAt: Date
}

export type TodosContext = {
    todos: Todo[];
    handleAddTodo: (task: string)=> void;
    toggleTodoAsCompleted: (id:string) => void;
    handleTodoDelete: (id:string) => void;
}

export const todosContext = createContext<TodosContext | null>(null)

export const TodosProvider = ({children}:any) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const handleAddTodo = (task:any) => {
      setTodos((prev:any) => {
         const newTodos: Todo[] = [{
            id: Math.random().toString(),
            task,
            completed: false,
            createdAt: new Date()
         }, 
         ...prev
      ]
       return newTodos
    })
    }

    const toggleTodoAsCompleted =(id: string) => {
         setTodos((prev)=> {
            const newTodos = prev.map((task:any)=> {
                if(task.id === id) {
                    return {...task, completed: !task.completed}
                }
                return task
            })
            return newTodos
         })
    }

    const handleTodoDelete =(id: string) => {
        setTodos((prev)=> {
            const newTodos = prev.filter((task:any)=> task.id !== id)
            return newTodos
        })
        alert("Task is deleted successfully")
    }

    return (
        <todosContext.Provider value={{todos, handleAddTodo, toggleTodoAsCompleted, handleTodoDelete}}>
            {children}
        </todosContext.Provider>
    )

}

export function useTodos() {
    const todosContextValue = useContext(todosContext)
    if(!todosContextValue) {
        throw new Error("Use todos used outside")
    }
    return todosContextValue
}