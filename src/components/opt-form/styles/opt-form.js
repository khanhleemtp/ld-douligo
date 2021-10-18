import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url('images/background.png');
  background-repeat: repeat;
  /* background-color: #edffaa; */
  background-color: #edf;

  min-height: 100vh;
  width: 100%;
  color: #797979;
  flex-wrap: wrap;
  @media (min-width: 640px) {
      /* width: 100%; */
  }
`;

export const ImgLogo = styled.img`
  display: none;
  @media (min-width: 640px) {
    width: 120px;
    border-radius: 20%;
    display: flex;
    align-items:center;
    justify-content: center;
    background-color: #dfe;
  }

`

export const WrapperForm = styled.div`
    border-radius: 14px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff; 
    width: 360px;
    height: ${props => props.register ? `400px`: `300px`};
    @media (min-width: 640px) {
        width: 560px;
        height: ${props => props.register ? `420px`: `320px`};
        flex-direction: row-reverse
  }
`

export const Form = styled.form`
      position: relative;
      padding: 20px 30px;
      width: 100%;
`

export const WrapperInput = styled.div`
    @media (min-width: 640px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

export const Span = styled.span`
  width: 100%;
  text-transform: uppercase;
  font-size: 14px;  
  font-weight: 500;
  @media (min-width: 640px) {
    font-weight: bold;
    flex-shrink: 4;
  }
`

export const Input = styled.input`
  margin: 8px 0;
  width: 100%;
  border: 0;
  outline: none;
  border-bottom: 1px solid #868d96;
  padding: 3px 0 4px;
  height: initial;
  @media (min-width: 640px) {
      border: 2px solid #868d96;
      flex-basis: 3;
      border-radius: 7px;
      padding: 0 10px;  
      font-size: 18px;
      height: 42px; 
      flex-shrink: 2;
      &:focus{
        border: 2px solid #adf;
        outline: none;
      }
  }
`;


export const ImageWrapper = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  top: -150px;
  @media (min-width: 640px) {
    top: -120px;
  }
`;

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`;

export const Button = styled.button`
  outline: none;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 18px;
  text-transform: uppercase;
  color: #001b4d;
  font-weight: bold;
  letter-spacing: 0;
  /* width: 186px;
  height: 40px; */
  padding: 10px 30px;
  word-break: break-word;
  background-color: #ffbf00;
  border-top-color: #ffe100;
  border-bottom-color: #f88700;
  border-radius: 34px;
  border-top: 2px transparent solid;
  border-bottom: 2px transparent solid;
  box-shadow: 0 0 0 3px #002043, 0 0 0 4px #7c92b0;
  &:hover{
    background-color: #ffcb00;
    border-top-color: #ffef7c;
    border-bottom-color: #f88700;
  }
`;

export const Text = styled(Link)`
  margin-top: 12px;
  cursor: pointer;
  text-decoration: none;
  color: #57A4E2;
  &:hover{
    color: blue;
  }
`;


export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 32px;
  font-weight: 700;
  color: #3e3e3e;
  margin-bottom: 16px;
`;

export const TextError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 400;
  color: #f27474;
  margin-bottom: 16px;
`;