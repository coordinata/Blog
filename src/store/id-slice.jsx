// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//   id: [],
// };

// export const getId = createAsyncThunk(
//   "id/getId",
//   async (_, { rejectWithValue, dispatch }) => {
//     try {
//       const res = await axios.get("https://blog.kata.academy/api/articles");
//       dispatch(setId(res.data));
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const idSlice = createSlice({
//   name: "id",
//   initialState,
//   reducers: {
//     setId: (state, action) => {
//       state.id.push(action.payload);
//     },
//   },
// });

// export const { setId } = idSlice.actions;
// export default idSlice.reducer;
