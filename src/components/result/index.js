import React from 'react';
import { Container, ButtonNext, Wrapper, Title, Text } from './styles/result';

export default function Result({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Result.Wrapper = function ResultWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
  };

Result.Title = function ResultTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  };

Result.Text = function ResultText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };


Result.ButtonNext = function ResultButtonNext({ children, ...restProps }) {
  return <ButtonNext {...restProps}>{children}</ButtonNext>;
};
