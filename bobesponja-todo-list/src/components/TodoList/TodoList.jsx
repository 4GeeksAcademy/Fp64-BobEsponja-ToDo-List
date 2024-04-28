import {useEffect, useState} from "react";
import './TodoList.css';
import FirstTop from "../Sidebar/FirstTop.jsx";

const ToDoList = ({listFilteredTask,listFilteredCategory,listaActual}) => {
   

useEffect( () => {

},[listFilteredTask,listaActual])
    
    const MappedTasksByCategoryOnList = () => {

        if(listFilteredCategory.length){
            
            return listFilteredCategory.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={index}>{task.nombre} - {task.categoria}</li>
                        
                        
                    </>
                )
            }
        )
        }else {
           
            
        return listaActual.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={index}>{task.nombre} - {task.categoria}</li>
                    </>
                )
            }
        )}
    }

    return (
        <>
            <div className='TaskManager'>
                <ul className='TaskLists'>
                    {MappedTasksByCategoryOnList()}
                </ul>
            </div>
        </>
    )

}


export default ToDoList