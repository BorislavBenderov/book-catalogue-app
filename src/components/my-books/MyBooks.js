import BOOK from '../../assets/book.jpg';
import './MyBooks.css';

export const MyBooks = () => {
    return (
        <section className="my__books">
            <h1>My Books</h1>
            <ul className="my__books__list">
                <li className="otherBooks">
                    <h3>Harry Potter</h3>
                    <p className='type'>Type: Action</p>
                    <p className="img"><img src={BOOK} alt="book img" /></p>
                    <a href="#" className="btn">Details</a>
                </li>
                <li className="otherBooks">
                    <h3>Harry Potter</h3>
                    <p className='type'>Type: Action</p>
                    <p className="img"><img src={BOOK} alt="book img" /></p>
                    <a href="#" className="btn">Details</a>
                </li>
                <li className="otherBooks">
                    <h3>Harry Potter</h3>
                    <p className='type'>Type: Action</p>
                    <p className="img"><img src={BOOK} alt="book img" /></p>
                    <a href="#" className="btn">Details</a>
                </li>
                
            </ul>

            <p className="no__books">No books in database!</p>
        </section>
    );
}