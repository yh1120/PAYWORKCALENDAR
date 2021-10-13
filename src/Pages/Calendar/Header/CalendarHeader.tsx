import React from 'react';
import { Button } from 'Components';
import { useRecoilValue } from 'recoil';
import { atomMonth, atomYear } from 'Recoil/atom';
import { style } from './CalendarHeaderStyle';

const CalendarHeader = () => {
  const month = useRecoilValue(atomMonth);
  const year = useRecoilValue(atomYear);

  return (
    <Header>
      <YearMonth>
        <p>{`${year}. ${month < 9 ? `0${month + 1}` : month + 1}`}</p>
      </YearMonth>
      <ButtonContainer>
        <Button state="prev">
          <ArrowLeft />
        </Button>
        <Button state="next">
          <ArrowRight />
        </Button>
        <Button state="thisMonth">
          <ThisMonth>이번달</ThisMonth>
        </Button>
      </ButtonContainer>
    </Header>
  );
};

export default CalendarHeader;

const { Header, YearMonth, ButtonContainer, ArrowLeft, ArrowRight, ThisMonth } =
  style;
