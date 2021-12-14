import React from 'react';
import styled from 'styled-components';

interface IProps {
  count: number;
}

const Container = styled.span<{ isBlue: boolean }>`
  color: ${(props) => (props.isBlue ? props.theme.blueColor : 'black')};
`;

const Number = ({ count }: IProps) => (
  <Container isBlue={count > 5}>{count}</Container>
);

export default Number;
