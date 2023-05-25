import First from "./Components/First";
import Second from "./Components/Second";
import Third from "./Components/Third";
import "./App.css";
function App() {
  let text = "THIS IS TEXT";
  let num = 123;

  const user = {
    name: "Amal",
    age: 25,
  };

  const clickHandler = () => {
    alert("Hello there");
  };

  return (
    <div className="flex">
      <First text={text} num={num} />
      <Second userInfo={user} />
      <Third tap={clickHandler} />
    </div>
  );
}

export default App;
