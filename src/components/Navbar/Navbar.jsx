import style from "./Navbar.module.css";
import logo from "../../assets/images/logo-rose.png";
import { FaBars } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const switchOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={style.container}>
            <div className={style.image}>
                <img src={logo} />
            </div>
            <FaBars className={style.bars} onClick={switchOpen} />
            <div className={!isOpen ? style.overlay : `${style.overlay} ${style.overlayOpen}`}>
                <ul className={!isOpen ? style.links : `${style.links} ${style.linksOpen}`}>
                    <IoCloseCircleOutline className={style.linksClose} onClick={switchOpen} />
                    <li className={style.linksLink}>
                        <Link to={"/"} onClick={switchOpen}>
                            Inicio
                        </Link>
                    </li>
                    <li className={style.linksLink}>
                        <Link to={"/services"} onClick={switchOpen}>
                            Servicios
                        </Link>
                    </li>
                    <li className={style.linksLink}>
                        <Link to={"/questions"} onClick={switchOpen}>
                            Preguntas Frecuentes
                        </Link>
                    </li>
                    <li className={style.linksLink}>
                        <Link to={"/contact"} onClick={switchOpen}>
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
