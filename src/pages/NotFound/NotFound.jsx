import React from 'react';
import './NotFound.css';
import {Link} from 'react-router-dom';
import Header from '../../components/header/Header.jsx';

function NotFound(props) {

    return (
        <>
            <main>
                <h2>Oops page does not exist</h2>
                <p>Page NotFound. Take me to <Link to="/">Home page.</Link> </p>
            </main>
        </>
    );

}

export default NotFound;
