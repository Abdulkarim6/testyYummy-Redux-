import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, } from "firebase/auth";
import auth from "../../firebase/firebase.config";

const initialState = {
  userEmail : "",
  isLoading: false,
  isSuccess: false,
  isError: false,
  error: "",
};

export const createUser = createAsyncThunk("auth/createUser",async ({ email, password }) => {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    return result.user.email;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers : {
    setUser : (state, {payload}) => {
    state.userEmail = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false,
        state.error = ''
    })
    .addCase(createUser.fulfilled, (state, action) => {
        state.isLoading = false,
        state.userEmail = action.payload.email,
        state.isSuccess = true,
        state.isError = false,
        state.error = ''
    })
    .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.error = action.error.message
    });
  },
});

export const {setUser} = authSlice.actions;
export default authSlice.reducer;
