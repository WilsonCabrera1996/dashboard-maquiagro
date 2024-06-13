import React, {createContext, useState, useEffect} from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ Agroforestal }) => {
  
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('/data/productos.json')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error al cargar los productos:', error));
  }, [])
  return <ProductContext.Provider value={{products}}>{Agroforestal}</ProductContext.Provider>;
};

export default ProductProvider;
