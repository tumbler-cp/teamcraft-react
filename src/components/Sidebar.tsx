import { FaCheckDouble, FaHouse, FaMessage } from "react-icons/fa6";
import { IoPerson } from "react-icons/io5";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg"

const Sidebar = () => {
    return (
        <nav className="fixed top-0 h-screen w-48 m-0
        flex flex-col
        bg-dark-4 text-light shadow">
            <img className="mx-12 my-12 drop-shadow-2xl" src={logo}/>
            <SideBarIcon to="/" icon={<FaHouse className="drop-shadow-md" size={50}/>} text="Главная"/>
            <SideBarIcon to="matches" icon={<FaCheckDouble className="drop-shadow-md" size={50}/>} text="Совпадения"/>
            <SideBarIcon to="messages" icon={<FaMessage className="drop-shadow-md" size={50}/>} text="Сообщения"/>
            <SideBarIcon to="profile" icon={<IoPerson className="drop-shadow-md" size={50}/>} text="Профиль"/>
        </nav>
    );
}

interface SideBarIconProps {
    icon: ReactNode;
    text?: string;
    to: string;
}

const SideBarIcon = ({ icon, text = 'Default', to }: SideBarIconProps) => {
    return (
        <Link to={to} className="sidebar-icon group">
            {icon}
            <span className="sidebar-tooltip group-hover:scale-100">
                    {text}
            </span>
        </Link>
    );
}

export default Sidebar;