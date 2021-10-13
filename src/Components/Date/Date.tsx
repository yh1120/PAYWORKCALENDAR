import React from 'react';
import { useSetRecoilState } from 'recoil';
import { selectNextMonth, selectPrevMonth } from 'Recoil/selector';
import { style } from './DateStyle';

type IDate = {
  state: string;
  today: boolean;
  children: number;
};

const Date: React.FC<IDate> = (props) => {
  const prevMonth = useSetRecoilState(selectPrevMonth);
  const nextMonth = useSetRecoilState(selectNextMonth);

  const handleClickedDate = () => {
    // setClickedDate();
    if (props.state === 'next') {
      nextMonth();
    } else if (props.state === 'prev') {
      prevMonth();
    }
  };
  return (
    <DateStyle
      state={props.state}
      today={props.today}
      onClick={handleClickedDate}
    >
      {props.children}
    </DateStyle>
  );
};

export default Date;

const { DateStyle } = style;
