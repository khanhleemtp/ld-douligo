import React from 'react';
import { Container, Title, SubTitle, WrapperCenter } from './styles/feature';

export default function Feature({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Feature.WrapperCenter = function FeatureWrapperCenter({ children, ...restProps }) {
    return <WrapperCenter {...restProps}>{children}</WrapperCenter>;
  };

Feature.Title = function FeatureTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Feature.SubTitle = function FeatureSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

