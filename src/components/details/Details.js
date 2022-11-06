import './Details.css';
import BOOK from '../../assets/book.jpg'

export const Details = () => {
    return (
        <section className="details__page">
            <div className="book__information">
                <article className='book__information__title__type'>
                    <h3>Harry Potter</h3>
                    <p className="type">Type: Action</p>
                </article>
                <article className='book__information__img__desk'>
                    <p className="img"><img src={BOOK} alt="book img" /></p>
                    <div className="book__description">
                        <h3>Description:</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus vero ipsam laborum incidunt, deleniti dolor omnis recusandae ex, eveniet itaque ducimus dolores quas nobis. Tenetur cupiditate quas ipsum enim consequatur?</p>
                    </div>
                </article>
                <div className="actions">
                    <a href="" className="btn">Edit</a>
                    <a href="" className="btn">Delete</a>
                </div>

            </div>
        </section>
    );
}