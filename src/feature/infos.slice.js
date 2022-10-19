import { createSlice } from "@reduxjs/toolkit";

export const infosSlice = createSlice({
  name: "infos",
  initialState: {
    infos: null,
  },
  reducers: {
    setInfos: (state, { payload }) => {
      state.infos = payload;
    },

    updateInfos: (state, { payload }) => {
      state.infos.push(payload);
    },
  },
});

export const { updateInfos, setInfos } = infosSlice.actions;
export default infosSlice.reducer;
