import React from "react";
import { DropdownButton } from "./DropdownButton";

export default function CustomSelectGroup() {
  const [date, setDate] = React.useState("");
  const [month, setMonth] = React.useState("");
  const [day, setDay] = React.useState("");

  return (
    <div className="flex flex-wrap my-auto gap-6 py-10 flex-col">
      <DropdownButton
        label="Date"
        value={date}
        onChange={setDate}
        options={Array.from({ length: 31 }, (_, i) => String(i + 1))}
      />
      <DropdownButton
        label="Month"
        value={month}
        onChange={setMonth}
        options={[
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
        ]}
      />
      <DropdownButton
        label="Day"
        value={day}
        onChange={setDay}
        options={["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]}
      />
    </div>
  );
}
