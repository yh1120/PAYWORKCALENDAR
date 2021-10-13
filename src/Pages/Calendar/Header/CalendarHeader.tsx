import React from 'react';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { atomMonth, atomYear } from 'Recoil/atom';
import { style } from './CalendarHeaderStyle';

const CalendarHeader = () => {
  const [year, setYear] = useRecoilState(atomYear);
  const [month, setMonth] = useRecoilState(atomMonth);
  const resetYear = useResetRecoilState(atomYear);
  const resetMonth = useResetRecoilState(atomMonth);

  const resetYearMonth = () => {
    resetMonth();
    resetYear();
  };

  const handlePrevMonth = () => {
    if (month > 0) {
      setMonth((prev) => prev - 1);
    } else {
      setYear((prev) => prev - 1);
      setMonth(11);
    }
  };
  const handleNextMonth = () => {
    if (month < 11) {
      setMonth((prev) => prev + 1);
    } else {
      setYear((prev) => prev + 1);
      setMonth(0);
    }
  };
  const handleThisMonth = () => {
    resetYearMonth();
  };

  return (
    <Header>
      <YearMonth>
        <p>{`${year}. ${month < 9 ? `0${month + 1}` : month + 1}`}</p>
      </YearMonth>
      <ButtonContainer>
        <Button onClick={handlePrevMonth}>
          <ArrowLeft />
        </Button>
        <Button onClick={handleNextMonth}>
          <ArrowRight />
        </Button>
        <Button onClick={handleThisMonth}>
          <ThisMonth>이번달</ThisMonth>
        </Button>
      </ButtonContainer>
    </Header>
  );
};

export default CalendarHeader;

const {
  Header,
  YearMonth,
  ButtonContainer,
  Button,
  ArrowLeft,
  ArrowRight,
  ThisMonth,
} = style;
