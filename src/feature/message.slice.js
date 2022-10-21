import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: null,
  },
  reducers: {
    addmessage: (state, { payload }) => {
      state.message.push(payload);
    },
  },
});

export const { addmessage } = messageSlice.actions;
export default messageSlice.reducer;
