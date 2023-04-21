import { useState } from 'react';
import { GoogleSingInApi, LoginApi } from '../api/AuthApi';
import LinkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const LoginComponent = () => {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();

    const login = async () => {
        try {
            await LoginApi(credentials.email, credentials.password);
            toast.success('Sign In to Lnedin!')
            navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error('Please check your credentials!')
        }
    }

    const googleSingIn = () => {
        GoogleSingInApi();
        navigate('/home');
    }

    return (
        <div className='login-wrapper'>
            <img src={LinkedinLogo} alt='logo' className='linkedinLogo' />

            <div className='login-wrapper-inner'>
                <h1 className='heading'>Sing in</h1>
                <p className='sub-heading'>Stay updated on your professional work</p>
                <div className='auth-inputs'>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        className='common-input'
                        placeholder='Email or Phone'
                        type='email'
                    />
                    <input
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className='common-input'
                        placeholder='Password'
                        type='password'
                    />
                    <button onClick={login} className='login-btn'>Sign In</button>
                </div>
            </div>

            <hr className="hr-text" data-content="OR" />


            <div className='google-btn-container'>
                <GoogleButton
                    className='google-btn'
                    onClick={googleSingIn}
                />

                <p className='go-to-signup'>
                    New to LinkedIn? <span className='join-now' onClick={() => navigate('/register')}>Join now</span>
                </p>
            </div>
        </div>
    )
}

export default LoginComponent