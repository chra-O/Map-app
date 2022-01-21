import "./App.css";
import Map from "./Map";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
function App() {
  return (
    <div className="App">
      <header className="App-header"> <Map/></header>
    </div>
  );
}

export default App;
