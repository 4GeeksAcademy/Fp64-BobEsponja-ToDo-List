import {useEffect, useState} from "react";
import './ToDoList.css';
import ModalButton from "./ModalButton.jsx";
import Modal from "./Modal.jsx";
import TaskList from "./TaskList.jsx";
import ListItem from '@mui/material/ListItem';
import {Checkbox, Divider, IconButton, ListItemSecondaryAction, ListItemText} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoList = () => {

    const [list, setList] = useState([]);
    const [task, setTask] = useState('');
    const [category, setCategory] = useState(['Studies', 'Home tasks', 'Important', 'Day tasks']);
    const [modal, setModal] = useState(false);
    const [renderedList, setRenderedList] = useState([]);
    const [availableCategories, setAvailableCategories] = useState(['Studies', 'Home tasks', 'Important', 'Day tasks']);


    const dropDownChange = (e) => {
        setCategory(e.target.value)
    }

    const openModal = () => {
        setModal(!modal);
    }

    const Cancel = () => {
        setTask('');
        setCategory(category);
        openModal();
    }

    const RemoveTask = () => {
        const updatedList = list.filter(item => !item.selected);
        setList(updatedList);
    }

    const Submit = (e) => {
        e.preventDefault();

        const newTask = {
            done: {
                task: task,
                category: category,
            },
            selected: false
        }

        setList([...list, newTask]);
        setTask('');
        setCategory(category);
        openModal();
    }


    const selectedItem = (index) => {
        setList(prevList => {
            const updatedList = [...prevList];
            updatedList[index].selected = !updatedList[index].selected;
            return updatedList;
        });
        setCategory(category)
    }
    useEffect(() => {
        const newList = list.map((item, index) => (

                <div className='List_Container'>
                    <ListItem key={index}>
                        <Checkbox
                            checked={item.selected}
                            onChange={() => selectedItem(index)}
                        />
                        <ListItemText primary={item.done.task} secondary={item.done.category}/>
                        {item.selected && (
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete" onClick={RemoveTask}>
                                    <DeleteIcon color='#fff'/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        )}
                    </ListItem>
                    <Divider/>
                </div>
        ));
        setRenderedList(newList);
    }, [list]);

    return (
        <section className='Container'>
            <h1 className='List_Title'>Tasks</h1>
            {!modal && <ModalButton openModal={openModal}/>}
            <Modal
                modalState={openModal}
                task={task}
                setTask={setTask}
                Submit={Submit}
                Cancel={Cancel}
                category={availableCategories}
                modal={modal}
                dropDownChange={dropDownChange}
            />
            <TaskList renderedList={renderedList}/>
        </section>
    )
}

export default ToDoList;
