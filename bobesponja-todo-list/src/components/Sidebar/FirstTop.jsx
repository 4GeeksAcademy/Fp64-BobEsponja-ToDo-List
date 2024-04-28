import React, { useEffect } from 'react'
import './FirstTop.css'
import { useState } from 'react'
import Logo from '../../assets/Logo.svg'




const FirstTop = ({ categorias, setFilteredTaskListState,setFilteredTaskCategoryState,listTask, stateInput, stateInputSet}) => {

 
  const [taskListState, setTaskListState] = useState([]);
 

  useEffect(() => {
        setTaskListState(listTask);
        console.log(listTask)
      },[listTask]);

  useEffect(()=>{
    stateInput === '' ? setFilteredTaskListState(taskListState) : setFilteredTaskListState(taskListState.filter((task) => { return task.nombre.toLowerCase().includes(stateInput.toLowerCase())}));
  },[taskListState, stateInput ])

  useEffect( () => {
    categorias === '' ? setFilteredTaskCategoryState([]) : 
    setFilteredTaskCategoryState(taskListState.filter((task) => { return task.categoria.toLowerCase().includes(categorias.toLowerCase())}))
  },[taskListState, categorias ])


  return (
      <>
       <div className='firstTop'>
       <img className="logo" src={Logo}></img>
         <div className='search'>
            <span className="material-symbols-outlined lupa">search</span>
                 <input type="text" id="search"  placeholder='Search' onChange={event => stateInputSet(event.target.value)} value={stateInput} ></input>
         </div>
         <span className='categories'>Categories</span>
        </div>
        </>
  )
}

export default FirstTop



