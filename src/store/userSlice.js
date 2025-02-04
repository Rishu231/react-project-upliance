import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  hasUnsavedChanges: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.hasUnsavedChanges = false;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    setUnsavedChanges: (state, action) => {
      state.hasUnsavedChanges = action.payload;
    },
  },
});

export const { setUser, setUnsavedChanges } = userSlice.actions;
export default userSlice.reducer;
