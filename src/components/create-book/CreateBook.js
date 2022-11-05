import React from 'react';
import './CreateBook.css';

export const CreateBook = () => {
    return (
        <section className="create__book">
            <form className="create__form">
                <legend>Add new Book</legend>
                <p className="field">
                    <label htmlFor="title">Title</label>
                    <span className="input">
                        <input type="text" name='title' id='title' placeholder='Title' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="description">Title</label>
                    <span className="input">
                        <input type="text" name='description' id='description' placeholder='Description' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="image">Title</label>
                    <span className="input">
                        <input type="text" name='imageUrl' id='image' placeholder='Image' />
                    </span>
                </p>
                <p className="field">
                    <label htmlFor="genre">Title</label>
                    <span className="input">
                        <input type="text" name='genre' id='genre' placeholder='Genre' />
                    </span>
                </p>
                <input class="btn" type="submit" value="Add Book"></input>
            </form>
        </section>
    );
}
