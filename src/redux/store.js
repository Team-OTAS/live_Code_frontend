import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import updateproductReducer from "./features/productupdateSlice";
import productdeleteReducer from "./features/productdeleteSlice";
import updateShops from "./features/shopUpdateSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    updateproduct: updateproductReducer,
    deleteproduct: productdeleteReducer,
    Shop: updateShops
  },
});

export default store;
