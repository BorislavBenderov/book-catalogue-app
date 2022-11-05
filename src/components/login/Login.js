import React from 'react';
import './Login.css';

export const Login = () => {
    return (
        <div className='login__card'>
            <h2>Login</h2>
            <h3>Enter your credentials</h3>
            <form className="login__form">
                <input type="text" placeholder='Username' />
                <input type="password" placeholder='Password' />
                <a href="#">
                    Forgot your password?
                </a>
                <button className='btn'>LOGIN</button>
            </form>

        </div>
    );
}
