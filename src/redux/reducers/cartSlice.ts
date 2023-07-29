import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../../constants";

interface ICart {
  cpuCart: IProduct[];
  ramCart: IProduct[];
  psuCart: IProduct[];
  sdCart: IProduct[];
  monitorCart: IProduct[];
  othersCart: IProduct[];
}
const initialState: ICart = {
  cpuCart: [],
  ramCart: [],
  psuCart: [],
  sdCart: [],
  monitorCart: [],
  othersCart: [],
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
    addToRamCart: (state, action) => {
      state.ramCart = [action.payload];
    },
    removeFromRamCart: (state) => {
      state.ramCart = [];
    },
    addToPsuCart: (state, action) => {
      state.psuCart = [action.payload];
    },
    removeFromPsuCart: (state) => {
      state.psuCart = [];
    },
    addToSdCart: (state, action) => {
      state.sdCart = [action.payload];
    },
    removeFromSdCart: (state) => {
      state.sdCart = [];
    },
    addToMonitorCart: (state, action) => {
      state.monitorCart = [action.payload];
    },
    removeMonitorSdCart: (state) => {
      state.monitorCart = [];
    },
    addToOthersCart: (state, action) => {
      state.othersCart = [action.payload];
    },
    removeOthersSdCart: (state) => {
      state.othersCart = [];
    },
  },
});

export const {
  addToCpuCart,
  removeFromCpuCart,
  addToRamCart,
  removeFromRamCart,
  addToPsuCart,
  removeFromPsuCart,
  addToSdCart,
  removeFromSdCart,
  addToMonitorCart,
  removeMonitorSdCart,
  addToOthersCart,
  removeOthersSdCart,
} = cartSlice.actions;
export default cartSlice.reducer;
