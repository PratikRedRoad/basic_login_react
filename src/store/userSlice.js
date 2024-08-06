import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
//   user: null
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
      console.log("login reducer called");
    //   state.user = action.payload.user;
    },
    logout: (state) => {
        console.log("logout reducer called");
      state.isLoggedIn = false;
    //   state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
