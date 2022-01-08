import React from "react";
import "./BlockApp.css";
import Blocks from "./Blocks";
import { useSelector, useDispatch } from "react-redux";

function LudoContainer() {
  const red = useSelector((state) => state.red);
  const blue = useSelector((state) => state.blue);
  const green = useSelector((state) => state.green);
  const hold = useSelector((state) => state.hold);
  const dispatch = useDispatch();

  const pushBlock = (props) => {
    if (props.length > 0) {
      if (props === "red") {
        red.shift();
        hold.unshift("red");
        console.log(hold);
        dispatch({ type: "RED_Push", payload: { color: red, stack: hold } });
      }
      if (props === "green") {
        green.shift();
        hold.unshift("green");
        dispatch({
          type: "GREEN_Push",
          payload: { color: green, stack: hold },
        });
      }
      if (props === "blue") {
        blue.shift();
        hold.unshift("blue");
        dispatch({ type: "BLUE_Push", payload: { color: blue, stack: hold } });
      }
    } else alert("Invalid Action");
  };

  const popBlock = (props) => {
    if (hold[0] === props) {
      if (props === "red") {
        hold.shift();
        red.unshift(red.length + 1);
        dispatch({ type: "RED_Pop", payload: { color: red, stack: hold } });
      }
      if (props === "blue") {
        hold.shift();
        blue.unshift(blue.length + 1);
        dispatch({ type: "BLUE_Pop", payload: { color: blue, stack: hold } });
      }
      if (props === "green") {
        hold.shift();
        green.unshift(green.length + 1);
        dispatch({ type: "GREEN_Pop", payload: { color: green, stack: hold } });
      }
    } else alert("Invalid Action");
  };

  console.log(useSelector((state) => state));

  return (
    <div className="container">
      <div className="blocks">
        <h1 style={{ color: "red" }}>RED</h1>
        {red.map((num, index) => {
          return <Blocks color={"red"} key={index} id={index} />;
        })}
        <div className="btn">
          <button onClick={() => pushBlock("red")}>+</button>
          <button onClick={() => popBlock("red")}>-</button>
        </div>
      </div>

      <div className="blocks">
        <h1 style={{ color: "blue" }}>BLUE</h1>
        {blue.map((num, index) => {
          return <Blocks color={"blue"} key={index} id={index} />;
        })}
        <div className="btn">
          <button onClick={() => pushBlock("blue")}>+</button>
          <button onClick={() => popBlock("blue")}>-</button>
        </div>
      </div>

      <div className="blocks">
        <h1 style={{ color: "green" }}>GREEN</h1>
        {green.map((num, index) => {
          return <Blocks color={"green"} key={index} id={index} />;
        })}
        <div className="btn">
          <button onClick={() => pushBlock("green")}>+</button>
          <button onClick={() => popBlock("green")}>-</button>
        </div>
      </div>

      <div className="blocks">
        <h1>STACK</h1>
        {hold.map((color, index) => {
          return <Blocks color={color} key={index} id={index} />;
        })}
      </div>
    </div>
  );
}

export default LudoContainer;
