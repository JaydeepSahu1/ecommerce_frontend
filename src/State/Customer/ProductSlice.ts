import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../Config/Api";
import { Product } from "../../Types/ProductTypes";

const API_URL = "/products"

export const fetchProductById = createAsyncThunk("products/fetchProductById",
    async (productId, { rejectWithValue }) => {
        try {
            const response = await api.get(`${API_URL}/${productId}`);



            const data = response.data
            console.log("product detail data :" , data)
            return data
        }
        catch (error: any) {
            console.log("error: " + error)
            return rejectWithValue(error.message)
        }
    }
)


export const searchProduct = createAsyncThunk<any,any>("products/searchProduct",
    async (query, { rejectWithValue }) => {
        try {
            const response = await api.get(`${API_URL}/search`,
                {
                    params: {
                        query,
                    }
                }
            );

            const data = response.data
            console.log("search product data :" , data)
            return data
        }
        catch (error: any) {
            console.log("error: " + error)
            return rejectWithValue(error.message)
        }
    }
)

export const fetchAllProduct = createAsyncThunk<any, any>(
  "products/fetchAllProduct",
  async (params, { rejectWithValue }) => {
    try {
      const response = await api.get(`${API_URL}`, {
        params: {
          ...params,
          pageNumber: params.pageNumber || 0,
        },
      });

      const data = response.data;
      console.log("all product data :", data);

      // Extract content + totalPages from Page<Product>
      return {
        products: data.content,
        totalPages: data.totalPages,
      };
    } catch (error: any) {
      console.log("error: " + error);
      return rejectWithValue(error.message);
    }
  }
);


 interface ProductState{
    product:Product | null;
    products:Product[];
    totalPages:number;
    loading:boolean;
    error:string | null | undefined | any;
    searchProduct:Product[]
 }

 const initialState : ProductState ={
     product:null,
    products:[],
    totalPages:0,
    loading:false,
    error: null ,
    searchProduct:[]
 } 

 const productSlice=createSlice ({
    name:"products",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchProductById.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchProductById.fulfilled,(state,action)=>{
            state.loading=false;
            state.product=action.payload;
        })
        builder.addCase(fetchProductById.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })


        builder.addCase(fetchAllProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(fetchAllProduct.fulfilled,(state,action)=>{
            state.loading = false;
            state.products = action.payload.products;
             state.totalPages = action.payload.totalPages;
        })
        builder.addCase(fetchAllProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })



        builder.addCase(searchProduct.pending,(state)=>{
            state.loading = true;
        })
        builder.addCase(searchProduct.fulfilled,(state,action)=>{
            state.loading=false;
            state.searchProduct=action.payload;
        })
        builder.addCase(searchProduct.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        })
            
    }
 })

 export default productSlice.reducer