import React from 'react';
import './Register.css';

export const Register = () => {
    return (
        <div className='register__card'>
            <h2>Register</h2>
            <h3>Enter your credentials</h3>
            <form className="register__form">
                <input type="text" name="email" id="email" placeholder='Username' />
                <input type="password" name='password' id='password' placeholder='Password' />
                <input type="password" name='repeatPassword' id='repeatPassword' placeholder='Repeat Password' />
                <a href="#">
                    Already Have an account? Sign In
                </a>
                <button className='btn' type='submit'>REGISTER</button>
            </form>

        </div>
    );
}
