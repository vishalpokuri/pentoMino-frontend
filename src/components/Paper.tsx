import Paper from "@mui/material/Paper";
import darkBlueBlock from "../assets/blockImages/darkblueBlock.png";
import Box from "@mui/material/Box";
const Board = () => {
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
          {Array.from({ length: 54 }).map((_, i) => (
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
                fontSize: "1rem",
              }}
            >
              <img src={darkBlueBlock} className="opacity-75" />
            </Box>
          ))}
        </Box>
      </Paper>
    </div>
  );
};

export default Board;
