import { configureStore, createSlice } from "@reduxjs/toolkit";

const toDos = createSlice({
  name: "Reducer",
  initialState: {value:0, number: 2},
  reducers: {
    add: (state, action) => {
      state.value = action.payload
    },
    remove: (state, action) => state.filter(toDo => toDo.id !== action.payload)
  }
});

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });