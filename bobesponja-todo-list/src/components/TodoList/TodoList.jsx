import {useState} from "react";
import './TodoList.css';
import FirstTop from "../Sidebar/FirstTop.jsx";

const ToDoList = ({setFilteredTaskListState, setFilteredTaskCategoryState}) => {
    const [tasks, setTasks] = useState([{name: '', category: ''}])

    const MappedTasksByCategoryOnList = () => {
        return tasks.map((task, index) => {
                return (
                    <>
                        <li className='TaskList' key={'task' + index}>{task.name}</li>
                        <li className='TaskCategory' key={'cat' + index}>{task.category}</li>
                    </>
                )
            }
        )
    }


    // setFilteredTaskCategoryState:


    export function filteredTasksByCategoryOnList() {
        return tasks.category === '' ? setFilteredTaskCategoryState(tasks) : setFilteredTaskCategoryState(tasks.filter((task) => {
                return task.category.toLowerCase().includes(task.category.toLowerCase());
            }));
    }


    // setFilteredTaskListState:

    export function filteredTaskListState() {
        return tasks.name === '' ? setFilteredTaskListState(tasks) : setFilteredTaskListState(tasks.filter((task) => {
            return task.name.toLowerCase().includes(task.category.toLowerCase());
        }));
    }


    // const getNewTask = (newTask) => {
    //     setTasks([...tasks, newTask])
    // }

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


export default <ToDoList filteredTaskListState={filteredTaskListState} setFilteredTaskCategoryState={filteredTasksByCategoryOnList}/>;