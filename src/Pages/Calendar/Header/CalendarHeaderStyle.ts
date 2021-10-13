import styled from 'styled-components';

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px;
`;

const YearMonth = styled.div`
  display: flex;
  align-items: center;
  p {
    font-size: 1.3rem;
    font-weight: 700;
    line-height: 21px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 0.5rem 0.3rem;
  padding: 0.5rem;
  align-items: center;
  cursor: pointer;
`;

const ArrowLeft = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
`;

const ArrowRight = styled.i`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
`;

const ThisMonth = styled.div`
  padding: 0 7px;
  line-height: 19px;
  font-size: 1rem;
`;

export const style = {
  Header,
  YearMonth,
  ButtonContainer,
  Button,
  ArrowLeft,
  ArrowRight,
  ThisMonth,
};
