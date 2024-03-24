import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { CalendarGlobalStyles } from './CustomDatePicker.styled';

export const CustomDataPicker = ({ customInput, setSelectedDatea }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <>
      <DatePicker
        wrapperClassName="datePicker peer"
        selected={selectedDate}
        onChange={date => {
          setSelectedDate(date);
          setSelectedDatea(date);
        }}
        minDate={new Date()}
        customInput={customInput}
        dateFormat={'dd.MM.yyyy'}
        calendarStartDay={1}
      />
      <CalendarGlobalStyles />
    </>
  );
};
