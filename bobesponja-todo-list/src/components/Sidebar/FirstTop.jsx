import React from 'react'
import './FirstTop.css'
import { useState } from 'react'
import Logo from '../../assets/Logo.svg'


export default function FirstTop() {

    // const [tasks, setTasks] = useState([]);
    // const [search, setSearch] = useState("");
  
    // const addTask = task => {
    //   if (task) {
    //     setTasks([...tasks, task]);
    //   }
    // };
  
    // const handleSearch = event => {
    //   setSearch(event.target.value);
    // };
  
    // const filteredTasks = tasks.filter(task =>
    //   task.toLowerCase().includes(search.toLowerCase())
    // );
    // value={search} onChange={handleSearch}
    
  return (
    <div>
       <div className='firstTop'>
       <img className="logo" src={Logo}></img>
         <div className='search'>
            <span className="material-symbols-outlined lupa">search</span>
                 <input type="text" id="search"  placeholder='Search' ></input>
         </div>
         <span className='categories'>Categories</span>
        </div>
    </div>
  )
}
