import React from 'react';
import './Backdrop.css';

const Backdrop = ({closeModal, showBackdrop }) => {
  return <div onClick={closeModal} className='backdrop' {...showBackdrop} {...showBackdrop & showBackdrop} ></div>
}

export default Backdrop