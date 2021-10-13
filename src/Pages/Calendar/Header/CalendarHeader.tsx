import React from 'react';
import { getDate } from 'Utils';
import { style } from './CalendarHeaderStyle';

const CalendarHeader = () => {
  const year = getDate().year;
  const month = getDate().month;

  const handlePrevMonth = () => {
    console.log('handlePrevMonth');
  };
  const handleNextMonth = () => {
    console.log('handleNextMonth');
  };
  const handleThisMonth = () => {
    console.log('handleThisMonth');
  };
  return (
    <Header>
      <YearMonth>
        <p>{`${year}. ${month}`}</p>
      </YearMonth>
      <ButtonContainer>
        <Button>
          <ArrowLeft onClick={handlePrevMonth} />
        </Button>
        <Button>
          <ArrowRight onClick={handleNextMonth} />
        </Button>
        <Button>
          <ThisMonth onClick={handleThisMonth}>이번달</ThisMonth>
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
