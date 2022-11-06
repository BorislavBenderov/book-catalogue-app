import React from 'react';
import { Link } from 'react-router-dom';
import BOOK from '../../assets/book.png';
import BOOK1 from '../../assets/book-main.jpg';
import './Header.css';

export const Header = () => {
    return (
        <header className="book__header">
            <nav className="navbar">
                <article className="navbar__img__content">
                    <Link to="/" className="btn">Dashboard</Link>
                </article>

                <article className="navbar__buttons__content">
                    <ul className='navbar__buttons'>
                        <li><Link className='btn' to="/login">Login</Link></li>
                        <li><Link className='btn' to="/register">Register</Link></li>
                        <li><Link className='btn' to="/mybooks">My Books</Link></li>
                        <li><Link className='btn' to="/create">Add Book</Link></li>
                        <li><Link className='btn' to="#">Logout</Link></li>
                    </ul>
                </article>
            </nav>

            <section className="book__section">
                <article className="book__section__img__content">
                    <img src={BOOK1} alt="fancy book img" className='section__img' />
                </article>
                <h1 className='book__section__main__text'>Welcome to the world of Books</h1>
            </section>
        </header>
    );
}
