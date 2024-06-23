import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "../features/menuSlice/menuSlice";
import { apiSlice } from "../features/api/apiSlice";
import authSlice from "../features/authSlice/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    menuFilter: menuSlice,
    auth : authSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
});
