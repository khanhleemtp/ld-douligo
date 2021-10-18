import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    border-top: 2px solid #e5e5e5;
    margin: 0 auto;
    padding: 28px 0;
    max-width: 400px;
    width: 100%;
`

export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`

export const Text = styled(Link)`
    color: #afafaf;
    font-size: 15px;
    font-weight: 700;
    letter-spacing: .8px;
    text-transform: uppercase;
    text-decoration: none;
    background-color: transparent;
    margin: 4px 16px;
    &:hover{
        color: #1cb0f6;
    }
`
