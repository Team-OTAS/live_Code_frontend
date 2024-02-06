import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../api/axios";

const initialState = {
    loading: false,
    shopData: [],
    error: "",
  };

  export const updateShops = createAsyncThunk(
    "shopupdate/updateShops",
    (shopData) => {

        console.log("Shop Data from Redux Store", shopData);
    //   return axios
    //     .post(`/products/${productData.id}?_method=PUT`, productData.formData, {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //          },
    //     })
    //     .then((response) => response.data);
    }
  );
  
  const shopUpdateSlice = createSlice({
    name: "shopupdate",
    initialState,
    extraReducers: (builder) => {
      builder.addCase(updateShops.fulfilled, (state, action) => {
        state.loading = false;
        state.update = action.payload;
        state.error = "";
      });
      builder.addCase(updateShops.rejected, (state, action) => {
        state.loading = false;
        state.update = [];
        state.error = action.error.message;
      });
    },
  });
  
  export default shopUpdateSlice.reducer;
  