import React from 'react'
import { Header } from '..'
import headerData from '../../data/header.json'

function HeaderLayout({ hideModal }) {
    return (
        <Header onClick={hideModal}>
            <Header.Wrapper>
                {
                    headerData.map((item,index) => (
                        <Header.LinkWrap to={`${item.link}`} key={index}>
                            <Header.ImgWrapper >
                                <img src={item.src} alt={item.alt} />
                                <Header.Text >{item.title}</Header.Text>
                            </Header.ImgWrapper>
                        </Header.LinkWrap>
                    ))
                }
            </Header.Wrapper>
        </Header>
    )
}

export default HeaderLayout
