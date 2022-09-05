import React from "react";
import "./product-list.css";
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Add } from "@mui/icons-material";

const ProductList = () => {
  
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "product", headerName: "Product", width: 200, renderCell : (params) => {
        return (
            <div className="productListUser">
                <img className="productListImg" src={params.row.img} alt={params.row.name} />
                {params.row.name}
            </div>
        )
    }},
    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    { field: "action", headerName: "Action", width: 150, renderCell : (params) => {
        return (
            <>
                <Link to={`/product/${params.row.id}`}>
                    <button className="productListEdit">Edit</button>
                </Link>
                <DeleteOutline className="productListDelete" onClick={() => handleDelete(params.row.id)} />
            </>
        )
    }},

  ];


  return (
    <div className="productList">
      <div className="productListTitleContainer">
        <h1 className="productTitle">Products</h1>
        <Link to="/newproduct" className="link">
          <button className="productAddButton"><Add style={{ marginRight: "8px" }} />Create Product</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={5}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
