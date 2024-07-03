import { useContext, useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { AppContext, Gamer } from "../DataProvider";
import Loading from "./Loading";
import Card from "./Card";

const Home: React.FC = () => {
    const context = useContext(AppContext);
    const [data, setData] = useState<Gamer[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const loadSuggestions = async () => {
            if (context?.loadSuggestions) {
                try {
                    const suggestions = await context.loadSuggestions();
                    setData(suggestions);
                } catch (err) {
                    setError('Ошибка загрузки данных');
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
                setError('Context is not available');
            }
        };
        loadSuggestions();
    }, []);

    const nextCard = () => {
        setIndex((prevIndex) => prevIndex + 1);
    }

    if (loading) {
        return (
            <>
                <Sidebar />
                <div className="backpage">
                    <Loading/>
                </div>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Sidebar />
                <div className="backpage">
                    <p className="text-center underline text-3xl">{error}</p>
                </div>
            </>
        );
    }

    
    return (
        <>
            <Sidebar />
            <div className="backpage">
                {data && data.length > 0 ? (
                    <div className="flex flex-col mx-auto my-auto">
                        <Card gamer={data[index]} />
                        <button className="button-uni" onClick={nextCard}>Next</button>
                    </div>
                ) : (
                    <p>Больше нет рекомендаций!</p>
                )}
            </div>
        </>
    );
    
}

export default Home;