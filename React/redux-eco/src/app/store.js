import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/produtcs/productSlice';

export default configureStore({
  reducer: {
    productsR:productReducer
  }
})