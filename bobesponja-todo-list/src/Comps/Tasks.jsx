import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import './Tasks.css'
const Tasks = ({ onChange, data: { id, done, task, category } }) => {
    return (
        <>
            <section className='Tasks_Management'>
                <section className="Checked">
                    <label className='Item'>
                        <Checkbox name={id} defaultChecked={done} onChange={onChange}/>
                    </label>
                </section>
                <section className="Tasks">
                    <span className="Task_Name">{task}</span>
                    <span className="Task_Category">{category}</span>
                </section>
            </section>

        </>

    )
}

export default Tasks;
