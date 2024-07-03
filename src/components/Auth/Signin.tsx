import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../../UserProvider";
import { useNavigate } from "react-router-dom";

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userContext = useContext(UserContext);
    const navigate = useNavigate();

    if (!userContext) {
        throw new Error('UserContext is not defined');
    }

    const {signin} = userContext;

    const handleSubmit = (e: FormEvent) => {
        try {
            e.preventDefault();
            signin(email, password);
            navigate('/');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="flex h-screen w-screen bg-dark-3">
            <form className="mx-auto my-auto align-middle object-center w-96 flex flex-col p-5 rounded-xl bg-dark-2 shadow-xl" onSubmit={handleSubmit}>
                <p className="text-center mt-6 mb-6 text-2xl text-light font-bold">Авторизация</p>
                <input className="input-auth" placeholder="Эл. почта" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="input-auth" placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <button className="button-uni mx-auto mt-6 mb-6 font-semibold" type="submit">Войти</button>
            </form>
        </div>
    );
}

export default Signin;