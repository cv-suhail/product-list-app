import React, { useState, useEffect } from "react";
import Table from "./MuiTable";
import styles from "../assets/styles/main.module.css";
import { getAllProducts, deleteProduct } from "../api/index";

const Main = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    await deleteProduct(id);
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <main className={styles.main_section}>
      <div className={styles.container}>
        <Table products={products} handleDelete={handleDelete} />
      </div>
    </main>
  );
};

export default Main;
