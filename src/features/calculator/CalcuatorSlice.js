import { createSlice, current } from "@reduxjs/toolkit";


const initialState = {
  result: 0,
  display: [],
  history: []
};

export const calculatorSlice = createSlice({
  name: "calculator",
  initialState: initialState,
  reducers: {
    button_Pressed: (state, action) => {
      state.display.push(action.payload);
    },
    button_clear: (state) => {
        state.display = [] ;
        state.result = 0
    },
    button_dell : (state) => {
        state.display = state.display.slice(0,-1)
    },
    button_Equal: (state) => {
       buttonEqual(state)
    },
  },
});
export const { button_Pressed, button_clear, button_Equal ,button_History,button_dell } =
  calculatorSlice.actions;

export default calculatorSlice.reducer;


export const buttonEqual = (state) => {
    state.result = eval(state.display.join(''));
    state.history.push(`${state.display.join('')} = ${state.result}`);
    state.display = [state.result];
}

