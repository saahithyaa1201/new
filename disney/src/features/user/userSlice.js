// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   name: "",
//   email: "",
//   photo: "",
// };

// const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     setUserLoginDetails: (state, action) => {
//       state.name = action.payload.name;
//       state.email = action.payload.email;
//       state.photo = action.payload.photo;
//     },
//     setSignOutState: (state) => {
//       state.name = "";
//       state.email = "";
//       state.photo = "";
//     },
//   },
// });

// export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
// export const selectUserName = (state) => state.user.name;
// export default userSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  photo: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserLoginDetails: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },
    setSignOutState: (state) => {
      state.name = "";
      state.email = "";
      state.photo = "";
    },
  },
});

export const { setUserLoginDetails, setSignOutState } = userSlice.actions;
export const selectUserName = (state) => state.user.name;
export const selectUserPhoto = (state) => state.user.photo; // Added missing export
export default userSlice.reducer;