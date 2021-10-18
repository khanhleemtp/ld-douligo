import React from 'react'
import HeaderLayout from '../components/layout/HeaderLayout'
import styled from 'styled-components'

const Styles = styled.div`
    .notfound{
        min-height: 100vh;
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        color: #afafaf;
        font-size: 36px;
        font-weight: 700;
        &-text{

        }
        &-img{
            
        }
    }
`

function NotFound({ develop }) {
    return (
        <Styles>
            <HeaderLayout />
            <div className="notfound">
                <div className="notfound-text">
                    {
                        !develop ? (
                            "Sorry, Page Not Found :((" 
                        ) :
                        "We are going to buid....."
                    }
                </div>
                <div className="notfound-img">
                    <img src="images/mario.png" alt="mario" />
                </div>
            </div>
        </Styles>
    )
}

export default NotFound
