import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import './FirstTop'
import FirstTop from './FirstTop';
import Categorias from '../Categorias/Categorias';



const Sidebar = ({setFilteredList,setFilteredCategoy,taskList}) => {
  const [categoriesState, setCategoriesState] = useState('')
  const [inputState, setInputState] = useState('')
 
  useEffect(()=>{
    
  },[categoriesState, inputState])

  return (
    
      <div className='container'>
    <div className='sidebar'>
    <FirstTop categorias={categoriesState} setFilteredTaskListState={setFilteredList} setFilteredTaskCategoryState={setFilteredCategoy} listTask={taskList} stateInput = {inputState} stateInputSet ={setInputState}></FirstTop>
    <ul className='sidebarcategories'>
      <Categorias setCategorias={setCategoriesState}  textoCategoria={'My Day'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'Important'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'Personal'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'All'}></Categorias>
        </ul>
    </div>
</div>
    
  )
}

export default Sidebar



