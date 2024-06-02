import style from "./FreeValoration.module.css";
import { Link } from "react-router-dom";

export default function FreeValoration() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <p className={style.title}>Todas tus valoraciones y diagnósticos son GRATIS</p>
                <p className={style.text}>
                    Sabemos que cada persona es única y que elegir los tratamientos adecuados es una decisión importante. Por eso, cualquiera de tus
                    consultas será gratuita sin compromiso. Nuestro objetivo es proporcionarte toda la información y asesoramiento que necesitas para
                    tomar una decisión a favor de tu cuidado y bienestar. ¡Reserva tu cita hoy y descubre cómo podemos ayudarte a realzar y potenciar
                    tu belleza natural!
                </p>
                <Link to="/contact" className={style.link} onClick={() => window.scrollTo(0, 0)}>
                    CONTÁCTANOS
                </Link>
            </div>
        </section>
    );
}
