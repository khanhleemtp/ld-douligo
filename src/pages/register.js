import React, { useEffect, useState } from 'react';
import { Feature, OptForm } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../redux/actions/authAction';
import { useHistory, Redirect } from 'react-router-dom'
import { clearErrors } from '../redux/actions/errorActions';
import { TokenService } from '../services/storage.service';
const Register = () => {

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const history = useHistory();

    const error = useSelector(state => state.error);
    const auth = useSelector(state => state.auth);
    console.log(auth);

    console.log(error);

    

    const onSubmit = e => {
        e.preventDefault();
        dispatch(register({ name, password, username }));
    }

    // useEffect(() => {
    // }, [])

    /**
     * @content should return to Redirect
    */
    if(auth && auth.user) {
            return <Redirect to={'/'} />
    }

    return (
        <>
          <OptForm >
            <OptForm.WrapperForm register>
                <OptForm.Form onSubmit={onSubmit}>
                    <OptForm.ImageWrapper>
                        <img src="images/person1.svg" alt="hello" />
                    </OptForm.ImageWrapper>
                    <OptForm.WrapperInput>
                        <OptForm.Title>Đăng Kí</OptForm.Title>
                    </OptForm.WrapperInput>   
                    
                    {
                        error && error.msg != {} ? (
                            <OptForm.WrapperInput>
                                <OptForm.TextError>{error.msg}</OptForm.TextError>
                            </OptForm.WrapperInput> ) : null
                    }

                    <OptForm.WrapperInput>
                        <OptForm.Span>Tên của bạn</OptForm.Span>
                        <OptForm.Input 
                            onChange={e => setName(e.target.value)}
                        />                
                    </OptForm.WrapperInput>  
                    <OptForm.WrapperInput>
                        <OptForm.Span>Tên Đăng nhập</OptForm.Span>
                        <OptForm.Input 
                            onChange={e => setUsername(e.target.value)}
                        />                
                    </OptForm.WrapperInput>  
                    <OptForm.Break /> 
                    <OptForm.WrapperInput>
                        <OptForm.Span>Mật khẩu</OptForm.Span>
                        <OptForm.Input type="password"
                            onChange={e => setPassword(e.target.value)}
                        />                
                    </OptForm.WrapperInput>  

                    <Feature.WrapperCenter>
                        <OptForm.Button type="submit" >
                            Đăng kí
                            <img src="images/ic_Play.svg" alt="play"/>
                        </OptForm.Button>                        
                    </Feature.WrapperCenter>

                    <Feature.WrapperCenter>
                        <OptForm.Text to="/"
                            onClick={() => dispatch(clearErrors())}
                        >
                            Bạn đã có tài khoản ?
                        </OptForm.Text>                       
                    </Feature.WrapperCenter>

                </OptForm.Form>  
                              
            </OptForm.WrapperForm>

          </OptForm>      
        </>
    )
}

export default Register
