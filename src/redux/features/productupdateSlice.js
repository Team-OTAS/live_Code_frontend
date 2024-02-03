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
          "X-XSRF-TOKEN":
            "eyJpdiI6ImZqendibWo2a3JmSWxreW1HMHplWUE9PSIsInZhbHVlIjoic2NKYzVpcDl0aHZtNlFrNUU2dEpRNVMyclRrc2VqdkZvMm9JSXREQXN5Tm5iUS9OVTBRRzVveVlKNS9XZmVNSHhKVm1zL3Iyd21hTm13YlIyRUJHaUp2OVBEVnVUV3lSRXR5b0pMYnZFV203cnNFTk1JWWhZbTVGZlRnUXBPL1kiLCJtYWMiOiI2ZGJiOWNiM2Q1NGNkZTA1ZjVmNDI5MzY2MzM5NzUzZGI3MTRjOTc1MTE4ZDE1Zjg3ODBjZGU2YjZhMzc4YTI3IiwidGFnIjoiIn0%3D",
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
