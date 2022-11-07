import './Dashboard.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { BookContext } from '../../contexts/BookContext';

export const Dashboard = () => {
  const { books } = useContext(BookContext);
  
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <ul className="other__books__list">
        {books.length > 0
          ? books.map(book => <li className="otherBooks" key={book.id}>
            <h3>{book.title}</h3>
            <p className='type'>{book.type}</p>
            <p className="img">
              <img src={book.imageUrl} />
            </p>
            <Link className="btn" to={`/details/${book.id}`}>
              Details
            </Link>
          </li>)
          : <p className="no__books">No books in database!</p>}
      </ul>     
    </section>

  );
}
