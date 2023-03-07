import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

import './Login.css'

import {AuthContext} from '../../context/AuthContext';

const Login = () => {
    const {login, successfulRegister} = useContext(AuthContext);

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, toggleLoading] = useState(false);

    const loginController = new AbortController();

    useEffect(() => {

        return function cleanup() {
            loginController.abort();
            console.log('cleanuptest')
        }
        // eslint-disable-next-line
    },[]);

    async function handlePassword(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        if (!user || !password) {
            toggleError(true)
            setErrorMessage('Please fill in all fields')
        } else if (user.length < 6 || password.length < 6) {
            toggleError(true)
            setErrorMessage('Incorrect username or password')
        } else {
            try {
                const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                    username: user,
                    password: password,
                }, {
                    signal: loginController.signal
                });

                login(result.data.accessToken);

            } catch (e) {
                if (e.code === 'ERR_BAD_REQUEST') {
                    setErrorMessage('Incorrect username or password')
                } else {
                    setErrorMessage('Server error please try again later')
                    console.error(e)
                }

                toggleError(true);
            }
        }
        toggleLoading(false);
    }

    return (
        <div className="inner-container">

        <div className="login-container">
            <h1>Login</h1>

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
                    <p className='password-warning'>{errorMessage}</p>
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

            {successfulRegister && <p className="successful-register-text">Your account was successfully created</p>}
        </div>
        </div>
    );
}

export default Login;