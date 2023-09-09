import { useState } from "react";
import "./like.css";
export default function Counter() {
  const [count, setCounter] = useState(0);
  function handeler() {
    const newcount = count + 1;
    setCounter(newcount);
  }
  let myStyle;
  if (count % 2 === 0) {
    myStyle = {
      color: "white",
      border: "2px solid indianred",
      margin: "15px",

      backgroundColor: "indigo",
      padding: "15px",
      borderRadius: "10px",
    };
  } else {
    myStyle = {
      color: "indigo",
      border: "2px solid indianred",
      margin: "15px",
      borderRadius: "10px",
      padding: "15px",
      backgroundColor: "lightgray",
    };
  }
  const handelerDislike = () => {
    const newcount = count - 1;
    setCounter(newcount);
  };
  return (
    <div className="box">
      <h3 style={myStyle}>Total Like :{count}</h3>
      <button onClick={handeler}>Like</button>
      <br />
      <br />
      <button onClick={handelerDislike}>DisLike</button>
    </div>
  );
}
