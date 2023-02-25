import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
import axios from 'axios';

import './Login.css'

const Login = () => {
    const {login} = useContext(AuthContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const loginController = new AbortController();

    useEffect(() => {
        return function cleanup() {
            loginController.abort();
            console.log('unmount')
        }
    },[]);

    async function handlePassword(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: user,
                password: password,
            }, {
                signal: loginController.signal
            });

            console.log(result.data);

            login(result.data.accessToken);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <div className="inner-container">

        <div className="login-container">
            <h1>Login</h1>


            <p>Fill in your username and password</p>
            <form
                onSubmit={handlePassword}
                className="login-form"
            >
                <label
                    htmlFor="username-field"
                    className="login-label-text"
                >
                    Username
                    <input
                        className="form-field-login"
                        type="text"
                        name="username"
                        id="username-field"
                        placeholder="Username"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}

                    />
                </label>

                <label
                    htmlFor="password-field"
                    className="login-label-text"
                >
                    Password
                    <input
                        className="form-field-login"
                        type="password"
                        name="password"
                        id="password-field"
                        placeholder='Password'
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </label>

                {error &&
                    <p className='password-warning'>Incorrect email or password</p>
                }
                {loading &&
                    <p>Loading...</p>
                }

                <button
                    type='submit'
                    className="login-button"
                >
                    log in
                </button>
            </form>

            <p>No account yet? <Link className="page-link" to="/register">Register here.</Link></p>
        </div>
        </div>
    );
}

export default Login;