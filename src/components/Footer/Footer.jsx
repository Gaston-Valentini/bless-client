import style from "./Footer.module.css";
import logo from "../../assets/images/logo-white.png";
import { FaPhoneAlt, FaClock, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
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
                        623271806
                    </li>
                    <li className={style.dataInfoItem}>
                        <MdOutlineAlternateEmail />
                        bless@gmail.com
                    </li>
                    <li className={style.dataInfoItem}>
                        <FaClock />
                        09:00 - 17:00
                    </li>
                    <li className={style.dataInfoItem}>
                        <FaLocationDot />
                        Av. Vicente Lorca Alós 15
                    </li>
                </ul>
            </div>
            <div className={style.social}>
                <p className={style.socialTitle}>Suíguenos</p>
                <ul className={style.socialIcons}>
                    <li>
                        <a href="#">
                            <FaInstagram />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <FaWhatsapp />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
