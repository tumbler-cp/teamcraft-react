import { FormEvent, useContext, useState } from "react";
import { UserContext } from "../../UserProvider";

const Signup = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const userContext = useContext(UserContext);

    if (!userContext) {
        throw new Error('UserContext is not defined');
    }

    const {signup} = userContext;

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        signup(username, email, password);
    };

    return (
        <div className="flex h-screen w-screen bg-dark-3">
            <form className="mx-auto my-auto align-middle object-center w-auto flex flex-col p-16 rounded-xl bg-dark-2 shadow-xl" onSubmit={handleSubmit}>
                <p className="text-center mt-6 mb-6 text-2xl text-light font-bold">Регистрация</p>
                <input className="input-auth" placeholder="Никнейм" type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                <input className="input-auth" placeholder="Эл. почта" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input className="input-auth" placeholder="Пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                <input className="input-auth" placeholder="Подтвердить пароль" type="password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                <button className="button-uni mx-auto mt-6 mb-6 font-semibold" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default Signup;