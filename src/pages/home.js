import React, { useState } from 'react';
import { Feature, OptForm } from '../components';
import { useDispatch, useSelector } from 'react-redux'
import { signIn } from '../redux/actions/authAction';
import { Redirect } from 'react-router-dom'
import { clearErrors } from '../redux/actions/errorActions';
import { TokenService } from '../services/storage.service';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector(state => state.auth);
    const error = useSelector(state => state.error);
    const permissionRegister = () => {
        dispatch({ type: 'REGISTER_FAIL' });
        dispatch(clearErrors());
    }

    const onSubmit = e => {
        e.preventDefault();
        history.push('/learn')
        // dispatch(signIn({ username, password }));
    }

    if(TokenService.getToken()) {
        return <Redirect to={'/learn'}/>
    }
    

    return (
        <>
          <OptForm>
            <div style={{ position: 'absolute', top: '16px', left: '50%'}}>
                <OptForm.ImgLogo src="images/ld-edu-logo.png" alt="logo"/>
            </div>
            <OptForm.WrapperForm>
                <OptForm.Form onSubmit={onSubmit}>
                    <OptForm.ImageWrapper>
                        <img src="images/person1.svg" alt="hello" />
                    </OptForm.ImageWrapper> 
                    <OptForm.WrapperInput>
                        <OptForm.Title>Đăng nhập</OptForm.Title>               
                    </OptForm.WrapperInput>  
                    {
                        error && error.msg  ? (
                            <OptForm.WrapperInput>
                                <OptForm.TextError>{error.msg}</OptForm.TextError>
                            </OptForm.WrapperInput> ) : null
                    }
                    <OptForm.WrapperInput>
                        <OptForm.Span>Tên Đăng nhập</OptForm.Span>
                        <OptForm.Input 
                            onChange={ e => setUsername(e.target.value)}
                        />                
                    </OptForm.WrapperInput>  
                    <OptForm.Break /> 
                    <OptForm.WrapperInput>
                        <OptForm.Span>Mật khẩu</OptForm.Span>
                        <OptForm.Input type="password"
                            onChange={ e => setPassword(e.target.value)}
                        />                
                    </OptForm.WrapperInput>  

                    <Feature.WrapperCenter>
                        <OptForm.Button type="submit">
                            Chơi ngay
                            <img src="images/ic_Play.svg" alt="play"/>
                        </OptForm.Button>                        
                    </Feature.WrapperCenter>
                    <Feature.WrapperCenter>
                        <OptForm.Text to="signup"
                            onClick={permissionRegister}
                        >
                            Đăng kí ngay?
                        </OptForm.Text>                       
                    </Feature.WrapperCenter>
                </OptForm.Form>                
            </OptForm.WrapperForm>

          </OptForm>      
        </>
    )
}

export default Home
