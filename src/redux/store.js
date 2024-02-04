import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import updateproductReducer from "./features/productupdateSlice";
import productdeleteReducer from "./features/productdeleteSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    updateproduct: updateproductReducer,
    deleteproduct: productdeleteReducer,
  },
});

export default store;
