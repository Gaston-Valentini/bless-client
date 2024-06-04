import style from "./Services.module.css";
import russianLips from "../../assets/images/treatments-icons/russian-lips-icon.png";
import antiWrinkles from "../../assets/images/treatments-icons/anti-wrinkle-treatment-icon.png";
import biorepeel from "../../assets/images/treatments-icons/biorepeel-icon.png";
import prp from "../../assets/images/treatments-icons/prp-icon.png";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>TRATAMIENTOS</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    {" "}
                    Contamos con una amplia gama de servicios diseñados para realzar tu belleza natural y potenciar tu confianza.
                </p>
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={russianLips} />
                    </div>
                    <p className={style.cardsCardTitle}>Russian Lips</p>
                    <p className={style.cardsCardText}>Labios desde naturales a voluminosos, técnica exclusiva sin efecto "boca de pato"</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={prp} />
                    </div>
                    <p className={style.cardsCardTitle}>Ácido hialurónico</p>
                    <p className={style.cardsCardText}>Belleza armonizada y rostro equilibrado</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={biorepeel} />
                    </div>
                    <p className={style.cardsCardTitle}>Cuidado de la piel</p>
                    <p className={style.cardsCardText}>Piel radiante, sana y renovada</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={antiWrinkles} />
                    </div>
                    <p className={style.cardsCardTitle}>Antienvejecimiento</p>
                    <p className={style.cardsCardText}>Revertir y prevenir los signos de la edad</p>
                </div>
            </div>
            <Link to={"/services"} className={style.link} onClick={() => window.scrollTo(0, 0)}>
                Más información
            </Link>
        </section>
    );
}
