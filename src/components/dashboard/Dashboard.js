import React from 'react';
import './Dashboard.css';
import BOOK from '../../assets/book.jpg';

export const Dashboard = ({ books }) => {

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
            <a className="btn" href="#">
              Details
            </a>
          </li>)
          : <p className="no__books">No books in database!</p>}
      </ul>     
    </section>

  );
}
