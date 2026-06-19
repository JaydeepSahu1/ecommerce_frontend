import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";

export const fetchSellerProfile = createAsyncThunk(
  "/sellers/fetchSellerProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/sellers/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`, 
        },
      });
      console.log("fetch seller profile", response.data);
      return response.data;
    } catch (error: any) {
      console.log("error ---", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
