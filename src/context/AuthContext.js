import {createContext, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import tokenValidation from '../helpers/tokenValidation';

export const AuthContext = createContext({});

function AuthContextProvider({children}) {

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });

    const navigate = useNavigate();

    const authController = new AbortController();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token && tokenValidation(token)) {
            void fetchUserData(token);
        } else {
            localStorage.removeItem('token')
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
            return function cleanup() {
                authController.abort();
            }
        }
    }, []);


    async function fetchUserData(token, redirectUrl) {
        try {
            const response = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                signal: authController.signal
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

            console.log(response);
        } catch (e) {
            console.error(e)
            setAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    function login(jwt) {
        localStorage.setItem('token', jwt)

        void fetchUserData(jwt, '/')
        console.log("De gebruiker is ingelogd 🔓")
    }

    function logout() {
        localStorage.removeItem('token')
        setAuth({
            isAuth: false,
            user: null,
            status: 'done'
        });
        navigate('/');
        console.log("De gebruiker is uitgelogd 🔒")
    }

    const contextData = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout
    }

    return (
        <AuthContext.Provider value={contextData}>
            {auth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;