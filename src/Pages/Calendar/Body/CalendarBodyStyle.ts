import styled, { css } from 'styled-components';

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const DayList = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Day = styled.div`
  width: 50px;
  height: 30px;
  text-align: center;
  color: ${(props: { day: string }) =>
    props.day === '일' ? 'red' : props.day === '토' ? 'blue' : '#000'};
`;

const DateList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Date = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  opacity: ${(props: { data: string; today: boolean }) =>
    props.data === 'this' ? 1 : 0.3};
  ${(props: { data: string; today: boolean }) =>
    props.today === true &&
    css`
      border: 1px solid lightgrey;
      border-radius: 20px;
      background-color: lightgrey;
    `}
`;

export const style = {
  Body,
  DayList,
  Day,
  DateList,
  Date,
};
