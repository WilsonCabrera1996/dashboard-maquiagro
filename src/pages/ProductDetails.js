import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import { BsWhatsapp } from 'react-icons/bs';

const ProductDetails = () => {
  const { id } = useParams();
  const { products } = useContext(ProductContext);

  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  if (!product) {
    return <section className='h-screen flex justify-center items-center'>Cargando...</section>;
  }

  const { nombre, categoria, descripcion, imagen, codigo } = product;
  console.log(product);

  const phoneNumber = '+593980433551';
  const message = `Hola, me gustaría obtener más información sobre el producto:\n\nNombre: ${nombre}\nCategoría: ${categoria}\nCodigo: ${codigo}`;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <section className='pt-32 pb-12 lg:py-32 h-screen flex items-center'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row items-center'>
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-w-[200px] lg:max-w-sm' src={imagen} alt={nombre} />
          </div>
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[26px] font-medium mb-2 max-w-[450px] mx-auto'>{nombre}</h1>
            <div className='text-xl text-red-500 font-medium mb-6'>{categoria}</div>
            <p>{descripcion}</p>
            <button className='justify-center'>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
                <BsWhatsapp size={20} style={{ color: '#25D366' }} />
                <span>Cotizar</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
