import { useState } from "react";
import Display from "./display/Display";
import Keyboard from "./keyboard/Keyboard";
import History from "./history/History";
import "./Calculator.scss";
import { useSelector } from "react-redux";


export default function Calculator() {
  const [toggleHis, setToggleHis] = useState(false)
  const HandleClickHistory = () => {
    setToggleHis(!toggleHis)
  }
  return (
    <div className="wrapper">
      <div className="calculator">
        <Display />
        <Keyboard HandleClickHistory={HandleClickHistory}  />
        <History  toggleHis={toggleHis} />
      </div>
    </div>
  );
}
