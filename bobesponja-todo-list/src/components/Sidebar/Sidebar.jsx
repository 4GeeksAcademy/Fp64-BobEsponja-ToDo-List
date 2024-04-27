import {useState} from 'react';
import './Sidebar.css';
import './FirstTop'
import FirstTop from './FirstTop';


const Sidebar = () => {
    // const [myday, setMyDay] = useState("")
    // const [important, setImportant] = useState("");
    // const [personal, setPersonal] = useState("");
    // const [all, setAll] = useState("")

    const categories = [
        {name: 'MyDay', className: 'Category'},
        {name: 'Important', className: 'Category'},
        {name: 'Personal', className: 'Category'},
        {name: 'All', className: 'Category'},
    ];

    const MappedCategories = categories.map((category, i) => {
        return (
            <li key={'key' + i} className={category.className}>
                <a href="#">{category.name}</a>
            </li>
        )
    });

    return (

        <div className='Container'>
            <div className='sideBar'>
                <FirstTop/>
                <div className='sideBarCategories'>
                    <ul className='Categories'>
                        {MappedCategories}
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Sidebar