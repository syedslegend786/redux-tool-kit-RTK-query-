import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const AsynFetchUsers = createAsyncThunk("users/fetchusers", async () => {
  const users = await axios.get("https://jsonplaceholder.typicode.com/users");
  return users.data;
});

interface CounterState {
  users: string[];
  errors: any;
  loading: boolean;
}

const initialState: CounterState = {
  users: [],
  errors: null,
  loading: false,
};

export const counterSlice = createSlice({
  name: "users",

  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(AsynFetchUsers.fulfilled, (state, action) => {
      state.users = action.payload.map((d: any) => d.name);
      state.loading = false;
    });
    builder.addCase(AsynFetchUsers.rejected, (state, action) => {
      state.errors = action.payload as any;
      state.loading = false;
    });
    builder.addCase(AsynFetchUsers.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export default counterSlice.reducer;
