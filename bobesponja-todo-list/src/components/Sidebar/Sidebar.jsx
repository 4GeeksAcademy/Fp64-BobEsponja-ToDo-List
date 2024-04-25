import React, { useState } from 'react';
import './Sidebar.css';
import './FirstTop'
import FirstTop from './FirstTop';




export default function Sidebar() {
    const [myday, setMyDay] = useState("")
    const [important, setImportant] = useState("");
    const [personal, setPersonal] = useState("");
    const [all, setAll] = useState("")



  return (
    
<div className='container'>
    <div className='sidebar'>
    <ul className='sidebarcategories'>
       <FirstTop></FirstTop>
      <div className='mydaydiv'> 
        <span className="material-symbols-outlined">bolt</span><a href="#" className='mydaycateg'>My Day</a>
        <div className='status myday'></div>
        </div>
      <div className='importantdiv'>
      <span className="material-symbols-outlined">stars</span><a href="#" className='importantcateg'>Important</a>
            <div className='status important'></div>
      </div>
            <div className='personaldiv'>
                <span className="material-symbols-outlined">person</span><a href="#" className='personalcateg'>Personal</a>
                <div className='status personal'></div>
            </div>
        <div className='alldiv'>
            <span className="material-symbols-outlined">dashboard</span><a href="#" className='allcateg'>All</a>
            <div className='status all'></div>
        </div>
        </ul>
    </div>
</div>
   
  )
}
