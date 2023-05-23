import "./App.css";
import EightBall from "./EightBall";
import messages from "./data";

function App() {
  return (
    <div className="App">
      <EightBall answers={messages} />
    </div>
  );
}

export default App;
