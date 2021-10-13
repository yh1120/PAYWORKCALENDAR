import styled, { css } from 'styled-components';

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Inner = styled.div`
  width: 430px;
  height: 460px;
  border: 1px solid rgba(29, 28, 29, 0.13);
  border-radius: 15px;
`;

const InnerContainer = styled.div`
  margin: 20px 30px;
`;

export const style = {
  Container,
  Inner,
  InnerContainer,
};
