import './ListTask.css'
import Tasks from "./Tasks.jsx";

const ListTasks = ({ list, setList }) => {
    const changeStatus = (e) => {
        const { name, checked } = e.target;
        const newList = list.map((item) => ({
            ...item,
            done: item.id === name ? checked : item.done
        }));
        setList(newList);
    }

    const Add = list.map(item => <Tasks key={item.id} data={item} onChange={changeStatus} />);

    const Remove = () => {
        const newList = list.filter(item => !item.done);
        setList(newList);
    }

    return (
        <div className='Task_List'>
            {list.length ? Add : ''}
            {list.length ? (
                <button className='Cancel' onClick={Remove}>Remove</button>
            ) : null}
        </div>
    )
}

export default ListTasks;
