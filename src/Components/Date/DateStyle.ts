import styled, { css } from 'styled-components';
import { IDateStyle } from 'Types';

const DateStyle = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
  opacity: ${(props: IDateStyle) => (props.state === 'this' ? 1 : 0.3)};
  ${(props: IDateStyle) =>
    props.clicked
      ? css`
          border: 1px solid skyblue;
          border-radius: 20px;
          background-color: skyblue;
        `
      : props.today &&
        css`
          border: 1px solid lightgrey;
          border-radius: 20px;
          background-color: lightgrey;
        `}
`;

export const style = { DateStyle };
