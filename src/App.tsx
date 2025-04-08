import "./App.css";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import BasicSelect from "./components/Select";

function App() {
  return (
    <>
      <BasicSelect />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 128,
            height: 128,
          },
        }}
      >
        <Paper elevation={0} />
        <Paper />
        <Paper elevation={3} />
      </Box>
    </>
  );
}

export default App;
