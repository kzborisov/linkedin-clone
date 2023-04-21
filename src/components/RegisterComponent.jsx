import { useState } from 'react';
import { GoogleSingInApi, RegisterApi } from '../api/AuthApi';
import '../Sass/LoginComponent.scss';
import LinkedinLogo from '../assets/linkedinLogo.png';
import GoogleButton from 'react-google-button'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const RegisterComponent = () => {
    const [credentials, setCredentials] = useState({});
    const navigate = useNavigate();

    const register = async () => {
        try {
            await RegisterApi(credentials.email, credentials.password);
            toast.success('Account Created!');
            navigate('/home');
        } catch (err) {
            console.log(err);
            toast.error('Cannot create your account!');
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
                <h1 className='heading'>Make the most of your professional work</h1>

                <div className='auth-inputs'>
                    <input
                        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
                        className='common-input'
                        placeholder='Email or Phone number'
                        type='email'
                    />
                    <input
                        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                        className='common-input'
                        placeholder='Password (6 or more characters)'
                        type='password'
                    />
                    <button onClick={register} className='login-btn'>Agree & Join</button>
                </div>
            </div>

            <hr className="hr-text" data-content="OR" />


            <div className='google-btn-container'>
                <GoogleButton
                    className='google-btn'
                    onClick={googleSingIn}
                />

                <p className='go-to-signup'>
                    Already on LinkedIn?{" "}
                    <span className='join-now' onClick={() => navigate('/')}>Sign in</span>
                </p>
            </div>
        </div>
    )
}

export default RegisterComponent