import { createSlice } from "@reduxjs/toolkit";

export const infosSlice = createSlice({
  name: "infos",
  initialState: {
    infos: null,
  },
  reducers: {
    updateInfos: (state, { payload }) => {
      state.infos.push(payload);
    },
  },
});

export const { updateInfos } = infosSlice.actions;
export default infosSlice.reducer;
