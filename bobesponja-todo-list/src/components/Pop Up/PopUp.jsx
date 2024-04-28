import React, { useEffect, useState } from 'react'

const PopUp = ({lista, listaActual}) => {
const [listTask, setListTask] = useState('')
const [taskState, setTaskState] = useState("")
const [newInputState, setNewInputState]= useState('')

useEffect ( () => {
    if(taskState===""){
        return
    }else{
    setListTask([...listaActual, taskState])
}
// console.log(listTask)
},[taskState])


useEffect(()=>{
    if(listTask===''){
        return
    }else{
    lista(listTask)
}},[listTask])

const addNewTask = () => {
   setTaskState({nombre: newInputState, categoria: 'My Day'})
//    console.log([...listaActual, taskState])

//    console.log(listTask)
}



  return (
   <>
      <form>
        <div className='name'>
                <label htmlFor="Name">Nombre</label>
                <input type="text" id="name" onChange={event => setNewInputState(event.target.value)} value={newInputState} />
            <div className='categories dropdown'>
             <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                    <a href="#">My Day</a>
                    <a href="#">Important</a>
                    <a href="#">Personal</a>
                </div>
            </div>
        </div>
        <button onClick={addNewTask}>ADD NEW TASK</button>
      </form>
  </>
  )
}

export default PopUp
