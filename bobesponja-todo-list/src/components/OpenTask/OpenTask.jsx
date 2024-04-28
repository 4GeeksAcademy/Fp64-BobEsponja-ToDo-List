import { useState } from 'react'
import React from 'react'
import Modal from '../Modal/Modal'
import './OpenTask.css'


const OpenTask = () => {
    const [showModal, setShowModal] = useState(false)

    const openModal = () => {
      setShowModal(true)
    }
    
      return (
        <div className='app'>
          {showModal && <Modal setShowModal={setShowModal} />}
         <button onClick={openModal} className='open-btn'>Open Modal</button>
        </div>
      )
    }

export default OpenTask