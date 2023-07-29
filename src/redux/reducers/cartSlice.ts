import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../constants";

interface ICart {
  cpuCart: IProduct[];
}
const initialState: ICart = {
  cpuCart: [],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCpuCart: (state, action) => {
      state.cpuCart = [action.payload];
    },
    removeFromCpuCart: (state) => {
      state.cpuCart = [];
    },
  },
});

export const { addToCpuCart, removeFromCpuCart } = cartSlice.actions;
export default cartSlice.reducer;
