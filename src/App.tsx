import "./App.css";
import { useEffect, useState, useRef } from "react";
import { Background } from "./components/Background";
import Board from "./components/Board";
import BasicSelect from "./components/Select";
import Toast from "./components/Toast";
import Footer from "./components/Footer";
import NotionIcon, { NotionButton } from "./components/Notion";

function App() {
  const [openToast, setOpenToast] = useState(false);
  const [toastMessage, setToastMessage] = useState(
    "Please select all values before running"
  );
  const [date, setDate] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [sol, setSol] = useState<number[][]>([]);
  //this is just a toggler to trigger useEffect
  const [run, setRun] = useState(false);
  const [isReady, setIsReady] = useState(false);

  //take a randomiser function,
  const randomizerValuesRef = useRef<number[][]>([]);

  // Reset state when dropdown values change
  useEffect(() => {
    // Reset the board state when selection changes
    setRun(false);
    setIsReady(false);
    randomizerValuesRef.current = [];
    setSol([]);
  }, [date, month, day]);

  useEffect(() => {
    if (!run) return;

    // Check if solution exists
    if (!sol || sol.length === 0 || !sol[0] || sol[0].length === 0) {
      setToastMessage("No solution available. Please try different values.");
      // setOpenToast(true);
      // setRun(false);
      return;
    }

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

    randomizerValuesRef.current = temp;
    setIsReady(true);
  }, [run, sol]);

  const handleRunClick = async () => {
    if (date === "" || month === "" || day === "") {
      setToastMessage("Please select all values before running");
      setOpenToast(true);
      return;
    }

    setRun(true);
  };

  return (
    <div className="flex flex-col min-h-screen relative">
      <Background />
      <NotionButton />

      <div className="w-full flex justify-center items-center mt-6">
        <div className="bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl">
          Calendar Puzzle Solver
        </div>
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-6 px-4 py-6 lg:mx-48 flex-grow">
        <BasicSelect
          date={date}
          setDate={setDate}
          month={month}
          setMonth={setMonth}
          day={day}
          setDay={setDay}
          setSol={setSol}
          setRun={handleRunClick}
          isFormComplete={date !== "" && month !== "" && day !== ""}
        />

        <Board
          date={date}
          month={month}
          day={day}
          rdVals={randomizerValuesRef.current}
          isReady={isReady}
          run={run}
        />
        <Toast open={openToast} setOpen={setOpenToast} message={toastMessage} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
