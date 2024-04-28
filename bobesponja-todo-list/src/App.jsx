import { useEffect, useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar/Sidebar'
import ToDoList from './components/TodoList/TodoList'
import OpenTask from './components/OpenTask/OpenTask'
import NewTask from './components/NewTask/NewTask'
import Modal from './components/Modal/Modal'

function App() {
  
  const [tasks, setTasks] = useState([{}]); 
  const [FilteredTaskListState, setFilteredTaskListState] = useState(tasks)
  const [filteredTaskCategoryState, setFilteredTaskCategoryState] = useState([])



 

  return (
    <>
   <div className='container'> 
      <Sidebar setFilteredList={setFilteredTaskListState} setFilteredCategoy={setFilteredTaskCategoryState} taskList={tasks}></Sidebar>
      <ToDoList listFilteredTask={FilteredTaskListState} listFilteredCategory={filteredTaskCategoryState}></ToDoList>
      <OpenTask ><Modal><NewTask setTasks={setTasks}></NewTask></Modal></OpenTask>
      
      </div>
    </>
    
  )
}

export default App
