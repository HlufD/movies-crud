import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { LoginFormData, LoginResponse } from "../../../types/types";
import axios from "../../../services/axios";
import { RootState } from "../../store";

interface UserState {
  user: LoginResponse["user"] | null;
  loading: boolean;
  error: string | null;
}

const userFromStorage = localStorage.getItem("user");
const initialState: UserState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  loading: false,
  error: null,
};

// Async thunk to handle user login
export const loginUser = createAsyncThunk(
  "user/loginUser",
  async ({ username, password }: LoginFormData, { rejectWithValue }) => {
    try {
      const response = await axios.post("/login", { username, password });
      const user = response.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      return user;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.response && error.response.data) {
        return rejectWithValue(error.response.data.message);
      }
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;

export const selectUser = (state: RootState) => state.user.user;
export const selectUserLoading = (state: RootState) => state.user.loading;
export const selectUserError = (state: RootState) => state.user.error;
