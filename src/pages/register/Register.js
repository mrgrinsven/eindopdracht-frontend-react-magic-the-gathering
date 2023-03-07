import React, {useContext, useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import axios from 'axios';

import './Register.css'

import {AuthContext} from '../../context/AuthContext';

const Register = () => {
    const {setSuccessfulRegister} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [error, toggleError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, toggleLoading] = useState(false);

    const navigate = useNavigate();

    const registerController = new AbortController();

    useEffect(() => {
        return function cleanup() {
            registerController.abort();
        }
        // eslint-disable-next-line
    }, []);

    async function handleRegister(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        if (!email || !username || !password) {
            toggleError(true)
            setErrorMessage('Please fill in all fields')
        } else if (username.length < 6 || password.length < 6) {
            toggleError(true)
            setErrorMessage('Username and password must contain at least 6 characters')
        } else {
            try {
                await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    email: email,
                    username: username,
                    password: password,
                    role: ["user"]
                }, {
                    signal: registerController.signal
                });
                setSuccessfulRegister(true);
                navigate('/login');
            } catch (e) {
                if (e.response.data.message) {
                    setErrorMessage(e.response.data.message);
                } else {
                    setErrorMessage('Server error please try again later');
                    console.error(e)
                }
                toggleError(true);
            }
        }

        toggleLoading(false);
    }

    return (
        <div className="inner-container">

            <div className="register-container">
                <h1>Register</h1>


                <form
                    onSubmit={handleRegister}
                    className="register-form"
                >
                    <label
                        htmlFor="email-input-field"
                        className="register-label-text"
                    >
                        Email
                        <input
                            className="form-field-register"
                            type="email"
                            name="email"
                            id="email-input-field"
                            placeholder='Email'
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                        />
                    </label>

                    <label
                        htmlFor="username-input-field"
                        className="register-label-text"
                    >
                        Username
                        <input
                            className="form-field-register"
                            type="text"
                            name="username"
                            id="username-input-field"
                            placeholder="Username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                        />
                    </label>

                    <label
                        htmlFor="password-input-field"
                        className="register-label-text"
                    >
                        Password
                        <input
                            className="form-field-register"
                            type="password"
                            name="password"
                            id="password-input-field"
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                    </label>

                    {error &&
                        <p className='register-error'>{errorMessage}</p>
                    }
                    {loading &&
                        <p>Loading...</p>
                    }

                    <button
                        type='submit'
                        className="register-button"
                        disabled={loading}
                    >
                        Register
                    </button>
                </form>

                <p>Already have an account? <Link className="page-link" to="/login">Login here.</Link></p>
            </div>
        </div>
    );};

export default Register;