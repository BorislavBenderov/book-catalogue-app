import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Login.css';

export const Login = () => {
    const { onLogin, auth } = useContext(AuthContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (password === '' || email === '') {
            alert('Please fill all the fields');
            return;
        }
        
        onLogin(auth, email, password);
    } 

    return (
        <div className='login__card'>
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login__form" onSubmit={onSubmit}>
                <input type="text" name="email" id="email" placeholder='Username' />
                <input type="password" name='password' id='password' placeholder='Password' />
                <a href="#">
                    Forgot your password?
                </a>
                <button className='btn' type='submit'>LOGIN</button>
            </form>

        </div>
    );
}
