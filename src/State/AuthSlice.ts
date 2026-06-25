import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../Config/Api";


export const sendLoginSignupOtp = createAsyncThunk("/auth/sendLoginSignupOtp",
  async (email: { email: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/sent/login-signup-otp", email)
      console.log("login response", response)
    } catch (error) {
      console.log("email error ---", error)
    }
  }
)

export const signin = createAsyncThunk(
  "/auth/signin",
  async (loginRequest: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin", loginRequest)
      console.log("signin response", response.data);
      localStorage.setItem("jwt", response.data.jwt)
      return response.data.jwt;
    } catch (error: any) {
      console.log("otp error ---", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const signup = createAsyncThunk(
  "/auth/signup",
  async (signupRequest: { email: string; otp: string }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signup", signupRequest)
      console.log("signup response", response.data);
      localStorage.setItem("jwt", response.data.jwt)
      return response.data.jwt;
    } catch (error: any) {
      console.log("otp error ---", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const fetchUserProfile = createAsyncThunk(
  "user/fetchUserProfile",
  async (jwt: string, { rejectWithValue }) => {
    try {
      const response = await api.get("/api/users/profile", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });

      console.log("user profile response", response.data);
      return response.data; // return user profile object
    } catch (error: any) {
      console.log("fetch user profile error ---", error);
      return rejectWithValue(
        error.response?.data?.message || error.response?.data || "Something went wrong"
      );
    }
  }
);


export const logout = createAsyncThunk<any, any>("/auth/logout",
  async (navigate, { rejectWithValue }) => {
    try {
      localStorage.clear()
      console.log("logout sucess")
      navigate("/")
    } catch (error) {
      console.log("error - - -", error)
    }
  }
)

interface AuthState {
  jwt: string | null,
  otpSent: boolean,
  isLoggedIn: boolean,
  user: any | null,
  loading:boolean
}

const initialState: AuthState = {
  jwt: null,
  otpSent: false,
  isLoggedIn: false,
  user: null,
  loading:false
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder.addCase(sendLoginSignupOtp.pending,(state)=>{
      state.loading=true;
    })

    builder.addCase(sendLoginSignupOtp.fulfilled,(state)=>{
      state.loading=false;
      state.otpSent=true;
    })

     builder.addCase(sendLoginSignupOtp.rejected,(state)=>{
      state.loading=false;
    })

    builder.addCase(signin.fulfilled, (state, action) => {
      state.jwt = action.payload
      state.isLoggedIn = true
    })

    builder.addCase(signup.fulfilled, (state, action) => {
      state.jwt = action.payload
      state.isLoggedIn = true
    })

    builder.addCase(fetchUserProfile.fulfilled,(state,action)=>{
      state.user = action.payload
      state.isLoggedIn = true
    })

    builder.addCase(logout.fulfilled,(state)=>{
      state.jwt=null
      state.isLoggedIn=false
      state.user=null
    })

  }
})

export default authSlice.reducer;