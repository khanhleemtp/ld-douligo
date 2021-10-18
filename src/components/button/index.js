import React from 'react';
import { Container, Check, Ignore, Logout } from './styles/button';

export default function Button({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

 Button.Check = function ButtonCheck({ children, ...restProps }) {
  return <Check {...restProps}>{children}</Check>;
}

Button.Ignore = function ButtonIgnore({ children, ...restProps }) {
  return <Ignore {...restProps}>{children}</Ignore>;
}

Button.Logout = function ButtonLogout({ children, ...restProps }) {
  return <Logout {...restProps}>{children}</Logout>;
}