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

export const createProducts = createAsyncThunk(
  "product/createProducts",
  (productData) => {
    return axios
      .post("/products", productData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-XSRF-TOKEN":
            "eyJpdiI6Im9KOEpqVHhzNzhHZ0VZd2NzTmRoOGc9PSIsInZhbHVlIjoiTWUvV3hRUWNPOW5tRWJKS3VScGpRQktuT3BZLy9FdHVjbjdMMTdreGw4eHYwM1Z1MFlGekpnSVF3ckQ3cmJlS295dmdMS2tLQm40U3pEZlJ1OGZmU0R2UEsrcDArSWRKejZTY043cW1jWCt0RGt5K0lsYkZZSFJXVHFMYy9lTEYiLCJtYWMiOiI2NDMxMjM1MzUzM2M1OGE1MTIzMTAwZDI1ODA5NmUzNmI2Y2VkMjNmNDk3OGFhZGE3NWM4ZjVkZTZmYmQ2Zjc1IiwidGFnIjoiIn0%3D",
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
      console.log(state.error);
    });
  },
});

export default productSlice.reducer;
