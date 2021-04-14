import Calendar from "react-calendar";
import { useState, useEffect } from "react";

const DatePicker = ({ gamesOnCurrentDate, getGamesForCurrentDate }) => {
  return (
    <div style={{ width: "300px", heigth: "300px" }}>
      <Calendar
        value={gamesOnCurrentDate}
        onClickDay={getGamesForCurrentDate}
      />
    </div>
  );
};

export default DatePicker;
