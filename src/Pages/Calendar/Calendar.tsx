import React from 'react';
import CalendarHeader from './Header/CalendarHeader';
import CalendarBody from './Body/CalendarBody';
import { style } from './CalendarStyle';

const Calender: React.FC = () => {
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
