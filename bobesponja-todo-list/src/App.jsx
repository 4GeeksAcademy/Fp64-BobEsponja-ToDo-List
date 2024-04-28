import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ToDoList from './components/TodoList/TodoList'

function App() {
  
  const [tasks, setTasks] = useState([{}]); 
  const [FilteredTaskListState, setFilteredTaskListState] = useState(tasks)
  const [filteredTaskCategoryState, setFilteredTaskCategoryState] = useState([])



 

  return (
    <>
   <div className='container'> 
      <Sidebar setFilteredList={setFilteredTaskListState} setFilteredCategoy={setFilteredTaskCategoryState} taskList={tasks}></Sidebar>
      <ToDoList listFilteredTask={FilteredTaskListState} listFilteredCategory={filteredTaskCategoryState}></ToDoList>
      
      </div>
    </>
  )
}

export default App
