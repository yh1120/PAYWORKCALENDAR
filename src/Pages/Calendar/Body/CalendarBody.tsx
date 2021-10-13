import React from 'react';
import { dayList, getPrevDates, getThisDates, getNextDates } from 'Utils/';
import { style } from './CalendarBodyStyle';

const CalendarBody = () => {
  const prevDates = getPrevDates();
  const thisDates = getThisDates();
  const nextDates = getNextDates();

  return (
    <Body>
      <DayList>
        {dayList.map((day, idx) => (
          <Day key={idx} day={day}>
            {day}
          </Day>
        ))}
      </DayList>
      <DateList>
        {prevDates.length !== 0 &&
          prevDates.map((date) => (
            <Date color="#ccc" key={date}>
              {date}
            </Date>
          ))}
        {thisDates.map((date) => (
          <Date color="#333" key={date}>
            {date}
          </Date>
        ))}
        {nextDates.length !== 0 &&
          nextDates.map((date) => (
            <Date color="#ccc" key={date}>
              {date}
            </Date>
          ))}
      </DateList>
    </Body>
  );
};

export default CalendarBody;

const { Body, DayList, Day, DateList, Date } = style;
