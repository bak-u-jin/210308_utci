import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "Reducer",
  initialState: {
    boxSize: "0 150 560 700",
    pathLocation: 0,
  },
  reducers: {
    changeMap: (state, action) => {
      return{
        ...state,
        pathLocation : action.payload.toMap,
        boxSize : action.payload.boxSize,
      }
    },
  }
});

export const { changeMap } = store.actions;

export default configureStore({ reducer: store.reducer });