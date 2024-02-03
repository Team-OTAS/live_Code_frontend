import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "./../../api/axios";

const initialState = {
  loading: false,
  products: [],
  product: [],
  error: "",
};

export const fetchProducts = createAsyncThunk("product/fetchProducts", () => {
  return axios.get("/products").then((response) => response.data);
});

export const fetchProduct = createAsyncThunk("product/fetchProduct", (id) => {
  return axios.get(`/products/${id}`).then((response) => response.data);
});

export const createProducts = createAsyncThunk(
  "product/createProducts",
  (productData) => {
    return axios
      .post("/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-XSRF-TOKEN":
            "eyJpdiI6ImZqendibWo2a3JmSWxreW1HMHplWUE9PSIsInZhbHVlIjoic2NKYzVpcDl0aHZtNlFrNUU2dEpRNVMyclRrc2VqdkZvMm9JSXREQXN5Tm5iUS9OVTBRRzVveVlKNS9XZmVNSHhKVm1zL3Iyd21hTm13YlIyRUJHaUp2OVBEVnVUV3lSRXR5b0pMYnZFV203cnNFTk1JWWhZbTVGZlRnUXBPL1kiLCJtYWMiOiI2ZGJiOWNiM2Q1NGNkZTA1ZjVmNDI5MzY2MzM5NzUzZGI3MTRjOTc1MTE4ZDE1Zjg3ODBjZGU2YjZhMzc4YTI3IiwidGFnIjoiIn0%3D",
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
      state.product = [];
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.product = [];
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
      state.products = [];
      state.product = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.product = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;
