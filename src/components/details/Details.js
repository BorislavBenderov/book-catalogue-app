import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import './Details.css';
import { Link, useParams, useNavigate } from 'react-router-dom';

import { database } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';
import { doc, deleteDoc } from 'firebase/firestore';

export const Details = () => {
    const auth = getAuth();
    const navigate = useNavigate();
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const currentBook = books.find(book => book.id === bookId);

    let isOwner = null;

    if (auth.currentUser) {
        isOwner = currentBook.ownerId === auth.currentUser.uid;
    }


    const onDelete = async (id, e) => {
        const confirmation = window.confirm('Are you sure you want to delete this post?');

        if (confirmation) {
            e.preventDefault();
            navigate('/');
            await deleteDoc(doc(database, 'books', id));

        }
    }

    return (
        <section className="details__page">
            <div className="book__information">
                <article className='book__information__title__type'>
                    <h3>{currentBook.title}</h3>
                    <p className="type">Type: {currentBook.type}</p>
                </article>
                <article className='book__information__img__desk'>
                    <p className="img"><img src={currentBook.imageUrl} alt="book img" /></p>
                    <div className="book__description">
                        <h3>Description:</h3>
                        <p>{currentBook.description}</p>
                    </div>
                </article>
                {isOwner
                    ? <div className="actions">
                        <Link to={`/edit/${currentBook.id}`} className="btn">Edit</Link>
                        <a href="" className="btn" onClick={(e) => onDelete(currentBook.id, e)}>Delete</a>
                    </div> : ''}
            </div>
        </section>
    );
}