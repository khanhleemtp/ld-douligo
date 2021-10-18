import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    z-index: 300;
    width: 100%;
    background: #fff;
    border-bottom: 2px solid #e5e5e5;
    top: 0;
    box-sizing: border-box;
    height: 60px;
    margin: 0;
    padding: 10px;
    display: flex;
    position: fixed;
    @media (min-width: 640px) {
        /* justify-content: start; */
        justify-content: center;
    }
`

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-around;
    @media (min-width: 640px) {
        /* justify-content: start; */
        max-width: 640px;
    }
`

export const ImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Text = styled.div`
    color: #afafaf;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    text-decoration: none;
    display: none;
    @media (min-width: 640px) {
        display: block;
    }
`

export const LinkWrap = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    background-color: transparent;
    margin: 4px 16px;
    &:hover{
        ${Text}{
        color: #1cb0f6;
        }
    }
`

