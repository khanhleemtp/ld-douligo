import React from 'react';
import { Container, Input, Break, Button, Text, Span, WrapperInput, Form, ImageWrapper, ImgLogo, WrapperForm, Title, TextError } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.WrapperForm = function OptFormWrapperForm({ children, ...restProps }) {
  return <WrapperForm {...restProps}>{children}</WrapperForm>;
};

OptForm.Form = function OptFormForm({ children, ...restProps }) {
  return <Form {...restProps}>{children}</Form>;
};

OptForm.ImgLogo = function OptFormImgLogo({ ...restProps }) {
  return <ImgLogo {...restProps} />;
};


OptForm.WrapperInput = function OptFormWrapperInput({ children, ...restProps }) {
  return <WrapperInput {...restProps}>{children}</WrapperInput>;
};

OptForm.Span = function OptFormSpan({ children, ...restProps }) {
  return <Span {...restProps}>{children}</Span>;
};

OptForm.Input = function OptFormInput({ ...restProps }) {
  return <Input {...restProps} />;
};

OptForm.ImageWrapper = function OptFormImageWrapper({ children, ...restProps }) {
  return <ImageWrapper {...restProps}>{children}</ImageWrapper>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
  return (
    <Button {...restProps}>
      {children}
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.TextError = function OptFormTextErrorr({ children, ...restProps }) {
  return <TextError {...restProps}>{children}</TextError>
};


OptForm.Title = function OptFormTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};


OptForm.Break = function OptFormBreak({ ...restProps }) {
  return <Break {...restProps} />;
};
