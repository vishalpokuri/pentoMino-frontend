import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function BasicSelect() {
  const [date, setDate] = React.useState("");
  const [day, setDay] = React.useState("");
  const [month, setMonth] = React.useState("");
  const dropdownSx = {
    minWidth: 120,
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#fff", // default border
      },
      "&:hover fieldset": {
        borderColor: "#ddd", // on hover
      },

      "& .MuiSelect-icon": {
        color: "#fff", // dropdown arrow color
      },
    },
  };

  const handleChangeDate = (event: SelectChangeEvent) => {
    setDate(event.target.value as string);
  };
  const handleChangeDay = (event: SelectChangeEvent) => {
    setDay(event.target.value as string);
  };
  const handleChangeMonth = (event: SelectChangeEvent) => {
    setMonth(event.target.value as string);
  };

  return (
    <div className="flex flex-row justify-between mx-auto w-[40vw]">
      <Box sx={dropdownSx}>
        <FormControl fullWidth>
          <InputLabel sx={{ color: "#fff" }} id="demo-simple-select-label1">
            Date
          </InputLabel>
          <Select
            sx={{ color: "#fff" }}
            labelId="demo-simple-select-label1"
            id="demo-simple-select1"
            value={date}
            label="Date"
            onChange={handleChangeDate}
          >
            {Array.from({ length: 31 }, (_, i) => (
              <MenuItem key={i + 1} value={String(i + 1)}>
                {i + 1}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={dropdownSx}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label2" sx={{ color: "#fff" }}>
            Month
          </InputLabel>
          <Select
            sx={{ color: "#fff" }}
            labelId="demo-simple-select-label2"
            id="demo-simple-select2"
            value={month}
            label="Month"
            onChange={handleChangeMonth}
          >
            {[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ].map((month) => (
              <MenuItem key={month} value={month}>
                {month}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={dropdownSx}>
        <FormControl fullWidth>
          <InputLabel sx={{ color: "#fff" }} id="demo-simple-select-label3">
            Day
          </InputLabel>
          <Select
            sx={{ color: "#fff", borderColor: "#fff" }}
            labelId="demo-simple-select-label3"
            id="demo-simple-select3"
            value={day}
            label="Day"
            onChange={handleChangeDay}
          >
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <MenuItem key={day} value={day}>
                {day}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
