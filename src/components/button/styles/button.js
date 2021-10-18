import styled from 'styled-components';

export const Container = styled.button`
            margin: 0 12px;
            /* cursor: pointer; */
            border-color: transparent;
            border-top-left-radius: 18px;
            border-top-right-radius: 18px;
            padding: 13px 16px;
            background: none;
            border-radius: 16px;
            border-width: 4px 0 0;
            min-width: 150px;
            width: 100%;
            font-size: 15px;
            line-height: 20px;
            display: inline-block;
            text-align: center;
            vertical-align: middle;
            white-space: nowrap;
            font-weight: 700;
            letter-spacing: .8px;
            text-transform: uppercase;
            background: #e5e5e5;
            color: #afafaf;
            outline: none;
            border: none;
            cursor: pointer;
            @media (min-width: 640px) {
                width: 150px;
            }
`

export const Check = styled(Container)`
            background: ${props => (props.checkBtn ? `#58cc02`: `#e5e5e5`)};
            cursor: ${props => (props.checkBtn ? `pointer`: ``)};
            color: ${props => (props.checkBtn ? `#fff`: `#afafaf`)};

`

export const Ignore = styled(Container)`
            display: none;
            cursor: pointer;
            @media (min-width: 640px) {
                display: block;
                &:hover{
                background-color: #ddd;
                color: #a5a5a5;
                }
            }
`

export const Logout = styled(Container)`
    &:hover{
        color: #fefefe;
        background: #d93737;
    }
`