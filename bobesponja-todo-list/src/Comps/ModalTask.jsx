import { useState } from "react";
import './ModalTasks.css';
import CancelIcon from '@mui/icons-material/Cancel';

const ModalTasks = ({ show, setShow, AddItems }) => {
    const [task, setTask] = useState('');
    const [newCategory, setNewCategory] = useState('');

    const Submit = (e) => {
        e.preventDefault();

        AddItems({
            id: (+new Date()).toString(),
            task,
            category: newCategory
        });

        setTask('');
        setNewCategory('');
        setShow(false);
    }

    const Cancel = () => {
        setTask('');
        setNewCategory('');
        setShow(false);
    }

    return (
        <>
            {show && (
                <section className={`Modal___Container Modal___Appear`}>
                    <div className='Close___Icon'>
                        <CancelIcon onClick={Cancel}/>
                    </div>
                    <h1 className={`Modal___Title`}>Tasks</h1>
                    <form className='Modal___Input' onSubmit={Submit}>
                        <div className='Modal___Assets'>
                            <div className='Individual___Input'>
                                <span>Set your task: </span>
                                <input type="text" id='Task' value={task} onChange={(e) => setTask(e.target.value)}
                                       placeholder="Add Task"/>
                            </div>
                            <div className='Individual___Input'>
                                <span>Set category: </span>
                                <input type="text" id='Category' value={newCategory}
                                       onChange={(e) => setNewCategory(e.target.value)} placeholder="Add Category"/>
                            </div>
                            <section className='Modal___Button'>
                                <button className='Cancel' onClick={Cancel}>Cancel</button>
                                <button type="submit" className='Submit'>Add</button>
                            </section>
                        </div>
                    </form>
                </section>
            )}
            {!show && <div className="Modal___Container Modal___Disappear"></div>}
        </>
    )
}
export default ModalTasks;
