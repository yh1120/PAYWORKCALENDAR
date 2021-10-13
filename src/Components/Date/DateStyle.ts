import styled, { css } from 'styled-components';

const DateStyle = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  opacity: ${(props: { state: string; today: boolean }) =>
    props.state === 'this' ? 1 : 0.3};
  ${(props: { state: string; today: boolean }) =>
    props.today === true &&
    css`
      border: 1px solid lightgrey;
      border-radius: 20px;
      background-color: lightgrey;
    `}
`;

export const style = { DateStyle };
