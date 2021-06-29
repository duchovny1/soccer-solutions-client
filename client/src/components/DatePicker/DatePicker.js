import Calendar from "react-calendar";
import styled from "styled-components";
import HeaderTable from "../../components/Common/HeaderTable";

const DatePicker = ({ gamesOnCurrentDate, getGamesForCurrentDate }) => {
  const StyledCalender = styled.div`
    position: relative;
    left: -200px;
  `;
  return (
    <StyledCalender style={{ width: "300px", heigth: "300px" }}>
      <HeaderTable title="Date Picker" />
      <Calendar
        value={gamesOnCurrentDate}
        onClickDay={getGamesForCurrentDate}
      />
    </StyledCalender>
  );
};

export default DatePicker;
