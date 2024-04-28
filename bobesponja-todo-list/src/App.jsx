import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ToDoList from './components/TodoList/TodoList'
import PopUp from './components/Pop Up/PopUp';

function App() {
  
  const [tasks, setTasks] = useState([{nombre: 'comprar leche', categoria: 'Personal',descripcion:'ir a comprar leche'},{nombre: 'sacar a Odin', categoria: 'Important',descripcion:'sacar al perrito bello'},{nombre: 'pedir shawarma', categoria: 'My Day',descripcion:'hacerlo temprano'},]);
  const [FilteredTaskListState, setFilteredTaskListState] = useState(tasks)
  const [filteredTaskCategoryState, setFilteredTaskCategoryState] = useState([])

  useEffect( () => {
    setFilteredTaskListState(tasks)
  },[tasks])


 

  return (
    <>
   <div className='container'> 
      <Sidebar setFilteredList={setFilteredTaskListState} setFilteredCategoy={setFilteredTaskCategoryState} taskList={tasks}></Sidebar>
      <ToDoList listFilteredTask={FilteredTaskListState} listFilteredCategory={filteredTaskCategoryState} listaActual={tasks}></ToDoList>
      <PopUp lista={setTasks} listaActual={tasks}></PopUp>
      </div>
    </>
  )
}

export default App
