import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../api/axios";

const initialState = {
  loading: false,
  products: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get("/products").then((response) => response.data);
});

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct/:id",
  (id) => {
    return axios.get("/products").then((response) => response.data);
  }
);

export const createProducts = createAsyncThunk(
  "product/createProducts",
  (productData) => {
    return axios
      .post("/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
          },
      })
      .then((response) => response.data);
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
    builder.addCase(createProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(createProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
      console.log(action.error);
    });
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
