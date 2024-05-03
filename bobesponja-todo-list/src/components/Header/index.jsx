import pawned from '../../assets/pawned.gif';
import styles from './header.module.css';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useState } from 'react';

export function Header({ handleAddTask }) {
  const [title, setTitle] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    handleAddTask(title);
    setTitle('');
  }

  function onChangeTitle(event) {
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <h1> &gt;_ To Do List...</h1>
      <img src={pawned} />

      <a className='adding' href="#dialog"><button>Add Task</button></a>

      <dialog id="dialog" onSubmit={handleSubmit} className={styles.newTaskForm}>
        <form>
          <input class="text" placeholder="Add a new task" type="text" onChange={onChangeTitle} value={title} autofocus />
          <button className='create-btn'>Create <AiOutlinePlusCircle size={20} /></button>
        </form>
        <a className='close-btn' href="#!">Close</a>
      </dialog>


    </header>
  )
}