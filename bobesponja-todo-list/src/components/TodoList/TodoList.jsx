import { useEffect, useState } from "react";
import './TodoList.css';
import FirstTop from "../Sidebar/FirstTop.jsx";

const ToDoList = ({ listFilteredTask, listFilteredCategory }) => {


    useEffect(() => {


    }, [listFilteredTask])

    const MappedTasksByCategoryOnList = () => {

        if (listFilteredCategory.length) {

            return listFilteredCategory.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={'task' + index}>{task.nombre} {task.categoria} </li>
                    </>
                )
            }
            )
        } else {


            return listFilteredTask.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={'task' + index}>{task.nombre} {task.categoria} </li>
                    </>
                )
            }
            )
        }
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