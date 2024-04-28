import {useEffect, useState} from "react";
import './TodoList.css';
import FirstTop from "../Sidebar/FirstTop.jsx";

const ToDoList = ({listFilteredTask,listFilteredCategory}) => {
   

useEffect( () => {

    
},[listFilteredTask])
    
    const MappedTasksByCategoryOnList = () => {

        if(listFilteredCategory.length){
            
            return listFilteredCategory.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={'task' + index}>{task.nombre}</li>
                        <li className='TaskCategory' key={'cat1' + index}>{task.categoria}</li>
                        <li className='TaskCategory' key={'cat2' + index}>{task.descripcion}</li>
                    </>
                )
            }
        )
        }else {
           
            
        return listFilteredTask.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={'task' + index}>{task.nombre}</li>
                        <li className='TaskCategory' key={'cat1' + index}>{task.categoria}</li>
                        <li className='TaskCategory' key={'cat2' + index}>{task.descripcion}</li>
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