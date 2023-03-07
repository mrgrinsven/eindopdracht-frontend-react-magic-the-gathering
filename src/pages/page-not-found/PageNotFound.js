import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";

import './PageNotFound.css'

const PageNotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {

        setTimeout(() => {
            navigate('/')
        }, 10000);
        return function cleanup() {
            clearTimeout();
        }
    }, []);

    return (
        <div className="inner-container">
            <div className="page-not-found-container">
                <h1>PAGE NOT FOUND</h1>
                <h2>YOU WILL BE REDIRECTED BACK TO THE HOMEPAGE</h2>
            </div>
        </div>
    );
};

export default PageNotFound;