import React from 'react';
import { style } from './CalendarStyle';
import CalendarHeader from './Header/CalendarHeader';
import CalendarBody from './Body/CalendarBody';

const Calender = () => {
  return (
    <Container>
      <Inner>
        <InnerContainer>
          <CalendarHeader />
          <CalendarBody />
        </InnerContainer>
      </Inner>
    </Container>
  );
};

export default Calender;

const { Container, Inner, InnerContainer } = style;
