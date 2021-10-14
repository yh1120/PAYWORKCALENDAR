import React from 'react';
import { useRecoilValue } from 'recoil';
import { atomClickedDate, atomYearMonth } from 'Recoil/atom';
import { nextDateList, prevDateList, thisDateList } from 'Recoil/selector';
import { dayList, getDate } from 'Utils/';
import { style } from './CalendarBodyStyle';
import { Date } from 'Components';

const CalendarBody = () => {
  const prevDates = useRecoilValue(prevDateList);
  const thisDates = useRecoilValue(thisDateList);
  const nextDates = useRecoilValue(nextDateList);
  const [year, month] = useRecoilValue(atomYearMonth);
  const clickedDate = useRecoilValue(atomClickedDate);

  const validateToday = (date: number) => {
    const today = getDate();
    if (month === today.month && date === today.date && year === today.year) {
      return true;
    }
    return false;
  };

  const validateClickedDay = (date: number) => {
    if (
      date === clickedDate.date &&
      month === clickedDate.month &&
      year === clickedDate.year
    ) {
      return true;
    }
    return false;
  };

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
            <Date key={date} state="prev" today={false} clicked={false}>
              {date}
            </Date>
          ))}
        {thisDates.map((date) => (
          <Date
            key={date}
            state="this"
            today={validateToday(date)}
            clicked={validateClickedDay(date)}
          >
            {date}
          </Date>
        ))}
        {nextDates.length !== 0 &&
          nextDates.map((date) => (
            <Date key={date} state="next" today={false} clicked={false}>
              {date}
            </Date>
          ))}
      </DateList>
    </Body>
  );
};

export default CalendarBody;

const { Body, DayList, Day, DateList } = style;
