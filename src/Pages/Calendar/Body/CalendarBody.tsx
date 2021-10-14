import React from 'react';
import { useRecoilValue } from 'recoil';
import { atomClickedDate, atomYearMonth } from 'Recoil/atom';
import { nextDateList, prevDateList, thisDateList } from 'Recoil/selector';
import { DAY_LIST, getDate } from 'Utils/';
import { Date } from 'Components';
import { style } from './CalendarBodyStyle';

const CalendarBody = () => {
  const [year, month] = useRecoilValue(atomYearMonth);
  const clickedDate = useRecoilValue(atomClickedDate);
  const prevDates = useRecoilValue(prevDateList);
  const thisDates = useRecoilValue(thisDateList);
  const nextDates = useRecoilValue(nextDateList);

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
        {DAY_LIST.map((day, idx) => (
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
