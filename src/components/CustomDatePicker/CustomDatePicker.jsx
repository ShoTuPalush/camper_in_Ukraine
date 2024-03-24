import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { CalendarGlobalStyles } from './CustomDatePicker.styled';

export const CustomDataPicker = ({
  customInput,
  selectedDate,
  setSelectedDate,
}) => {
  //   const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <DatePicker
        wrapperClassName="datePicker peer"
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
        }}
        customInput={customInput}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};
