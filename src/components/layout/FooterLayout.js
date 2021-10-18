import React from 'react'
import footerData from '../../data/footer.json' 
import Footer from '../footer'

function FooterLayout() {
    return (
        <Footer>
            <Footer.Wrapper>
                {
                    footerData.map(item => (
                        <Footer.Text to={`/${item.link}`} key={item.title}>
                            {item.title}
                        </Footer.Text>
                    ))
                }
            </Footer.Wrapper>
        </Footer>
    )
}

export default FooterLayout
