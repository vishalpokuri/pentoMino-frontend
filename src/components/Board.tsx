import Paper from "@mui/material/Paper";
import { useState, useEffect } from "react";
import i1 from "../assets/figmaBlockImages/1.png";
import i2 from "../assets/figmaBlockImages/2.png";
import i3 from "../assets/figmaBlockImages/3.png";
import i4 from "../assets/figmaBlockImages/4.png";
import i5 from "../assets/figmaBlockImages/5.png";
import i6 from "../assets/figmaBlockImages/6.png";
import i7 from "../assets/figmaBlockImages/7.png";
import i8 from "../assets/figmaBlockImages/8.png";
import i9 from "../assets/figmaBlockImages/9.png";
import i10 from "../assets/figmaBlockImages/10.png";
import Box from "@mui/material/Box";

interface BoardProps {
  date: string;
  month: string;
  day: string;
  rdVals: number[][];
  isReady: boolean;
  run: boolean;
}

const Board = ({ date, day, month, rdVals, isReady, run }: BoardProps) => {
  const [currentRandomBoard, setCurrentRandomBoard] = useState<number[]>([]);
  const [animationStep, setAnimationStep] = useState(0);
  const [showSolution, setShowSolution] = useState(false);

  const revealMap = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "1",
    5: "2",
    6: "3",
    7: "Mon",
    8: "Tue",
    9: "May",
    10: "4",
    11: "5",
    12: "6",
    13: "7",
    14: "8",
    15: "9",
    16: "Wed",
    17: " ",
    18: "Jun",
    19: "10",
    20: "11",
    21: "12",
    22: "13",
    23: "31",
    24: "15",
    25: "Thu",
    26: " ",
    27: "Jul",
    28: "16",
    29: "17",
    30: "18",
    31: "19",
    32: "20",
    33: "21",
    34: "Fri",
    35: "Sat",
    36: "Aug",
    37: "22",
    38: "23",
    39: "24",
    40: "25",
    41: "26",
    42: "27",
    43: " ",
    44: "Sun",
    45: "Sep",
    46: "Oct",
    47: "Nov",
    48: "Dec",
    49: "28",
    50: "29",
    51: "30",
    52: "14",
  };

  const imageMap = {
    1: i1,
    2: i2,
    3: i3,
    4: i4,
    5: i5,
    6: i6,
    7: i7,
    8: i8,
    9: i9,
    10: i10,
  };

  // useEffect for animation
  useEffect(() => {
    if (!run || !isReady || !rdVals || rdVals.length === 0) return;

    // Reset states
    setShowSolution(false);
    setAnimationStep(0);

    // Make sure we have data to work with
    if (rdVals[0]) {
      setCurrentRandomBoard(rdVals[0]);
    }

    // Start animation sequence
    let step = 0;
    const totalRandomBoards = rdVals.length - 1; // Last one is the solution

    const animationInterval = setInterval(() => {
      if (step < totalRandomBoards - 1) {
        // Move to next step, starting from 1 since we already set 0
        step++;
        if (rdVals[step]) {
          setCurrentRandomBoard(rdVals[step]);
          setAnimationStep(step);
        }
      } else {
        // Show the solution
        setTimeout(() => {
          setShowSolution(true);
        }, 50);
        clearInterval(animationInterval);
      }
    }, 400); // 400ms between each animation frame

    return () => clearInterval(animationInterval);
  }, [run, isReady, rdVals]);

  // Highlight indexes calculation
  const highlightIndexes = Object.entries(revealMap)
    .filter(([_index, value]) => [date, month, day].includes(String(value)))
    .map(([index]) => parseInt(index));

  return (
    <div className="my-auto">
      <Paper
        sx={{
          marginTop: "10vh",
          width: { xs: "35vw", sm: "40vw", md: "45vw" },
          aspectRatio: "3 / 2",
          backgroundColor: "#1e1e1e",
          borderRadius: 3,
          padding: 2,
          color: "#fff",
          fontSize: "1.2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginX: "auto",
        }}
        elevation={5}
      >
        <Box
          sx={{
            width: "100%",
            height: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(9, 1fr)",
            gridTemplateRows: "repeat(6, 1fr)",
            gap: 1,
          }}
        >
          {Array.from({ length: 53 }).map((_, index) => {
            const isHighlighted = highlightIndexes.includes(index);

            // During animation, show the random patterns except for highlighted cells
            if (run && isReady && !showSolution) {
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    backgroundColor: isHighlighted ? "#3b82f6" : "#292929",
                    borderRadius: 1,
                    opacity: isHighlighted ? 0.9 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      lg: "1rem",
                    },
                    fontWeight: isHighlighted ? "bold" : "normal",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="text-black tracking-widest uppercase font-base bg-transparent hover:text-white"
                >
                  {isHighlighted ? (
                    revealMap[index] || ""
                  ) : currentRandomBoard[index] !== undefined ? (
                    <img
                      src={imageMap[currentRandomBoard[index] + 1]}
                      alt={`i${currentRandomBoard[index]}`}
                      className="opacity-75"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : null}
                </Box>
              );
            } else if (run && isReady && showSolution) {
              // When solution should be shown
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    backgroundColor: isHighlighted ? "#3b82f6" : "#292929",
                    borderRadius: 1,
                    opacity: isHighlighted ? 0.9 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      lg: "1rem",
                    },
                    fontWeight: isHighlighted ? "bold" : "normal",
                    transition: "all 0.3s ease-in-out",
                  }}
                  className="text-black tracking-widest uppercase font-base bg-transparent hover:text-white"
                >
                  {isHighlighted ? (
                    revealMap[index] || ""
                  ) : rdVals[rdVals.length - 1]?.[index] !== undefined ? (
                    <img
                      src={imageMap[rdVals[rdVals.length - 1][index]]}
                      alt={`i${rdVals[rdVals.length - 1][index]}`}
                      className="opacity-75"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  ) : (
                    revealMap[index] || ""
                  )}
                </Box>
              );
            } else {
              // Initial state - show normal board with highlighted selections
              return (
                <Box
                  key={index}
                  sx={{
                    width: "100%",
                    height: "100%",
                    aspectRatio: "1",
                    backgroundColor: isHighlighted ? "#3b82f6" : "#292929",
                    borderRadius: 1,
                    opacity: isHighlighted ? 0.9 : 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "0.9rem",
                      lg: "1rem",
                    },
                    fontWeight: isHighlighted ? "bold" : "normal",
                  }}
                  className="text-black tracking-widest uppercase font-base bg-transparent hover:text-white"
                >
                  {revealMap[index] || ""}
                </Box>
              );
            }
          })}
        </Box>
      </Paper>

      {run && isReady && showSolution ? (
        <div className="text-center mt-4 text-green-500 font-bold">
          Solution found!
        </div>
      ) : (
        <div className="text-center mt-4 text-green-500 font-bold"> </div>
      )}
    </div>
  );
};

export default Board;
