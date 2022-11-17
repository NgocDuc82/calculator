import React from "react";
import "./keyboard.scss";

import { useDispatch } from "react-redux";
import {
  button_Pressed,
  button_clear,
  button_Equal,
  button_dell
} from "../CalcuatorSlice.js";
export default function Keyboard({ HandleClickHistory}) {
  const dispatch = useDispatch();
  return (
    <div className="keyboard">
      <button onClick={() => dispatch(button_clear())}>C</button>
      <button onClick={HandleClickHistory}>H</button>
      <button onClick={() => dispatch(button_dell())}>Del</button>
      <button onClick={() => dispatch(button_Pressed("/"))}>/</button>
      <button onClick={() => dispatch(button_Pressed(7))}>7</button>
      <button onClick={() => dispatch(button_Pressed(8))}>8</button>
      <button onClick={() => dispatch(button_Pressed(9))}>9</button>
      <button onClick={() => dispatch(button_Pressed("*"))}>*</button>
      <button onClick={() => dispatch(button_Pressed(4))}>4</button>
      <button onClick={() => dispatch(button_Pressed(5))}>5</button>
      <button onClick={() => dispatch(button_Pressed(6))}>6</button>
      <button onClick={() => dispatch(button_Pressed("-"))}>-</button>
      <button onClick={() => dispatch(button_Pressed(1))}>1</button>
      <button onClick={() => dispatch(button_Pressed(2))}>2</button>
      <button onClick={() => dispatch(button_Pressed(3))}>3</button>
      <button onClick={() => dispatch(button_Pressed("+"))}>+</button>
      <button onClick={() => dispatch(button_Pressed(0))}>0</button>
      <button>.</button>
      <button className="equals" onClick={() => dispatch(button_Equal())}>
        =
      </button>
    </div>
  );
}
