import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./new-product.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useHistory } from "react-router-dom";

const NewProduct = () => {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [fileProgress, setFileProgress] = useState("");
  const [cat, setCat] = useState([]);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleCreateProduct = (e) => {
    e.preventDefault();

    // Unique file name
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // upload file
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setFileProgress("Upload is " + progress.toFixed(0) + "% done");
        switch (snapshot.state) {
          case "paused":
            setFileProgress("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            // setFileProgress('Upload is running')
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
        console.log(error);
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setFileProgress("Upload is completed.");
          const product = { ...inputs, img: downloadURL, categories: cat };
          console.log(product);
          addProduct(product, dispatch);
          return history.push("/products");
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
          />
          {fileProgress}
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="Description..."
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Categories</label>
          <input
            name="price"
            type="text"
            placeholder="jeans,pants"
            onChange={handleCat}
            required
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" required onChange={handleChange}>
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Active</label>
          <select name="active" id="active">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button onClick={handleCreateProduct} className="addProductButton">
          Create
        </button>
      </form>
    </div>
  );
};

export default NewProduct;
