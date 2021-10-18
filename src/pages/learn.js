import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Egg from '../components/egg'
import EggComponent from '../rcomponents/Egg';
import learnData from '../data/learn.json'; 
import styled from 'styled-components'
import TopScore from '../components/topscore/TopScore';
import FooterLayout from '../components/layout/FooterLayout';
import HeaderLayout from '../components/layout/HeaderLayout';
import { getLearn } from '../redux/actions/learnAction';


const LearnStyle = styled.div`
    overflow-x: hidden;
    .egg-container{
        max-width: 440px;
        box-sizing: border-box;
        width: 100%;
        /* background-color: #def; */
        padding: 32px 0;
        margin: 60px auto 0 auto;
        /* margin-top: 60px; */
        /* margin-right: 404px; */
    }
    .egg-wrapper{
        align-items: stretch;
        display: flex;
        flex-direction: column;
    }
    .egg-grid{
        /* height: 80px; */
        display: grid;
        grid-auto-columns: calc(33.33333% - 8px);
        grid-auto-flow: column;
        grid-column-gap: 12px;
        justify-content: center;
        padding: 16px 12px;
        }
    .egg-top{
        display: none;
        overflow: auto;
        @media (min-width: 640px) {
                z-index: 1;
                margin: 60px 24px 24px;
                width: 320px;
                max-height: 360px;
                background: rgb(255, 255, 255);
                border: 2px solid rgb(229, 229, 229);
                border-radius: 16px;
                display: block;
                padding: 24px;
                &-wrapper{
                  /* overflow: auto; */
                }
                &-header{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: 700;
                    font-size: 32px;
                    margin-bottom: 16px;
                }
                &-title{
                    align-items: baseline;
                    border-bottom: 2px solid rgb(218, 218, 218);
                    display: flex;
                    justify-content: space-between;
                    margin: 0px -24px;
                    padding: 0px 24px 12px;
                    color: #3c3c3c;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 26px;
                    &-score{
                        color: #1cb0f6;
                    }
                }
                &-detail-wrapper{
                    width: 100%;
                }
                &-detail{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 12px 24px 12px;
                    margin: 0px -24px;
                    font-weight: 600;
                }
            
            }            
        }
`

function Learn() {

    const { username } = useSelector(state => state.auth);
    // const { board, learn } = useSelector(state => state.lesson);

    
    // console.log(board, learn);
    const dispatch = useDispatch();
    // console.log(learn, board);
    useEffect(() => {
        dispatch(getLearn(username));
    }, [dispatch, username])


    const [showModal, setshowModal] = useState(0);
    const getModal = (value) => {
        setshowModal(prev => {
            return prev === value ? 0 : value;
        });
    }

    const hideModal = () => {
        console.log('click overlay')
        setshowModal(0);
    }

    return (
        <LearnStyle>
            {/* Header */}
            <HeaderLayout hideModal={hideModal} />

            {/* Main */}

            {
                learnData ?
            <>
            <Egg.SuperContainer>
                <Egg.Overlay
                    onClick={hideModal}
                ></Egg.Overlay>
                <Egg.ChildContainer>
                    <div className="egg-container" >
                        <div className="egg-wrapper">
                            {
                                [1,2,3,4].map(rowIndex => (
                                    <div className="egg-grid" key={rowIndex}>
                                        {
                                            learnData && learnData?.learn.filter(topicRaw => topicRaw.row === rowIndex).map((topic, key) => (
                                            <EggComponent
                                                show={showModal === topic.id}
                                                topic={topic.topic} 
                                                id={topic.id}
                                                currentLevel={topic.currentLevel} 
                                                maxLevel={topic.maxLevel}
                                                image={topic.image}
                                                key={key}
                                                getModal={getModal}
                                                hideModal={hideModal}
                                                title={topic.title}
                                                />
                                                ))  
                                        }
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    
                    <TopScore hideModal={hideModal} />

                </Egg.ChildContainer>

            </Egg.SuperContainer>



            {/* Footer */}
            <div onClick={hideModal}>
                <FooterLayout />
            </div> 
            </> : <div>Loading.......</div> }
        </LearnStyle>



    )
}

export default Learn
