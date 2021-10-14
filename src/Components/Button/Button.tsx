import React from 'react';
import { useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  selectNextMonth,
  selectPrevMonth,
  selectResetMonth,
} from 'Recoil/selector';
import { IButton } from 'Types';
import { style } from './ButtonStyle';

const Button: React.FC<IButton> = (props) => {
  const state = props.state;
  const prevMonth = useSetRecoilState(selectPrevMonth);
  const nextMonth = useSetRecoilState(selectNextMonth);
  const resetMonth = useResetRecoilState(selectResetMonth);

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
