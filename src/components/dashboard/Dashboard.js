import React from 'react';
import './Dashboard.css';
import BOOK from '../../assets/book.jpg';

export const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1>Dashboard</h1>
      <ul className="other__books__list">
        <li className="otherBooks">
          <h3>A Court of Thorns and Roses</h3>
          <p className='type'>Type: Fiction</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
        <li className="otherBooks">
          <h3>Outlander</h3>
          <p className='type'>Type: Other</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
        <li className="otherBooks">
          <h3>To Kill a Mockingbird</h3>
          <p className='type'>Type: Classic</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
        <li className="otherBooks">
          <h3>A Court of Thorns and Roses</h3>
          <p className='type'>Type: Fiction</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
        <li className="otherBooks">
          <h3>Outlander</h3>
          <p className='type'>Type: Other</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
        <li className="otherBooks">
          <h3>To Kill a Mockingbird</h3>
          <p className='type'>Type: Classic</p>
          <p className="img">
            <img src={BOOK} />
          </p>
          <a className="btn" href="#">
            Details
          </a>
        </li>
      </ul>
      <p className="no-books">No books in database!</p>
    </section>

  );
}
