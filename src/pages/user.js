import React, { useEffect } from 'react'
import FooterLayout from '../components/layout/FooterLayout'
import HeaderLayout from '../components/layout/HeaderLayout'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../components'
// import { logout } from '../redux/actions/authAction'
import user from '../data/user.json';
import { getUser } from '../redux/actions/userAction'
import { useHistory } from 'react-router-dom';

const Style = styled.div`
    .user-screen{
        min-height: 580px;
        width: 100%;
        margin-top: 60px;
        display: flex;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        &-img{
            margin: 16px;
        }
        &-info{
            display: flex;
            align-items: center;
            font-size: 19px;
            justify-content: space-around;
            width: 100%;
            @media (min-width: 520px) {
                width: 640px;
            }
            width: 100%;
            color: #afafaf;
            padding: 12px 8px;
            &-wrapper{
                border: 2px solid #e5e5e5;
                border-radius: 16px;
                margin: 24px 0;
            }
            &-title{
                color: #f27474;
            }
            &-detail{
                max-width: 320px;
                width: 100%;
                text-overflow: ellipsis;
                display: flex;
                align-items: center;
                justify-content: center;
                white-space: nowrap; 
            }
        }
    }
    
`


function User() {
    
    // const user = useSelector(state => state.user);

    const dispatch = useDispatch();
    const history = useHistory();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch])

    console.log(user);
    


    const logOutBtn = () => {
        history.push('/');
        // dispatch(logout())
    }

    return (
        <Style>
            <HeaderLayout />
            
            {
                user && user?.name ?
            <div>
                <div className="user-screen">
                    <div className="user-screen-img">
                        <img src='images/mario.png' alt="mario" />
                    </div>
                    <div className="user-screen-info-wrapper">
                        <div className="user-screen-info">
                            <div className="user-screen-info-title">Tên:</div>
                            <div className="user-screen-info-detail">
                                {user.name}
                            </div>
                        </div>
                        <div className="user-screen-info">
                            <div className="user-screen-info-title">Điểm:</div>
                            <div className="user-screen-info-detail">
                                {user.score}
                            </div>
                        </div>
                        {/* <div className="user-screen-info">
                            <div className="user-screen-info-title">Các bài đang học:</div>
                            <div className="user-screen-info-detail" title="basic4, basic5, basic 6, basic7">
                                {
                                    userData.isRunning.map((item, index) => {
                                        if(userData.isRunning.length - 1 === index) return  `${item}.`
                                        return `${item}, `
                                    })
                                }
                            </div>
                        </div> */}
                        <div className="user-screen-info">
                            <div className="user-screen-info-title">Các bài đã học:</div>
                            <div className="user-screen-info-detail">
                                {/* {
                                    userData.isPassing.map((item, index) => {
                                        if(userData.isRunning.length - 1 === index) return  `${item}.`
                                        return `${item}, `
                                    })
                                } */}
                                {
                                    user && user.hasLearn.length !== 0 ?  (user?.hasLearn?.map((item, index) => {
                                        if(user.hasLearn.length - 1 === index) return `${item}.`
                                        return `${item}, `
                                    })): 'Học ngay đi, babe'
                                }
                            </div>
                        </div>
                    </div>
                    <Button.Logout
                        onClick={() => logOutBtn()}
                    >Đăng xuất</Button.Logout>
                </div> 
                <FooterLayout />                
            </div>                    
            : <div>Loading....</div>     
                }
        </Style>
    )
}

export default User
