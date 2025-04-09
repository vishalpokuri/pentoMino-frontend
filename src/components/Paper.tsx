import Paper from "@mui/material/Paper";

import i2 from "../assets/blockImages/2.png";
import i3 from "../assets/blockImages/3.png";
import i4 from "../assets/blockImages/4.png";
import i5 from "../assets/blockImages/5.png";
import i6 from "../assets/blockImages/6.png";
import i7 from "../assets/blockImages/7.png";
import i8 from "../assets/blockImages/8.png";
import i9 from "../assets/blockImages/9.png";
import i10 from "../assets/blockImages/10.png";
import i1 from "../assets/blockImages/i1.png";
import Box from "@mui/material/Box";
const Board = () => {
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
  
  const randomizer = Array.from({ length: 54 }, () => Math.floor(Math.random() * 9));

  return (
    <div>
      <Paper
        sx={{
          marginTop: "10vh",
          width: { xs: "35vw", sm: "45vw", md: "50vw" },
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
        {randomizer.map((num, i) => (
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
          ))}
        </Box>
      </Paper>
    </div>
  );
};

export default Board;
