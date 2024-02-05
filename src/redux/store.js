import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./features/productReducer";
import productdeleteReducer from "./features/productdeleteSlice";

const store = configureStore({
  reducer: {
    stocks: productReducers,
    deleteproduct: productdeleteReducer,
  },
});

export default store;
