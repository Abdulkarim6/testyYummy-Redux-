import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCategory: [],
};

export const menuSlice = createSlice({
  name: "addToFilter",
  initialState,
  reducers: {
    categoryFilter: (state, action) => {
      if(!state.selectedCategory.includes(action.payload)){
        state.selectedCategory.push(action.payload)
      } else {
        state.selectedCategory = state.selectedCategory.filter(category => category !== action.payload)
      }
    },
  },
});

export const {categoryFilter} = menuSlice.actions;
export default menuSlice.reducer;
