import React from 'react'


const Categorias = ({textoCategoria, setCategorias}) => {
    const setClass = () =>{

        return textoCategoria === 'My Day' ? 'mydaycateg' :
           textoCategoria === 'Personal' ? 'personalcateg' :
           textoCategoria === 'All' ? 'allcateg' :
           textoCategoria === 'Important' ? 'importantcateg' :
           undefined; 
    
    }
    const setClassIcono =()=>{
        return textoCategoria === 'My Day' ? 'bolt' :
        textoCategoria === 'Personal' ? 'person' :
        textoCategoria === 'All' ? 'dashboard' :
        textoCategoria === 'Important' ? 'stars' :
        undefined; 
    
    }
    
    const setDiv =()=>{
        return textoCategoria === 'My Day' ? 'mydaydiv' :
           textoCategoria === 'Personal' ? 'personaldiv' :
           textoCategoria === 'All' ? 'alldiv' :
           textoCategoria === 'Important' ? 'importantdiv' :
           undefined; 
    
    }
    
    const setNewCategoryState =()=>{
        setCategorias(textoCategoria)
    
    }
      return (
       
          <div className={setDiv()}> 
            <span className="material-symbols-outlined">{setClassIcono()}</span>
            <a href="#" className={setClass()} onClick={setNewCategoryState}>{textoCategoria}</a>
            </div>
        
      )
  
};

export default Categorias


