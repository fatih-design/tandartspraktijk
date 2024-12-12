import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';

function NotFound(props) {

    return (
        <>
            <main className="page-container-not-found">
                <h2>Oops page does not exist</h2>
                <p>Page NotFound. Take me to <Link to="/">Home page.</Link> </p>
            </main>
        </>
    );

}

export default NotFound;
