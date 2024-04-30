import { useState } from 'react';
import ModalTask from "./src/Comps/ModalTask.jsx";
import './App.css';
import ListTasks from "./src/Comps/ListTasks.jsx";

function App() {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    const toggleModal = () => setModal(!modal);

    const handleAddTask = (newTask) => {
        setTaskList([...taskList, newTask]);
    }

    return (
        <>
            <ModalTask show={modal} setShow={setModal} AddItems={handleAddTask} />
            {modal && <button className={`Init_Task Task_Disappear`} onClick={toggleModal}>TASK</button>}
            {!modal && <button className={`Init_Task Task_Appear`} onClick={toggleModal}>TASK</button>}
            <ListTasks list={taskList} setList={setTaskList} />
        </>
    );
}

export default App;
