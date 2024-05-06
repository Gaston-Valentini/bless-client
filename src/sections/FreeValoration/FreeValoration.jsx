import style from "./FreeValoration.module.css";
import { Link } from "react-router-dom";

export default function FreeValoration() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <p className={style.title}>Tu primera valoración es GRATIS</p>
                <p className={style.text}>
                    Sabemos que cada persona es única y que elegir el tratamiento estético adecuado es una decisión importante.
                    Por eso, ofrecemos una primera consulta gratuita sin compromiso. Nuestro objetivo es proporcionarte toda la
                    información que necesitas para tomar una decisión informada sobre tu cuidado estético. ¡Reserva tu cita hoy y
                    descubre cómo podemos ayudarte a realzar tu belleza natural!
                </p>
                <Link to="/contact" className={style.link} onClick={() => window.scrollTo(0, 0)}>
                    CONTÁCTANOS
                </Link>
            </div>
        </section>
    );
}
