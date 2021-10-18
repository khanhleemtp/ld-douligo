import React from 'react';
import { Container, Title, Wrapper, Image, ModalWrapper, ModalButton, ModalTitle, Overlay, SuperContainer, ChildContainer, LinkWrap } from './styles/egg';

export default function Egg({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Egg.SuperContainer = function EggSuperContainer({ children, ...restProps }) {
    return <SuperContainer {...restProps}>{children}</SuperContainer>;
  };

Egg.ChildContainer = function EggChildContainer({ children, ...restProps }) {
    return <ChildContainer {...restProps}>{children}</ChildContainer>;
  };

Egg.Wrapper = function EggWrapper({ children, ...restProps }) {
    return <Wrapper {...restProps}>{children}</Wrapper>;
  };

  
Egg.Overlay = function EggOverlay({ children, ...restProps }) {
    return <Overlay {...restProps}>{children}</Overlay>;
  };

Egg.Title = function EggTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};


Egg.Image = function EggImage({ children, ...restProps }) {
    return <Image {...restProps} />;
  };    

Egg.ModalWrapper = function EggModalWrapper({ children, ...restProps }) {
    return <ModalWrapper {...restProps}>{children}</ModalWrapper>;
  };

Egg.LinkWrap = function EggLinkWrap({ children, ...restProps }) {
    return <LinkWrap {...restProps}>{children}</LinkWrap>;
  };

Egg.ModalButton = function EggModalButton({ children, ...restProps }) {
    return <ModalButton {...restProps}>{children}</ModalButton>;
  };

Egg.ModalTitle = function EggModalTitle({ children, ...restProps }) {
    return <ModalTitle {...restProps}>{children}</ModalTitle>;
  };