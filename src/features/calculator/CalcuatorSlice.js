import { createSlice, current } from "@reduxjs/toolkit";
import Display from './display/Display';

const initialState = {
  result: 0,
  display: [],
  history: [],
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    button_Pressed: (state, action) => {
      buttonPress(state, action);
    },
    button_clear: (state) => {
      state.display = [];
      state.result = 0;
    },
    button_dell: (state) => {
      state.display = state.display.slice(0, -1);
    },
    button_Equal: (state) => {
      buttonEqual(state);
    },
  },
});
export const {
  button_Pressed,
  button_clear,
  button_Equal,
  button_History,
  button_dell,
} = calculatorSlice.actions;

export default calculatorSlice.reducer;

export const buttonEqual = (state) => {
  state.result = eval(state.display.join(""));
  state.history.push(`${state.display.join("")} = ${state.result}`);
  state.display = [state.result];
};
export const buttonPress = (state, action) => {
  const press = action.payload;
  if(state.display == state.result) {
    if (press === "+" || press === "-" || press === "*" || press === "/") {
      state.display.push(action.payload);
    }else {
      state.display = [] ;
      state.display.push(action.payload);
    }
  }
  else {
    state.display.push(action.payload);

  }
};
