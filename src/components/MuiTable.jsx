import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from 'react-router-dom';

const DataTable = ({ products, handleDelete }) => {

  const columns = [
    {
      field: "image",
      headerName: "Image",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <Link to={`/products/${params.id}`}>
          <img
          src={params.value}
          height="50"
          width="50"
          style={{ marginLeft: "10px" }}
          alt="product"
        />
        </Link>
      ),
    },
    {
      field: "title",
      headerName: "Product Name",
      sortable: false,
      width: 400
    },
    { field: "description", 
      headerName: "Description", 
      sortable: false, 
      flex: 1, 
      minWidth: 200, },
    { field: "price", 
      headerName: "Price", 
      width: 130 },
    {
      field: " ",
      headerName: " ",
      width: 80,
      sortable: false,
      renderCell: (params) => (
        <button onClick={() => handleDelete(params.id)}>Delete</button>
      ),
    },
  ];

  const handleCellClick = (params) => {
    <Link to={`/products/${params.id}`}></Link>
  }

  return (
    <>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={products}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          onCellClick={handleCellClick}/>
        <button style={{
          backgroundColor: 'grey',
          border: 'none',
          padding: '10px',
          paddingRight: '20px',
          paddingLeft: '20px',
          borderRadius: '4px',
          cursor: 'pointer',
          position: 'absolute',
          bottom: 30,
          left: 30 }}>
          <Link style={{ textDecoration: 'none', color: 'whitesmoke'}} to="/products/new">Add Product</Link>
        </button>
        <h6 style={{color: 'red'}}>Click on Product Image for View More & Edit 
          <h6>(May be Edit will not work in fakeStoreApi !)</h6> </h6>
        
      </div>
      
    </>
  );
};

export default DataTable;
