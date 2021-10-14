import React from 'react';
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState,
} from 'recoil';
import { atomClickedDate, atomYearMonth } from 'Recoil/atom';
import { selectNextMonth, selectPrevMonth } from 'Recoil/selector';
import { style } from './DateStyle';

type IDate = {
  state: string;
  today: boolean;
  clicked: boolean;
  children: number;
};

const Date: React.FC<IDate> = (props) => {
  const [year, month] = useRecoilValue(atomYearMonth);
  const [clickedDate, setClickedDate] = useRecoilState(atomClickedDate);
  const prevMonth = useSetRecoilState(selectPrevMonth);
  const nextMonth = useSetRecoilState(selectNextMonth);
  const resetClickedDate = useResetRecoilState(atomClickedDate);

  const changeClickedDate = (state: string, date: number) => {
    if (state === 'next') {
      month < 11
        ? setClickedDate({ year: year, month: month + 1, date: date })
        : setClickedDate({ year: year + 1, month: 0, date: date });
    } else if (state === 'prev') {
      month > 0
        ? setClickedDate({ year: year, month: month - 1, date: date })
        : setClickedDate({ year: year - 1, month: 11, date: date });
    } else {
      date === clickedDate.date
        ? resetClickedDate()
        : setClickedDate({ year: year, month: month, date: date });
    }
  };

  const handleClickedDate = () => {
    if (props.state === 'next') {
      nextMonth();
    } else if (props.state === 'prev') {
      prevMonth();
    }
    changeClickedDate(props.state, props.children);
  };

  return (
    <DateStyle
      state={props.state}
      today={props.today}
      clicked={props.clicked}
      onClick={handleClickedDate}
    >
      {props.children}
    </DateStyle>
  );
};

export default Date;

const { DateStyle } = style;
