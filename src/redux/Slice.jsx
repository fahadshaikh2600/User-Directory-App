import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.list = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setError } = usersSlice.actions;
export default usersSlice.reducer;
