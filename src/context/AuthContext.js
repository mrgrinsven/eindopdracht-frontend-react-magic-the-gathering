import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

import tokenValidation from '../helpers/tokenValidation';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    //useState for authorization check ans user details
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    //useState for successful register indication
    const [successfulRegister, setSuccessfulRegister] = useState(false)

    const navigate = useNavigate();

    //useEffect to validate authentication token
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && tokenValidation(token)) {
            fetchUserData(token);
        } else {
            if (token) {
                localStorage.removeItem('token')
            }
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
        // eslint-disable-next-line
    }, []);

    //async function for fetching user data from authentication token
    async function fetchUserData(token, redirectUrl) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                }
            })

            setAuth({
                isAuth: true,
                user: {
                    id: response.data.id,
                    username: response.data.username,
                    email: response.data.email,
                    roles: response.data.roles
                },
                status: 'done'
            });

            if (redirectUrl) {
                navigate(redirectUrl);
            }

        } catch (e) {
            if (e.code === 'ERR_CANCELED') {
                console.log('controller successfully aborted')
            } else {
                console.error(e);
            }
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    //function for logging in
    function login(jwt) {
        localStorage.setItem('token', jwt)

        void fetchUserData(jwt, '/')
        console.log("User has successfully logged in ????")
    }

    //function for logout
    function logout() {
        localStorage.removeItem('token')
        setAuth({
            isAuth: false,
            user: null,
            status: 'done'
        });
        navigate('/');
        navigate(0);
        console.log("User has successfully logged out ????")
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
        successfulRegister: successfulRegister,
        setSuccessfulRegister: setSuccessfulRegister
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;