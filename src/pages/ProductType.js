import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';

const ProductType = () => {
  const { type } = useParams();
  const { filteredProducts, setSelectedType } = useContext(ProductContext);

  useEffect(() => {
    setSelectedType(type);
  }, [type, setSelectedType]);

  return (
    <div>
      <section className='py-16'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {filteredProducts.map(product => (
              <Product key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductType;
