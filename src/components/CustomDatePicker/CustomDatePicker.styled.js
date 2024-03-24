import { createGlobalStyle } from 'styled-components';
// import 'react-datepicker/dist/react-datepicker.css-cssmodules.css';

export const CalendarGlobalStyles = createGlobalStyle`
.react-datepicker__wrapper {
    position: relative;

  }
  .react-datepicker {
    position: reletive;
    left: 0;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 325px;
    height: 273px;
    padding: 16px;
    background-color:  #fff;
    font-family: "Inter", sans-serif;;
    border-radius: 12px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
    width: 100%;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #fff;
    
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 1px solid rgb(174 174 174 / 0%);

    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: "Inter", sans-serif;
    font-size: 16px;
    line-height: 1.2;
    font-style: normal;
    font-weight: 600;
    text-align: center;
    color: #101828;
    margin-bottom: 20px;

  }
  .react-datepicker__day-name {
    text-transform: uppercase;
    margin: 0;
    font-family: "Inter", sans-serif;;
    font-size: 12px;
    line-height: 1.2;
    font-style: normal;
    font-weight: 600;
    color: #475467;
    text-align: center;
  }
  .react-datepicker__navigation {
    margin-top: 19px;
    color: #101828;
  }
  .react-datepicker__navigation--previous {
    top: -2px;
    left: 14px;
    width: 22px;
    height: 22px;
    color: #101828;
  }
  .react-datepicker__navigation--next {
    right: 14px;
    top: -2px;
    width: 22px;
    height: 22px;
    color: #101828;
  }
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    color:  #101828;
    font-family: "Inter", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 1.2;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 11px;
    flex-direction: column;
    justify-content: space-between;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color: #040404;
    color:  #efede8;
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color: #040404;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color: #040404;
    color:  #efede8;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 50%;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .react-datepicker__day-names {
    padding: 0;
  }
`;
