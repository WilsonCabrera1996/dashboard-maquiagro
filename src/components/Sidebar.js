import React, { useContext } from 'react';
import { IoMdArrowForward } from 'react-icons/io';
import { SidebarContext } from '../contexts/SidebarContext';
import { ProductContext } from '../contexts/ProductContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { setSelectedType } = useContext(ProductContext);
  const navigate = useNavigate();

  const handleSelectType = (type) => {
    setSelectedType(type);
    handleClose();
    navigate(`/products/${type}`);
  };

  return (
    <div className={` ${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px] ${isOpen ? 'open-class' : 'close-class'}`}>
      <div className='flex items-center justify-between py-6 border-b'>
        <div className='uppercase text-sm font-semibold'>Categoría</div>
        <div onClick={handleClose} className='cursor-pointer w-8 h-8 flex justify-center items-center'>
          <IoMdArrowForward className='text-2x1' />
        </div>
      </div>
      <div className='py-6'>
        <button onClick={() => handleSelectType('all')} className='block w-full text-left'>Todos</button>
        <button onClick={() => handleSelectType('motosierra')} className='block w-full text-left'>Motosierras</button>
        <button onClick={() => handleSelectType('bomba')} className='block w-full text-left'>Bombas</button>
        <button onClick={() => handleSelectType('tijera')} className='block w-full text-left'>Tijeras</button>
        {/* Agregar más tipos de productos según sea necesario */}
      </div>
    </div>
  );
};

export default Sidebar;
