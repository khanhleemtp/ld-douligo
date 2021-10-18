import styled from 'styled-components';
import { Button } from '../..';

export const Container = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 240px;
    z-index: 110;
    user-select: none;
    background: ${props => (props.correct ? `#b8f28b`: `#ffc1c1`)};
    color: ${props => (props.correct ? `#58a700;`: `#ea2b2b`)};
    @media (min-width: 640px){
        height: 160px;
    }
`

export const Wrapper = styled.div`
    transition: max-height .3s ease-in-out;
    padding: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    @media (min-width: 640px){
        flex-direction: row;
        align-items: center;
    }
`

export const Title = styled.div`
   font-weight: 800;
   font-size: 24px;
   line-height: 26px;   
`

export const Text = styled.div`
   font-weight: 400;
   font-size: 16px;
`

export const ButtonNext = styled(Button)`
    background: ${props => (props.correct ? `#58cc02`: `#ea2b2b;`)};
    color: #fff;
    &:hover{
        filter: brightness(1.1);
    }
`


