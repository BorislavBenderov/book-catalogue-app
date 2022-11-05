import React from 'react';
import BOOK from '../../assets/book.png';
import BOOK1 from '../../assets/book-main.jpg';
import './Header.css';

export const Header = () => {
    return (
        <header className="book__header">
            <nav className="navbar">
                <article className="navbar__img__content">
                    <img src={BOOK} alt="book img" className="book__img" />
                </article>

                <article className="navbar__buttons__content">
                    <ul className='navbar__buttons'>
                        <li><a className='btn' href="">Login</a></li>
                        <li><a className='btn' href="">Register</a></li>
                        <li><a className='btn' href="">My Books</a></li>
                        <li><a className='btn' href="">Add Book</a></li>
                        <li><a className='btn' href="">Logout</a></li>
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
