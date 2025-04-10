import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Background } from "./components/Background";
// import Footer from "./components/Footer";
import Board from "./components/Board";
import BasicSelect from "./components/Select";

function App() {
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [sol, setSol] = useState<number[][]>([]);
  //this is just a toggler to trigger useEffect
  const [run, setRun] = useState(false);
  const [isReady, setIsReady] = useState(false);

  //take a randomiser function,
  const randomizerValuesRef = useRef<number[][]>([]);

  useEffect(() => {
    if (!run) return;

    const temp: number[][] = [];

    // Generate 4–8 random boards
    const rand = Math.floor(Math.random() * 5) + 5;
    for (let i = 0; i < rand; i++) {
      const randomizer = Array.from({ length: 53 }, () =>
        Math.floor(Math.random() * 10)
      );
      temp.push(randomizer);
    }

    // Convert the final board (sol) to 1D and push as final board
    const answer: number[] = [];
    for (let i = 0; i < sol.length; i++) {
      for (let j = 0; j < sol[0].length; j++) {
        answer.push(sol[i][j]);
      }
    }
    temp.push(answer);

    // Save to ref
    randomizerValuesRef.current = temp;
    setIsReady(true); // optional: to signal UI it's ready
  }, [run]);

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
          setSol={setSol}
          setRun={setRun}
        />

        <Board
          date={date}
          month={month}
          day={day}
          rdVals={randomizerValuesRef.current}
          isReady={isReady}
          run={run}
        />
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
