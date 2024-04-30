import './ListTask.css'
import Tasks from "./Tasks.jsx";
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from "@mui/material/Divider";

const ListTasks = ({list, setList}) => {
    const changeStatus = (e) => {
        const {name, checked} = e.target;
        const newList = list.map((item) => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(newList);
    }

    const Add = list.map(item => <Tasks className='Tasks' key={item.id} data={item} onChange={changeStatus}/>);

    const Remove = () => {
        const newList = list.filter(item => !item.done);
        setList(newList);
    }

    return (
        <>
            <div className='Task_List'>
                {/* eslint-disable-next-line react/prop-types */}
                {list.length ? Add : ''}
                {list.length ? (
                    <button className='Remove' onClick={Remove}><DeleteIcon/></button>
                ) : null}
            </div>
            <Divider/>
        </>
    )
}

export default ListTasks;
