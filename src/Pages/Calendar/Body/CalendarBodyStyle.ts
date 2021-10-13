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
  text-align: center;

  /* ${(props: { day: string }) => css`
  color: ${props.day} === "일" ? red: blue;
`} */
`;

const DateList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
`;

const Date = styled.div`
  width: 50px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  cursor: pointer;
  ${(props: { color: string }) => css`
    color: ${props.color};
  `}
`;

export const style = {
  Body,
  DayList,
  Day,
  DateList,
  Date,
};
