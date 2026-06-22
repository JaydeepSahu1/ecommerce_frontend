import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product } from "../../Types/ProductTypes";
import { api } from "../../Config/Api";

export const fetchSellerProducts = createAsyncThunk<Product[], string>(
  "/sellerProduct/fetchSellerProducts",
  async (jwt, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/products", {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      const data = Array.isArray(response.data) ? response.data : [];
      console.log("sellerProduct -", data);
      return data;
    } catch (error: any) {
      console.error("error ---", error);
      return rejectWithValue(error.response?.data || "Failed to fetch products");
    }
  }
);

export const createProduct = createAsyncThunk<Product, { request: any; jwt: string | null }>(
  "sellerProduct/createProduct",
  async ({ request, jwt }, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/products", request, {
        headers: { Authorization: `Bearer ${jwt}` },
      });
      console.log("product created", response.data);
      return response.data;
    } catch (error: any) {
      console.error("error ---", error);
      return rejectWithValue(error.response?.data || "Failed to create product");
    }
  }
);

interface SellerProductState {
  products: Product[];
  loading: boolean;
  error: string | null | undefined;
}

const initialState: SellerProductState = {
  products: [],
  loading: false,
  error: null,
};

const sellerProductSlice = createSlice({
  name: "sellerProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSellerProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSellerProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchSellerProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(createProduct.pending, (state) => {
        state.loading = true;
      })
      .addCase(createProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = [...state.products, action.payload];
      })
      .addCase(createProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default sellerProductSlice.reducer;
