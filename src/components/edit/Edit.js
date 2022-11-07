import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BookContext } from '../../contexts/BookContext';
import './Edit.css';

import { doc, updateDoc } from 'firebase/firestore';
import { database } from '../../firebaseConfig';

export const Edit = () => {
    const navigate = useNavigate();
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const currentBook = books.find(x => x.id === bookId);

    const [values, setValues] = useState({
        title: currentBook.title,
        description: currentBook.description,
        imageUrl: currentBook.imageUrl,
        type: currentBook.type
    });

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');
        const bookData = {
            title,
            description,
            imageUrl,
            type
        };

        const docToUpdate = doc(database, 'books', bookId);
        updateDoc(docToUpdate, bookData)
        .then(() => {
            navigate(`/details/${bookId}`);
        })
        .catch(err => {
            alert(err.message);
        })
    }

    return (
        <section className="edit__book">
            <form className="edit__form" onSubmit={onSubmit}>
                <legend>Edit Book</legend>
                <p className="field">
                    <label htmlFor="title">Title</label>
                    <span className="input">
                        <input type="text" name='title' id='title' placeholder='Title' value={values.title} onChange={changeHandler} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Title</label>
                    <span className="input">
                        <input type="text" name='description' id='description' placeholder='Description' value={values.description} onChange={changeHandler} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Title</label>
                    <span className="input">
                        <input type="text" name='imageUrl' id='image' placeholder='Image' value={values.imageUrl} onChange={changeHandler} />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type">Title</label>
                    <span className="input">
                        <input type="text" name='type' id='type' placeholder='Type' value={values.type} onChange={changeHandler} />
                    </span>
                </p>
                <input class="btn" type="submit" value="Edit Book"></input>
            </form>
        </section>
    );
}
