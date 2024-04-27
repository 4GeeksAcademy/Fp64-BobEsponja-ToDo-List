import React, { useEffect } from 'react'
import './FirstTop.css'
import { useState } from 'react'
import Logo from '../../assets/Logo.svg'


export default function FirstTop({ categorias }) {
  const [inputState, setInputState] = useState('')
  const [taskListState, setTaskListState] = useState([]);
  const [filteredTaskListState, setFilteredTaskListState] = useState([]);
  const [filteredTaskCategoryState, setFilteredTaskCategoryState] = useState([]);


  useEffect(() => {
        setTaskListState([]);
      },[]);

  useEffect(()=>{
    inputState === '' ? setFilteredTaskListState(taskListState) : setFilteredTaskListState(taskListState.filter((task) => { return task.nombre.toLowerCase().includes(inputState.toLowerCase())}));
  },[taskListState, inputState ])

  useEffect( () => {
    categorias === '' ? setFilteredTaskCategoryState(taskListState) : 
    setFilteredTaskCategoryState(taskListState.filter((task) => { return task.categoria.toLowerCase().includes(categorias.toLowerCase())}))
  },[taskListState, categorias ])

  return (
    <div>
       <div className='firstTop'>
       <img className="logo" src={Logo}></img>
         <div className='search'>
            <span className="material-symbols-outlined lupa">search</span>
                 <input type="text" id="search"  placeholder='Search' onChange={event => setInputState(event.target.value)} value={inputState} ></input>
         </div>
         <span className='categories'>Categories</span>
        </div>
    </div>
  )
}
