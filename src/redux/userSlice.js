import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllUser } from "../service/APIs/allAPIs";

// API call - createAsyncThunk

const fetchUsers = createAsyncThunk(`userList/fetchUsers`, async () => {
  const result = await getAllUser();
  return result.data;
});

// slice creation

const userSlice = createSlice({
  name: "userList",
  initialState: {
    loading: false,
    allUsers: [],
    searchArray: [],
    error: "",
  },

  reducers: {
    // Actions without API
    searchUser: (state, action) => {
      state.allUsers = state.searchArray.filter((item) =>
        item.id
          .toLowerCase()
          .trim()
          .includes(action.payload.toLowerCase().trim())
      );
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.allUsers = action.payload;
      state.searchArray = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.allUsers = [];
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
export { fetchUsers };
export const { searchUser } = userSlice.actions;