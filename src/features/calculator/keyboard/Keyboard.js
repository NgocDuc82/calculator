import React from "react";
import "./keyboard.scss";

import { useDispatch } from "react-redux";
import {
  button_Pressed,
  button_clear,
  button_Equal,
  button_dell,
} from "../CalcuatorSlice.js";
export default function Keyboard({ HandleClickHistory }) {
  const dispatch = useDispatch();
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const operation = ["+", "-", "*", "/"];
  return (
    <div className="keyboard">
      <button onClick={() => dispatch(button_clear())}>C</button>
      <button onClick={HandleClickHistory}>H</button>
      <button onClick={() => dispatch(button_dell())}>Del</button>
      <button>.</button>
      <button className="equals" onClick={() => dispatch(button_Equal())}>
        =
      </button>
      <div className="keyboard-number">
        {number.map((number, i) => {
          return (
            <button
              onClick={(e) => dispatch(button_Pressed(e.target.value))}
              value={number}
              key={i}
            >
              {number}
            </button>
          );
        })}
      </div>
      <div className="keyboard-operation">
        {operation.map((operation, i) => {
          return (
            <button
              key={i}
              value={operation}
              onClick={(e) => dispatch(button_Pressed(e.target.value))}
            >
              {operation}
            </button>
          );
        })}
      </div>
    </div>
  );
}
