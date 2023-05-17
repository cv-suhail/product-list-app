import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById, createProduct, updateProduct } from '../api/index.jsx';

const ProductForm = () => {
  const { id } = useParams();
  const navigate = useNavigate()
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImageUrl] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const product = {
      title,
      description,
      image,
      price: parseFloat(price),
    };

    if (id) {
      await updateProduct(id, product);
    } else {
      await createProduct(product);
    }

    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchProduct = async () => {
      if (id) {
        const data = await getProductById(id);
        setTitle(data.title);
        setDescription(data.description);
        setImageUrl(data.image);
        setPrice(data.price);
      }
    };

    fetchProduct();
  }, [id]);

  return (
    <div>
      <h1>{id ? 'Edit Product' : 'Add Product'}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            value={image}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        <button type="submit">{id ? 'Save' : 'Add'}</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
