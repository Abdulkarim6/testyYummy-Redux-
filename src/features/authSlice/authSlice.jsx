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
    return result?.user?.email;
  }
);

export const signInUser = createAsyncThunk("auth/signIn", async ({email, password}) => {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result?.user?.email;
})

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers : {
    setUser : (state, {payload}) => {
    state.userEmail = payload
    },
    logOutLocally : (state) => {
      state.userEmail = ""
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
        state.userEmail = action.payload,
        state.isSuccess = true,
        state.isError = false,
        state.error = ''
    })
    .addCase(createUser.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.error = action.error.message
    })
    .addCase(signInUser.pending, (state) => {
        state.isLoading = true,
        state.isSuccess = false,
        state.isError = false,
        state.error = ''
    })
    .addCase(signInUser.fulfilled, (state, action) => {
        state.isLoading = false,
        state.userEmail = action.payload,
        state.isSuccess = true,
        state.isError = false,
        state.error = ''
    })
    .addCase(signInUser.rejected, (state, action) => {
        state.isLoading = false,
        state.isSuccess = false,
        state.isError = true,
        state.error = action.error.message
    });
  },
});

export const {setUser, logOutLocally} = authSlice.actions;
export default authSlice.reducer;
