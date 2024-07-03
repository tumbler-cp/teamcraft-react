import React, { ReactNode, createContext, useContext, useState } from "react";
import { UserContext } from "./UserProvider";
import axios from "axios";

export interface Game {
    id: number;
    name: string;
    icon: string;
    description: string;
}

export interface Gamer {
    id: number;
    user: number;
    description: string;
    avatar: string;
    avatar_url: string;
    games: Game[];
}

interface AppContextType {
    gamer: Gamer | null;
    games: Game[] | null;
    suggestions: Gamer[] | null;
    loadGamer: () => Promise<Gamer | null>;
    loadSuggestions: () => Promise<Gamer[] | null>;
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

interface DataProviderProps {
    children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [gamer, setGamer] = useState<Gamer | null>(null);
    const [suggestions, setSuggestions] = useState<Gamer[] | null>(null);
    const [games, setGames] = useState<Game[] | null>(null);
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext is not defined');
    }

    const getUserGamer = async () => {
        try {
            const username = userContext.user?.username;
            const response = await axios.get(`/core/gamer?username=${username}`);
            setGamer(response.data);
            setGames(response.data.games);
        } catch (error) {
            console.error('Error during fetching user data', error);
        }
    };

    const loadGamer = async () => {
        await getUserGamer();
        return gamer;
    }

    const getSuggestions = async () => {
        try {
            const response = await axios.get('core/suggestions');
            setSuggestions(response.data);
        } catch (error) {
            console.error('Error during fetching suggestions', error);
        }
    }

    const loadSuggestions = async () => {
        await getSuggestions();
        return suggestions;
    }

    return (
        <AppContext.Provider value={{ gamer, games, suggestions, loadGamer, loadSuggestions }}>
            {children}
        </AppContext.Provider>
    );
}