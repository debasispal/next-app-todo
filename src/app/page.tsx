import Image from "next/image";
import styles from "./page.module.css";
import AddTodo from "@/components/add-todo";
import Todos from "@/components/todos";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <main className="main">
       <h2>Next App Todo</h2>
       <Navbar/>
       <AddTodo/>
       <Todos/>
    </main>  
  );
}
