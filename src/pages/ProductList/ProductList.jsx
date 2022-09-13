import React from "react";
import "./product-list.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Add } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deleteProduct, getProducts } from "../../redux/apiCalls";

const ProductList = () => {
  /* Dummy data
    const [data, setData] = useState(productRows);

   const handleDelete = (id) => {
    setData(data.filter(item => item.id !== id))
    }
 */

  const dispatch = useDispatch();
  const products = useSelector((state) => state.product?.products);

  console.log(products);

  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  console.log(products)

  const handleDelete = (id) => {
    deleteProduct(id, dispatch)
  }

  const columns = [
    { field: "_id", headerName: "ID", width: 220 },
    {
      field: "product",
      headerName: "Product Name",
      width: 400,
      renderCell: (params) => {
        return (
          <div className="productListUser">
            <img
              className="productListImg"
              src={params.row.img}
              alt={params.row.title}
            />
            {params.row.title}
          </div>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },
    { field: "price", headerName: "Price", width: 200 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row._id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="productListTitleContainer">
        <h1 className="productTitle">Products</h1>
        <Link to="/newproduct" className="link">
          <button className="productAddButton">
            <Add style={{ marginRight: "8px" }} />
            Create Product
          </button>
        </Link>
      </div>
      <DataGrid
        rows={products}
        columns={columns}
        getRowId={(row) => row._id}
        pageSize={10}
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
