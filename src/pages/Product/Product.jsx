import React, { useState, useMemo, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish, SaveAlt, Add } from "@mui/icons-material";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom";
import { userRequest } from "../../axios";

const Product = () => {

  const location = useLocation()
  const dispatch = useDispatch();
  const history = useHistory();

  const productId = location.pathname.split('/')[2]
  const [productStats, setProductStats] = useState([])
  const [product, setProduct] = useState([])

  // const product = useSelector(state => state.product.products.find(product => product._id === productId))

    // i used useMemo for unchanging months
    const MONTHS = useMemo(
      () => [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Agu",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      []
    );
  
  console.log(product);

  useEffect(() => {

    const getStats = async () => {
      try {
        const res = await userRequest.get('orders/income?pid=' + productId)
        const list = res.data.sort((a,b) => {
          return a._id - b._id
        })
        list.map(item => {
          setProductStats(prev => [
            ...prev,
            { name : MONTHS[item._id - 1], Sales : item.total}
          ])
        })
      } catch (error) {
        console.log(error);
      }
    }

    const getProduct = async () => {
      try {
        const res = await userRequest.get('products/find/' + productId)
        setProduct(res.data)
      } catch (error) {
        console.log(error);
      }
    }

    getProduct()
    getStats()
    
  }, [productId, MONTHS]);

  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newproduct" className="link">
          <button className="productAddButton"><Add style={{ marginRight: "8px" }} />Create Product</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productStats} dataKey="Sales" title="Sales Performance (Amount)" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img
              src={product.img}
              className="productInfoImg"
            />
            <span className="productName">{product.title}</span>
          </div>
          <hr className="hr" />
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">ID</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Sales : </span>
              <span className="productInfoValue">not working now.</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Active : </span>
              <span className="productInfoValue">not working now.</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">In Stock : </span>
              <span className="productInfoValue">{product.inStock ? 'yes' : 'no'}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Created Date : </span>
              <span className="productInfoValue">{product.createdAt}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">Updated Date : </span>
              <span className="productInfoValue">{product.updatedAt}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />
            <label>Product Description</label>
            <input type="text" placeholder={product.desc} />
            <label>Price</label>
            <input type="number" placeholder={product.price} />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src={product.img}
                alt=""
                className="productUploadImg"
              />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">
              <SaveAlt style={{ marginRight: "8px" }} /> Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
