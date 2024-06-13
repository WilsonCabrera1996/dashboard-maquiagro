import React from 'react';
import { Link } from 'react-router-dom';
import { BsEyeFill, BsWhatsapp } from 'react-icons/bs';

const Product = ({ product }) => {
  console.log(product);
  const { id, imagen, nombre, categoria, codigo } = product;

  const phoneNumber = '+593980433551';
  const message = `Hola, me gustaría obtener más información sobre el producto:\n\nNombre: ${nombre}\nCategoría: ${categoria}\nCodigo: ${codigo}`;

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;

  return (
    <div>
    <div className="border border-[#e4e4e4] mb-4 relative overflow-hidden group transition">
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-[200px] h-[200px] flex justify-center items-center mt-4">
          <img className="max-h-[160px] group-hover:scale-110 transition duration-300" src={imagen} alt={nombre} />
        </div>
      </div>
      <div className="absolute bg-white top-2 right-2 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all shadow-lg rounded-full p-2">
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          <BsWhatsapp size={20} style={{ color: '#25D366' }} />
          <span>cotizar</span>
        </a>
        <Link to={`/product/${id}`} className="w-8 h-8 flex justify-center items-center text-primary drop-shadow-xl mt-2">
          <BsEyeFill />
        </Link>
      </div>
      </div>
      <div className="p-4 text-center">
        <div className="text-sm text-gray-500">{categoria}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{nombre}</h2>
        </Link>
      </div>
    </div>
  );
};

export default Product;
