import { createSlice } from "@reduxjs/toolkit";

export const publicationSlice = createSlice({
  name: "publication",
  initialState: {
    publication: null,
  },
  reducers: {
    addpublication: (state, { payload }) => {
      state.publication.push(payload);
    },
  },
});

export const { addpublication } = publicationSlice.actions;
export default publicationSlice.reducer;
