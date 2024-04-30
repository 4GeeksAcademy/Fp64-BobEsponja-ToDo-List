import { useState } from "react";
import './ModalTasks.css';
import { IoIosCloseCircle } from "react-icons/io";

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
                <section className={`Modal_Container Modal_Appear`}>
                    <div className='Close_Icon'>
                        <IoIosCloseCircle onClick={Cancel}/>
                    </div>
                    <h1 className='Modal_Title'>Tasks</h1>
                    <form className='Modal_Input' onSubmit={Submit}>
                        <div className='Modal__Assets'>
                            <div className='Individual_Input'>
                                <span>Set your task: </span>
                                <input type="text" id='Task' value={task} onChange={(e) => setTask(e.target.value)}
                                       placeholder="Add Task"/>
                            </div>
                            <div className='Individual_Input'>
                                <span>Set category: </span>
                                <input type="text" id='Category' value={newCategory}
                                       onChange={(e) => setNewCategory(e.target.value)} placeholder="Add Category"/>
                            </div>
                            <section className='Modal_Button'>
                                <button className='Cancel' onClick={Cancel}>Cancel</button>
                                <button type="submit" className='Submit'>Add</button>
                            </section>
                        </div>

                    </form>

                </section>
            )}
            {!show && <div className="Modal_Container Modal_Disappear"></div>}
        </>
    )
}
export default ModalTasks;
