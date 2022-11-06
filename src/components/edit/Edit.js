import React from 'react';
import './Edit.css';

export const Edit = () => {
    return (
        <section className="edit__book">
            <form className="edit__form">
                <legend>Edit Book</legend>
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
                <input class="btn" type="submit" value="Edit Book"></input>
            </form>
        </section>
    );
}
