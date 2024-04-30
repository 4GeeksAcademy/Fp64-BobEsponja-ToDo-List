import {useState} from "react";
import ModalTask from "./ModalTask.jsx";
import ListTasks from "./ListTasks.jsx";

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = (addItem) => {
        setList([...list, addItem]);
    }

    return (
        <>
            <ModalTask AddItems={handleAddItem}/>
            <ListTasks list={list} setList={setList}/>
        </>
    )
}

export default Container;