import "./App.css";
import { useState } from "react";
import { Background } from "./components/Background";
// import Footer from "./components/Footer";
import Board from "./components/Board";
import BasicSelect from "./components/Select";

function App() {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  return (
    <div className="relative w-screen min-h-screen">
      <Background />
      <div className="relative z-10 flex flex-row justify-around my-auto h-screen">
        <BasicSelect
          date={date}
          setDate={setDate}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
        />
        <Board date={date} month={month} day={day} />
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;

//define structure
/*
Initially the board should show the text on it
When you choose the items from the dropdown, fix it with highlighting with some low opacity blue

When run button clicked - random(5-8) times show random blocks on it;
9th time - Show result with showing a model solution found. 



*/
