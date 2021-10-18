import React from 'react';
import { Container, LinkWrap , ImgWrapper, Text, Wrapper } from './styles/header';

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
  };

Header.ImgWrapper = function HeaderImgWrapper({ children, ...restProps }) {
    return <ImgWrapper {...restProps}>{children}</ImgWrapper>;
  };



Header.LinkWrap = function HeaderLinkWrap({ children, ...restProps }) {
  return <LinkWrap {...restProps}>{children}</LinkWrap>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
    return <Text {...restProps}>{children}</Text>;
  };
