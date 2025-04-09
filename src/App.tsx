import "./App.css";
import { Background } from "./components/Background";
// import Footer from "./components/Footer";
import Board from "./components/Paper";
import BasicSelect from "./components/Select";

function App() {
  return (
    <div className="relative w-screen min-h-screen">
      <Background />
      <div className="relative z-10 flex flex-row justify-around my-auto h-screen">
        <BasicSelect />
        <Board />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
