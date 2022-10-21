import { createSlice } from "@reduxjs/toolkit";

export const likespublicationSlice = createSlice({
  name: "likespublication",
  initialState: {
    likespublication: null,
  },
  reducers: {
    addlikespublication: (state, { payload }) => {
      state.likespublication.push(payload);
    },
  },
});

export const { addlikespublication } = likespublicationSlice.actions;
export default likespublicationSlice.reducer;
