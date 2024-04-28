import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import './FirstTop'
import FirstTop from './FirstTop';
import Categorias from '../Categorias/Categorias';



const Sidebar = () => {
  const [categoriesState, setCategoriesState] = useState('')
 
  useEffect(()=>{
    
  },[categoriesState])

  return (
    
      <div className='container'>
    <div className='sidebar'>
    <FirstTop categorias={categoriesState}></FirstTop>
    <ul className='sidebarcategories'>
      <Categorias setCategorias={filteredTaskListState}  textoCategoria={'My Day'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'Important'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'Personal'}></Categorias>
      <Categorias setCategorias={setCategoriesState} textoCategoria={'All'}></Categorias>
        </ul>
    </div>
</div>
    
  )
}

export default Sidebar



