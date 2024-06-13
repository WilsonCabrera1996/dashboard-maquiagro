import React, {createContext, useState,useEffect} from 'react';

export const ProductContext = createContext ();



const ProductProvider = ({AgroForestal}) => {

  const[products, setProducts] = useState ([]);
  
  useEffect (()=>{
    const fetchProducts = async () =>{
      const response = await fetch ();
    }
  }, [])


  return <ProductContext.Provider>{AgroForestal}</ProductContext.Provider>;
};

export default ProductContext;
