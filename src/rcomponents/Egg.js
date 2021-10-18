import React, { useState, useRef, useEffect } from 'react'
import Egg from '../components/egg'
import { useSpring, animated } from 'react-spring'


const EggComponent = ({  show, topic, id, currentLevel, maxLevel, image, getModal, title }) => {
    
    
    const animation = useSpring({
        config : {
            duration: 250,
        },
        opacity: show ? 1 : 0.2,
        transform: show ? `translate(-50%, 75px)`: `translate(-50%, 15px)`,
        zIndex: 1,
        position: `absolute`,
        // transform: `translate(-50%, 50%)`,
        filter: `brightness(1.1)`,
        left: `50%`,
        top: `80px` 
    })
    
    return (
            <>
                <Egg
                    onClick={() => {
                        // console.log('another: ',isAnotherOpen, '__' ,'current', isOpen);
                        // setIsAnotherOpen(false);
                        console.log('click egg')
                        getModal(id)
                    }}
                >
                    <Egg.Wrapper
                        // onClick={(e) => 
                        //     {
                        //         console.log('Clicked Egg');
                        //         setIsOpen(!isOpen)
                        //         setIsAnotherOpen(!isAnotherOpen);
                        //         console.log(e.target)
                        //     }}
                    
                    >
                        <Egg.Image src={image} alt="img" /> 
                    </Egg.Wrapper>
                    <Egg.Title>{topic}</Egg.Title>   
                        {   
                            show ? 
                            <animated.div style={animation}
                            >
                                <Egg.ModalWrapper
                                    show={show}
                                    onClick={ e => e.stopPropagation()}
                                    >
                                    <Egg.ModalTitle>
                                        Cấp độ {currentLevel}/{maxLevel}
                                    </Egg.ModalTitle>
                                    <Egg.LinkWrap to={`${title}/${currentLevel}`}>
                                        <Egg.ModalButton>
                                                Bắt đầu
                                        </Egg.ModalButton>
                                    </Egg.LinkWrap>
                                </Egg.ModalWrapper>
                            </animated.div> : null
                        }
                </Egg> 
            </>
    )
}



export default EggComponent;
