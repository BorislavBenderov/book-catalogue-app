import './CreateBook.css';
import { useNavigate } from 'react-router-dom';

import { collection, addDoc } from 'firebase/firestore';
import { database } from '../../firebaseConfig';
import { getAuth } from 'firebase/auth';

export const CreateBook = () => {
    const collectionRef = collection(database, 'books');
    const navigate = useNavigate();
    const auth = getAuth();

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
            type,
            ownerId: auth.currentUser.uid
        };
        
        addDoc(collectionRef, bookData)
        .then(() => {
            navigate('/');
        })
        .catch((err) => {
            alert(err.message);
        })

    }

    return (
        <section className="create__book">
            <form className="create__form" onSubmit={onSubmit}>
                <legend>Add new Book</legend>
                <p className="field">
                    <label htmlFor="title"></label>
                    <span className="input">
                        <input type="text" name='title' id='title' placeholder='Title' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description"></label>
                    <span className="input">
                        <input type="text" name='description' id='description' placeholder='Description' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image"></label>
                    <span className="input">
                        <input type="text" name='imageUrl' id='image' placeholder='Image' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="type"></label>
                    <span className="input">
                        <input type="text" name='type' id='type' placeholder='Type' />
                    </span>
                </p>
                <input className="btn" type="submit" value="Add Book"></input>
            </form>
        </section>
    );
}
