import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from './components/Main'
import ProductForm from './components/ProductForm';
import ProductDetails from './components/ProductDetails';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<><Header /><Main /></>} />
        <Route exact path="/products/new" element={<ProductForm/>} />
        <Route exact path="/products/:id" element={<ProductDetails/>} />
        <Route exact path="/products/:id/edit" element={<ProductForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
