import { useEffect, useState } from 'react'
import './Modal.css'
import Backdrop from '../Backdrop/Backdrop'
import NewTask from '../NewTask/NewTask'


const Modal = ({ setShowModal }) => {

    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        setShowContent(true)
    })

    const closeModal = () => {
        setShowModal(false)
    }

    return (
        <>
            
            <Backdrop showBackdrop={showContent} closeModal={closeModal} />

            <div className="modal" >  
                <div className='modalBody'>
                <div onClick={closeModal} className='closeBtn'>
                    <span>&times;</span>
                </div>
                <h1>Create your Task</h1>
                <NewTask />
                <button type='submit' onClick={closeModal} className='cancel-btn'>Cancel</button>
                
                </div>
            </div>
        </>
    )
}

export default Modal