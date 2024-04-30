

import './Tasks.css'
const Tasks = ({ onChange, data: { id, done, task, category } }) => {
    return (
        <section className='Tasks_Management'>
            <label className='Item'>
                <input type="checkbox" name={id} defaultChecked={done} onChange={onChange}/>
            </label>
            <div className="Tasks">{task} {category}</div>
        </section>
    )
}

export default Tasks;
