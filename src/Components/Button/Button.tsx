import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  selectNextMonth,
  selectPrevMonth,
  selectResetMonth,
} from 'Recoil/selector';
import { style } from './ButtonStyle';

type IButton = {
  state: string;
  children: React.ReactNode;
};

const Button: React.FC<IButton> = (props) => {
  const prevMonth = useSetRecoilState(selectPrevMonth);
  const nextMonth = useSetRecoilState(selectNextMonth);
  const resetMonth = useResetRecoilState(selectResetMonth);
  const state = props.state;

  const handleMoveMonth = () => {
    if (state === 'prev') {
      prevMonth();
    } else if (state === 'next') {
      nextMonth();
    } else {
      resetMonth();
    }
  };
  return <ButtonStyle onClick={handleMoveMonth}>{props.children}</ButtonStyle>;
};

export default Button;

const { ButtonStyle } = style;
