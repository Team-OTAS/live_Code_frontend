import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./features/productReducer";
import productdeleteReducer from "./features/productdeleteSlice";
import updateShops from "./features/shopUpdateSlice";

const store = configureStore({
  reducer: {
    stocks: productReducers,
    deleteproduct: productdeleteReducer,
    Shop: updateShops
  },
});

export default store;
