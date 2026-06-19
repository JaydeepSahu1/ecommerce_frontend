import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../Config/Api";


export const sendLoginSignupOtp =createAsyncThunk("/auth/sendLoginSignupOtp",
    async(email : {email:string} ,{rejectWithValue})=>{
        try{
            const response=await api.post("/auth/sent/login-signup-otp",email)
            console.log("login response" ,response)
        }catch(error){
            console.log("email error ---",error)
        }
    }
)

export const signin = createAsyncThunk(
  "/auth/signin",
  async (loginRequest: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest);
      console.log("signin response", response.data);
      return response.data;
    } catch (error: any) {
      console.log("otp error ---", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
