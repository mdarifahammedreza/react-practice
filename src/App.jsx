import "./App.css";
import Counter from "./counter";
import "./like.css";
function App() {
  function handleClick() {
    alert("button click fghfh fgdf ");
  }
  function handleClick() {
    alert("button click");
  }
  return (
    <div className="box">
      <h3>First react practice</h3>
      <button onClick={handleClick}>Click me</button>
      <Counter></Counter>
    </div>
  );
}

export default App;
