import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Register.css';

export const Register = () => {
    const { onRegister, auth } = useContext(AuthContext);
    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        const repeatPassword = formData.get('repeatPassword');

        if (password === '' || email === '' || repeatPassword === '') {
            alert('Please fill all the fields');
            return;
        }

        if (password !== repeatPassword) {
            alert('Your password and confirmation password do not match');
            return;
        }     

        onRegister(auth, email, password);
    }

    return (
        <div className='register__card'>
            <h2>Register</h2>
            <h3>Enter your credentials</h3>
            <form className="register__form" onSubmit={onSubmit}>
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
