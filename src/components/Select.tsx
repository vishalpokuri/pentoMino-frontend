import React from "react";
import { DropdownButton } from "./DropdownButton";
import Run from "./Run";
type Setter = React.Dispatch<React.SetStateAction<string>>;
type SetterA = React.Dispatch<React.SetStateAction<number[][]>>;

interface BasicSelectProps {
  date: string;
  day: string;
  month: string;
  setDay: Setter;
  setMonth: Setter;
  setDate: Setter;
  setSol: SetterA;
  setRun: () => void;
  isFormComplete: boolean;
}

export default function BasicSelect({
  date,
  setDate,
  month,
  setMonth,
  day,
  setDay,
  isFormComplete,
  setRun,
  setSol,
}: BasicSelectProps) {
  const runnerFn = async () => {
    const response = await fetch(
      "https://pentomino-backend-production.up.railway.app/solve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // This requires the body to be a JSON string
        },
        body: JSON.stringify({
          // Convert your object to a JSON string
          month: month,
          day: date, // This should match what your backend expects
          weekday: day, // Your backend expects "weekday" not "day"
        }),
      }
    );
    const data = await response.json();
    if (data.status == "success") {
      setSol(data.solution.board);
    }
  };

  return (
    <div className="flex flex-wrap my-auto gap-6 py-4 flex-col">
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
      <Run
        runnerFn={runnerFn}
        setRun={setRun}
        isFormComplete={isFormComplete}
      />
    </div>
  );
}
