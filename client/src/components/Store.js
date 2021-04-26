import { configureStore, createSlice } from "@reduxjs/toolkit";

const store = createSlice({
  name: "Reducer",
  initialState: {
    value: "0 150 560 700",
    pathLocation: 0,
    pathNum: 0,
  },
  reducers: {
    add: (state, action) => {
      return{
        ...state,
        value : action.payload.num,
        pathLocation : action.payload.text,
      }
    },
  }
});

export const { add, setPathNum } = store.actions;

export default configureStore({ reducer: store.reducer });