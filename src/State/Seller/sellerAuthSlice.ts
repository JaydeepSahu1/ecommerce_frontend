import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../Config/Api";

export const sellerLogin = createAsyncThunk(
  "/auth/signin",
  async (loginRequest: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/sellers/login", loginRequest);
      console.log("seller signin response", response.data);
        const jwt=response.data.jwt;
        localStorage.setItem("jwt",jwt);

      return response.data;
    } catch (error: any) {
      console.log("otp error ---", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);