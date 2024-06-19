import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='relative h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      {/* Overlay oscuro */}
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='container relative mx-auto flex justify-around h-full'>
        <div className='flex flex-col justify-center'>
          <div className='font-semibold flex items-center uppercase'>
            <div className='w-10 h-[2px] bg-red-500 mr-3 '></div><div className='text-white'>Promociones</div>
          </div>
          <h1 className='text-[70px] leading-[1.1] font-light mb-4 text-white drop-shadow-custom'>
            Maquinaria Agrícola de la mejor calidad en Santa Isabel <br />
            <span className='font-semibold'>Agroforestal</span>
          </h1>
          <Link to={'/'} className='self-start uppercase font-semibold border-b-2 border-primary text-white border-white'>Descubre más productos aquí</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
