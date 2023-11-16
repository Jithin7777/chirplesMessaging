import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllMessages, getAllUser } from "../service/APIs/allAPIs";

const fetchMessages = createAsyncThunk(
  `messageList/fetchMessages`,
  async () => {
    const result = await getAllMessages();
    // console.log(result);
    return result.data;
  }
);

const messageSlice = createSlice({
  name: "messageList",
  initialState: {
    loading: false,
    allMessages: [],
    error: "",
  },
  reducers: {
    // addToMessage: (state, action) => {
    //   state.push(action.payload);
    // },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchMessages.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.allMessages = action.payload;
      state.error = "";
    });
    builder.addCase(fetchMessages.rejected, (state, action) => {
      state.loading = false;
      state.allMessages = [];
      state.error = action.payload;
    });
  },
});

export default messageSlice.reducer;
export { fetchMessages };
export const { addToMessage } = messageSlice.actions;