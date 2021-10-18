import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

// egg 
export const SuperContainer = styled.div`
    position: relative;
    /* min-height: 100vh; */
    height: 100%;
    -webkit-touch-callout: none; 
        -webkit-user-select: none; 
        -khtml-user-select: none; 
        -moz-user-select: none; 
            -ms-user-select: none;
                user-select: none
    `
export const ChildContainer = styled.div`
    @media (min-width: 640px) {
      /* width: 100%; */
      max-width: 960px;
      margin: 56px auto;
      display: flex;
      align-items: flex-start;
      justify-content: space-around;
    }
`

export const Overlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
    /* background: transparent; */
    /* display: flex;
    align-items: center;
    justify-content: center; */
    /* background: rgba(0,0,0,0.3); */
`
export const Wrapper = styled.div`
    /* z-index: 2; */
    /* position: relative; */
    background: #1CB0F6;
    border-radius: 50%;
    border: 4px solid #fdfc55;
`;

export const Container = styled.div`
    position: relative;
    max-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3c3c3c;
    cursor: pointer;
    &:hover{
        ${Wrapper} {
            border: 4px solid #fdf;
        }
        img{
            transform: translateY(-5px);
            transition: all linear 0.1s;
        }
    }
`;




export const Title = styled.h1`
    font-size: 17px;
`;

export const Image = styled.img`
    width: 72px;
    height: 72px;

`;

// Modal
export const ModalWrapper = styled.div`
    /* position: absolute;
    transform: translate(-50%, 50%);
    filter: brightness(1);
    left: 50%;
    top: 80px; */
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #1cb0f6;    
    border: 0;
    border-radius: 15px;
    box-sizing: border-box;
    overflow: hidden;
    padding: 24px 16px;
    text-align: center;
    width: 300px;
`;

export const ModalTitle = styled.div`
    font-weight: 700;
    color: #fff;
    margin-bottom: 16px;
`;

export const LinkWrap = styled(Link)`

`

export const ModalButton = styled.button`
    background-color: #fff;
    text-decoration: none;
    border-width: 0 0 4px;  
    color: #1cb0f6;
    text-transform: uppercase;
    border-radius: 16px;
    font-weight: 700;
    outline: none;
    border-top-left-radius: 18px;
    border-top-right-radius: 18px;
    padding: 13px 16px;
    border-width: 0 0 4px;
    font-size: 15px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
`;