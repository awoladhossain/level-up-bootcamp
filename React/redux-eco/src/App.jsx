import { useState } from "react";
import ProductForm from "./features/produtcs/ProductForm";
import ProductListView from "./features/produtcs/ProductListView";

const App = () => {
  const [isEdit, setIsEdit] = useState(false);
  const [editProduct, setEditProduct] = useState({});
  const handleProductToEdit = (product) => {
    setEditProduct(product);
    setIsEdit(true);
  };
  return (
    <div>
      <ProductForm editProduct={editProduct} isEdit={isEdit} />
      <ProductListView onHandleSetProductEdit={handleProductToEdit} />
    </div>
  );
};

export default App;
