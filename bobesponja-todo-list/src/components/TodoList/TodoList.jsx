import {useEffect, useState} from "react";
import './TodoList.css';
import FirstTop from "../Sidebar/FirstTop.jsx";

const ToDoList = ({listFilteredTask,listFilteredCategory,listaActual}) => {
   

useEffect( () => {
console.log(listaActual)
console.log(listFilteredTask)
},[listFilteredTask,listaActual])
// const ToDoList = ({ tasks, addTask }) => {
//     return (
//         <div className='TaskManager'>
//             <ul>
//                 {tasks.map((task, index) => (
//                     <li key={index}>{task.name} </li>
//                     <li key={index}>{task.category}</li>

//                 ))}
//             </ul>
//             <NewTask addTask={addTask} />
//         </div>
//     );
// };

// ListTask.propTypes = {
//     tasks: PropTypes.arrayOf(
//         PropTypes.shape({
//             name: PropTypes.string.isRequired,
//             category: PropTypes.string.isRequired,
//         })
//     ).isRequired,
//     addTask: PropTypes.func.isRequired,
// };

// export default ListTask;
    
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