import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { SidebarContext } from '../contexts/SidebarContext';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);

  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] ${isOpen ? 'open-class' : 'close-class'}`}>
      
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Categoría</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2x1' />
        </div>
      </div>
    
    
    </div>

  );
};

export default Sidebar;
