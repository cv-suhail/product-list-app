import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getProductById } from '../api/index.jsx';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Product Details</h1>
      <p>Name: {product.title}</p>
      <p>Description: {product.description}</p>
      <p>Price: {product.price}</p>
      <img src={product.image} alt={product.name} height="100" width="100" />
      <Link to={`/products/${id}/edit`}>Edit</Link>
    </div>
  );
};

export default ProductDetails;
