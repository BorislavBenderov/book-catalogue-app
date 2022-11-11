import './MyBooks.css';
import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import { AuthContext } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

export const MyBooks = () => {
    const { books } = useContext(BookContext);
    const { auth } = useContext(AuthContext);

    const ownerBooks = books.filter(x => x.ownerId === auth.currentUser.uid);

    return (
        <section className="my__books">
            <h1>My Books</h1>
            {ownerBooks.length > 0
                ? ownerBooks.map(ownerBook => <ul className="my__books__list" key={ownerBook.id}>
                    <li className="otherBooks">
                        <h3>{ownerBook.title}</h3>
                        <p className='type'>Type: {ownerBook.type}</p>
                        <p className="img"><img src={ownerBook.imageUrl} alt="book img" /></p>
                        <Link to={`/details/${ownerBook.id}`} className="btn">Details</Link>
                    </li>
                </ul>)
                : <p className="no__books">No books in database!</p>}
        </section>
    );
}