import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Example: import your slice reducers
// import authReducer from "./features/auth/authSlice";
// import productReducer from "./features/product/productSlice";

const rootReducer = combineReducers({
  // auth: authReducer,
  // product: productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  // thunk is already included by default
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
