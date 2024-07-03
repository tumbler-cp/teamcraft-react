import axios from "axios";
import { createContext, useState } from "react";
import { ReactNode } from "react";

interface User {
    username: string;
    email: string;
}

interface UserContextType {
    user: User | null;
    signin: (email: string, password: string) => Promise<void>;
    signup: (username: string, email: string, password: string) => Promise<void>;
    checkToken: () => Promise<void>;
}

export const UserContext = createContext<UserContextType | undefined> (undefined);

interface UserProviderProps {
    children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [user, setUser] = useState<User | null> (null);

    const signin = async (email: string, password: string) => {
        try {
            const response = await axios.post('/signin',
                {email, password}
            );
            setUser(response.data.user);
            localStorage.setItem('teamcraft_token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('teamcraft_token')}`;
        } catch (error) {
            console.error('Error during signing in. Details: ', error);
        }
    };

    const signup = async (username: string, email: string, password: string) => {
        try {
            const response = await axios.post('/signup',
                {username, email, password}
            );
            setUser(response.data.user);
            localStorage.setItem('teamcraft_token', response.data.token);
            axios.defaults.headers.common['Authorization'] = `Token ${localStorage.getItem('teamcraft_token')}`;
        } catch (error) {
            console.error('Error during signin up. Details', error);
        }
    };

    const checkToken = async () => {
        const token = localStorage.getItem('teamcraft_token');
        if (token) {
            try {
                const response = await axios.get('/token', {
                    headers: {
                        Authorization: `Token ${token}`
                    }
                });
                console.log(response.data);
            } catch (error) {
                console.error('Token check failed', error);
            }
        }
    };

    return (
        <UserContext.Provider value={{ user, signin, signup, checkToken }}>
            {children}
        </UserContext.Provider>
    );
}