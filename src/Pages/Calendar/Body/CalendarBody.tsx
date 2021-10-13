import React from 'react';
import { isTemplateExpression } from 'typescript';
import { dayList, getPrevDate, getThisDate, getNextDate } from 'Utils/';
import { style } from './CalendarBodyStyle';

const CalendarBody = () => {
  const prevDates = getPrevDate();
  const thisDates = getThisDate();
  const nextDates = getNextDate();

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
          prevDates.map((date) => <Date color="#ccc">{date}</Date>)}
        {thisDates.map((date) => (
          <Date color="#333">{date}</Date>
        ))}
        {nextDates.length !== 0 &&
          nextDates.map((date) => <Date color="#ccc">{date}</Date>)}
      </DateList>
    </Body>
  );
};

export default CalendarBody;

const { Body, DayList, Day, DateList, Date } = style;
