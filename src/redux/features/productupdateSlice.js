import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
  loading: false,
  update: [],
  error: "",
};

export const updateProduct = createAsyncThunk(
  "product/updateProducts",
  (productData) => {
    return axios
      .post(`/products/${productData.id}?_method=PUT`, productData.formData, {
        headers: {
          "Content-Type": "multipart/form-data",
           },
      })
      .then((response) => response.data);
  }
);

const productupdadteSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(updateProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.update = action.payload;
      state.error = "";
    });
    builder.addCase(updateProduct.rejected, (state, action) => {
      state.loading = false;
      state.update = [];
      state.error = action.error.message;
    });
  },
});

export default productupdadteSlice.reducer;
