import './TodoList.css';
import PropTypes from "prop-types";
// import NewTask from "./NewTask.jsx";

const ListTask = ({ tasks, addTask }) => {
    return (
        <div className='TaskManager'>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task.name} - {task.category}</li>
                ))}
            </ul>
            <NewTask addTask={addTask} />
        </div>
    );
};

ListTask.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
    addTask: PropTypes.func.isRequired,
};

export default ListTask;

// import React, { useEffect, useState } from 'react';
// import './Sidebar.css';
// import FirstTop from './FirstTop';
// import Categories from '../Categorias/Categorias';
// import ListTask from "../TodoList/TodoList.jsx";
// import PropTypes from "prop-types";
//
// const Sidebar = ({ tasks }) => {
//     const [filteredTasks, setFilteredTasks] = useState([]);
//     const [categoriesState, setCategoriesState] = useState('');
//
//     useEffect(() => {
//         console.log(categoriesState);
//         if (categoriesState === 'All') {
//             setFilteredTasks(tasks);
//         } else {
//             const filteredTasks = tasks.filter(task => task.category.toLowerCase() === categoriesState.toLowerCase());
//             setFilteredTasks(filteredTasks);
//         }
//     }, [categoriesState, tasks]);
//
//     const handleTasksFiltered = (category) => {
//         setCategoriesState(category);
//     };
//
//     return (
//         <div className='container'>
//             <div className='sidebar'>
//                 <FirstTop categorias={categoriesState}></FirstTop>
//                 <ul className='sidebarcategories'>
//                     <Categories setCategories={() => handleTasksFiltered('My Day')} textCategory={'My Day'}></Categories>
//                     <Categories setCategories={() => handleTasksFiltered('Important')} textCategory={'Important'}></Categories>
//                     <Categories setCategories={() => handleTasksFiltered('Personal')} textCategory={'Personal'}></Categories>
//                     <Categories setCategories={() => handleTasksFiltered('All')} textCategory={'All'}></Categories>
//                 </ul>
//             </div>
//             <ListTask tasks={filteredTasks} />
//         </div>
//     );
// };
//
// Sidebar.propTypes = {
//     tasks: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         category: PropTypes.string.isRequired,
//     })).isRequired,
// };
//
// export default Sidebar;


//import React, { useState } from "react";
//
// const NewTask = ({ addTask }) => {
//     const [newTaskName, setNewTaskName] = useState('');
//     const [newTaskCategory, setNewTaskCategory] = useState('');
//
//     const addNewTask = () => {
//         addTask({ name: newTaskName, category: newTaskCategory });
//         setNewTaskName('');
//         setNewTaskCategory('');
//     };
//
//     return (
//         <div>
//             <input type="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} />
//             <input type="text" value={newTaskCategory} onChange={(e) => setNewTaskCategory(e.target.value)} />
//             <button onClick={addNewTask}>Add Task</button>
//         </div>
//     );
// };
//
// export default NewTask;