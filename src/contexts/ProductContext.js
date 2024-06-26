import React, { createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedType, setSelectedType] = useState('all');

  useEffect(() => {
    fetch('/data/productos.json')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setFilteredProducts(data);
      })
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  useEffect(() => {
    if (selectedType === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.tipo === selectedType));
    }
  }, [selectedType, products]);

  return (
    <ProductContext.Provider value={{ products, filteredProducts, setSelectedType }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;


