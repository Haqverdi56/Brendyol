import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/basketSlice";
import categoryReducer from './features/categorySlice'
import favoriteReducer from './features/favoritesSlice'


export const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    favorite: favoriteReducer,
  },
})