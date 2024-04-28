import React from 'react'
import { useState } from 'react'

    const NewTask = ({ addTask }) => {
    const [newTaskName, setNewTaskName] = useState('');
    const [newTaskCategory, setNewTaskCategory] = useState('');
    

    const addNewTask = () => {
        addTask({ name: newTaskName, category: newTaskCategory });
        setNewTaskName('');
        setNewTaskCategory('');
    };

    return (
        <div>
            <form action="/action_page.php">
                        <label className="task" for="fname">Task Name</label>
                        <input type="text" value={newTaskName} onChange={(e) => setNewTaskName(e.target.value)} placeholder="Your name.." />

                        <label className="category" for="category">Category</label>
                        <select value={newTaskCategory} onChange={(e) => setNewTaskCategory(e.target.value)} id="category" name="category">
                            <option value="category1">My day</option>
                            <option value="category2">Important</option>
                            <option value="category3">Personal</option>
                            <option value="category3">All</option>
                        </select>

                        <button onClick={addNewTask} type='submit' className='createTask-btn'>Add Task</button>

                    </form>
        </div>
    );
};

export default NewTask