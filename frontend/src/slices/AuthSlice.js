import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  adminInfo: localStorage.getItem("adminInfo")
    ? JSON.parse(localStorage.getItem("adminInfo"))
    : null,
  userForEdit: {},
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      console.log(action.payload, "payload");
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logoutUser:(state,action)=>{
        state.userInfo = null;
        localStorage.removeItem('userInfo')
    },
    logout: (state, action) => {
      state.userInfo
        ? ((state.userInfo = null), localStorage.removeItem("userInfo"))
        : (state.adminInfo = null),
        localStorage.removeItem("adminInfo");
    },
    // logoutUser:(state,action)=>{
    //     console.log("Enter to LOGOUT USER",state.userInfo);
    //     state.userInfo && localStorage.removeItem('userInfo')
    // },
    setAdminCredentials: (state, action) => {
      console.log(action.payload, "payload");
      state.adminInfo = action.payload;
      localStorage.setItem("adminInfo", JSON.stringify(action.payload));
    },
    userDetails: (state, action) => {
      console.log(action.payload, "payload userDetails");
      state.userForEdit = action.payload;
    },
  },
});

export const {
  setCredentials,
  logout,
  userDetails,
  logoutUser,
  setAdminCredentials,
} = AuthSlice.actions;
export default AuthSlice.reducer;
