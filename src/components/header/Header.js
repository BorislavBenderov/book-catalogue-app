import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';
import BOOK1 from '../../assets/book-main.jpg';
import './Header.css';
import { signOut } from "firebase/auth";

export const Header = () => {
    const { loggedUser, setLoggedUser, auth } = useContext(AuthContext);

    const onLogout = () => {
        signOut(auth).then(() => {
            setLoggedUser(null);
        }).catch((err) => {
            alert(err.message);
        });
    }

    return (
        <header className="book__header">
            <nav className="navbar">
                <article className="navbar__img__content">
                    <Link to="/" className="btn">Dashboard</Link>
                </article>

                <article className="navbar__buttons__content">
                    <ul className='navbar__buttons'>
                        {!loggedUser
                            ? <> <li><Link className='btn' to="/login">Login</Link></li>
                                <li><Link className='btn' to="/register">Register</Link></li></>
                            : <> <li><Link className='btn' to="/mybooks">My Books</Link></li>
                                <li><Link className='btn' to="/create">Add Book</Link></li>
                                <li><Link className='btn' to="/" onClick={onLogout}>Logout</Link></li></>}
                    </ul>
                </article>
            </nav>

            <section className="book__section">
                <article className="book__section__img__content">
                    <img src={BOOK1} alt="fancy book img" className='section__img' />
                </article>
            </section>
        </header>
    );
}
