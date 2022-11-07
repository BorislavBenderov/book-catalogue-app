import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';
import './Details.css';
import { Link, useParams } from 'react-router-dom';

export const Details = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);

    const currentBook = books.find(book => book.id === bookId);

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
                <div className="actions">
                    <Link to={`/edit/${currentBook.id}`} className="btn">Edit</Link>
                    <a href="" className="btn">Delete</a>
                </div>
            </div>
        </section>
    );
}