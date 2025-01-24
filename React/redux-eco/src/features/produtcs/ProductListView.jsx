import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProducts, fetchProducts } from "./productSlice";

// eslint-disable-next-line react/prop-types
const ProductListView = ({ onHandleSetProductEdit }) => {
  const dispatch = useDispatch();
  const { products, isLoading, error } = useSelector(
    (state) => state.productsR
  );
  console.log(products, isLoading, error);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const handleEdit = (product) => {
    onHandleSetProductEdit(product);
  };

  return (
    <div>
      {isLoading && <p>Loading..</p>}
      {error && <p>{error}</p>}
      <section className="products">
        {!isLoading &&
          !error &&
          products &&
          products.length > 0 &&
          products.map((product) => {
            return (
              <article className="product" key={product.id}>
                <h3>
                  {product.id}. {product.title}
                </h3>
                <p>{product.description}</p>
                <p>{product.category}</p>
                <p>Price: {product.price}</p>
                <button onClick={() => dispatch(deleteProducts(product.id))}>
                  Delete
                </button>
                <button onClick={() => handleEdit(product)}>Edit</button>
              </article>
            );
          })}
      </section>
    </div>
  );
};

export default ProductListView;
