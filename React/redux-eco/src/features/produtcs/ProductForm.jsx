import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { createProducts, updateProducts } from "./productSlice";
// eslint-disable-next-line react/prop-types
const ProductForm = ({ editProduct = {}, isEdit = false }) => {
  console.log(editProduct);
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    title: "",
    price: "",
    description: "",
    category: "",
  });
  useEffect(() => {
    if (editProduct) {
      setProduct({
        title: editProduct.title,
        price: editProduct.price,
        description: editProduct.description,
        category: editProduct.category,
      });
    }
  }, [editProduct]);
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEdit) {
      dispatch(updateProducts({ id: editProduct.id, product }));
    }
    dispatch(createProducts({ ...product, id: nanoid() }));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            className="border border-black rounded-md px-2 mx-2"
            name="title"
            value={product.title}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            className="border border-black rounded-md px-2 mx-2"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description</label>
          <input
            className="border border-black rounded-md px-2 mx-2"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Category</label>
          <input
            className="border border-black rounded-md px-2 mx-2"
            name="category"
            value={product.category}
            onChange={handleChange}
          />
        </div>
        <button className="bg-blue-500 text-white rounded-md" type="submit">
          {isEdit ? "Edit Product" : "Add Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
