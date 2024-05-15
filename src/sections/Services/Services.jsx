import style from "./Services.module.css";
import russianLips from "../../assets/images/russian-lips-icon.png";
import antiWrinkles from "../../assets/images/anti-wrinkle-treatment-icon.png";
import biorepeel from "../../assets/images/biorepeel-icon.png";
import prp from "../../assets/images/prp-icon.png";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>Tratamientos</p>
                    <hr />
                </div>
                <p className={style.titleText}> Estamos muy orgullosos de ofrecerte una amplia gama de servicios diseñados para realzar tu belleza natural y potenciar tu confianza.</p>
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={russianLips} />
                    </div>
                    <p className={style.cardsCardTitle}>Russian Lips</p>
                    <p className={style.cardsCardText}>Labios voluminosos, belleza natural, técnica exclusiva</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={prp} />
                    </div>
                    <p className={style.cardsCardTitle}>Ácido hialurónico</p>
                    <p className={style.cardsCardText}>Rostro equilibrado, belleza armonizada</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={biorepeel} />
                    </div>
                    <p className={style.cardsCardTitle}>Cuidado de la piel</p>
                    <p className={style.cardsCardText}>Renovación profunda, piel radiante</p>
                </div>
                <div className={style.cardsCard}>
                    <div className={style.cardsCardImage}>
                        <img src={antiWrinkles} />
                    </div>
                    <p className={style.cardsCardTitle}>Antienvejecimiento</p>
                    <p className={style.cardsCardText}>Arrugas desvanecen, juventud vuelve, renueva belleza facial</p>
                </div>
            </div>
            <Link to={"/services"} className={style.link} onClick={() => window.scrollTo(0, 0)}>
                Más información
            </Link>
        </section>
    );
}
