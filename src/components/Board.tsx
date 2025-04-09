import Paper from "@mui/material/Paper";

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
const Board = ({ date, day, month }) => {
  // Convert values to string for reliable comparison

  const revealMap = {
    0: "Jan",
    1: "Feb",
    2: "Apr",
    3: "Mar",
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
    0: i1,
    1: i2,
    2: i3,
    3: i4,
    4: i5,
    5: i6,
    6: i7,
    7: i8,
    8: i9,
    9: i10,
  };
  //gives the highlighted indexes list

  const highlightIndexes = Object.entries(revealMap)
    .filter(([index, value]) => [date, month, day].includes(String(value)))
    .map(([index]) => parseInt(index));

  const randomizer = Array.from({ length: 53 }, () =>
    Math.floor(Math.random() * 9)
  );

  return (
    <div className="my-auto">
      <Paper
        sx={{
          marginTop: "10vh",
          width: { xs: "35vw", sm: "40vw", md: "45vw" },
          aspectRatio: "3 / 2", // Optional: Makes the card itself nicely proportioned
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
          {/* {randomizer.map((num, i) => (
            <Box
              key={i}
              sx={{
                width: "100%",
                height: "100%",
                aspectRatio: "1",
                backgroundColor: "#292929",
                borderRadius: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={imageMap[num]} // make sure these images exist
                alt={`i${num}`}
                className="opacity-75"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain", // Keeps aspect ratio of the image
                }}
              />
            </Box>
          ))} */}
          {Array.from({ length: 53 }).map((_, index) => {
            const isHighlighted = highlightIndexes.includes(index);
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
                    md: "1rem",
                    lg: "1.1rem",
                  },
                  fontWeight: isHighlighted ? "bold" : "normal",
                }}
                className=" text-black tracking-widest uppercase font-base bg-transparent hover:text-white   "
              >
                {revealMap.hasOwnProperty(index)
                  ? revealMap[index] // Show "Jan", "Feb", etc.
                  : ""}
              </Box>
            );
          })}
        </Box>
      </Paper>
    </div>
  );
};

export default Board;
