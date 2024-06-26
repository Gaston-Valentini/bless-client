import style from "./Footer.module.css";
import logo from "../../assets/images/logos/logo-white.png";
import { FaPhoneAlt, FaClock, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    const onWhatsapp = () => {
        const phone = "+34640996689";
        const message = "!Hola! Me gustaría recibir más información, mi nombre es: ";
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

        window.open(url);
    };

    return (
        <footer className={style.container}>
            <div className={style.logo}>
                <img src={logo} />
            </div>
            <div className={style.data}>
                <p className={style.dataTitle}>Más información</p>
                <ul className={style.dataInfo}>
                    <li className={style.dataInfoItem}>
                        <FaPhoneAlt />
                        +34648974660
                    </li>
                    <li className={style.dataInfoItem}>
                        <MdOutlineAlternateEmail />
                        blessaesthetic@gmail.com
                    </li>
                    <li className={style.dataInfoItem}>
                        <FaClock />
                        Atendemos bajo cita previa
                    </li>
                    <li className={style.dataInfoItem}>
                        <FaLocationDot />
                        Av. Europa 8, local PL32B, 03503
                    </li>
                </ul>
            </div>
            <div className={style.social}>
                <p className={style.socialTitle}>Síguenos</p>
                <ul className={style.socialIcons}>
                    <li>
                        <a href="https://www.instagram.com/blessaestheticmedicine/" target="blank">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <div onClick={onWhatsapp}>
                            <FaWhatsapp />
                        </div>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
