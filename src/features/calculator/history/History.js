import React from "react";
import "./history.scss";
import { useSelector } from "react-redux";

export default function History({ toggleHis }) {
  const value = useSelector((state) => state.calculatorSlice.history);
  console.log(value);
  return (
    <div className={toggleHis ? "history" : "history none"}>
      {value.map((value, index) => {
        return (
            <ul key={index}>
                    <li>{value}</li>
            </ul>
        )
      }) }
    </div>
  );
}
