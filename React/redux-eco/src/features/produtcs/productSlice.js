import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

const baseURL = "http://localhost:3000/products";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const res = await axios.get(baseURL);
    console.log(res.data);
    return res.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id) => {
    const res = await axios.delete(`${baseURL}/${id}`);
    console.log(res.data);
    return id;
  }
);
export const createProducts = createAsyncThunk(
  "products/createProducts",
  async (product) => {
    const res = await axios.post(baseURL, product);
    console.log(res.data);
    return res.data;
  }
);
export const updateProducts = createAsyncThunk(
  "products/updateProducts",
  async ({ id, product }) => {
    const res = await axios.put(`${baseURL}/${id}`, product);
    return res.data;
  }
);

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        // eslint-disable-next-line no-constant-binary-expression
        state.error = "Failed To fetch data" || action.error;
      })
      .addCase(deleteProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.products = state.products.filter(
          (product) => product.id !== action.payload
        );
      })
      .addCase(createProducts.fulfilled, (state, action) => {
        state.products.push(action.payload);
      })
      .addCase(updateProducts.fulfilled, (state, action) => {
        const index = state.products.findIndex(
          (product) => product.id === action.payload.id
        );
        state.products[index] = action.payload;
      });
  },
});

export default productSlice.reducer;
