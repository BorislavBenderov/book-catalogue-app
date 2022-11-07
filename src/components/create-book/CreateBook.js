import React from 'react';
import './CreateBook.css';

import { collection, addDoc } from 'firebase/firestore';
import { app, database } from '../../firebaseConfig';

export const CreateBook = () => {
    const collectionRef = collection(database, 'books');

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get('title');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');
        
        addDoc(collectionRef, {
            title,
            description,
            imageUrl,
            type
        })
        .then(() => {
            alert('Data Added');
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
                <input class="btn" type="submit" value="Add Book"></input>
            </form>
        </section>
    );
}
