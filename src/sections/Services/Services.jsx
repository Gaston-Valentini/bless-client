import style from "./Services.module.css";
import { GiLips } from "react-icons/gi";
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
                <p className={style.titleText}>
                    {" "}
                    Estamos muy orgullosos de ofrecerte una amplia gama de servicios diseñados para realzar tu belleza natural y
                    potenciar tu confianza.
                </p>
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardTitle}>Russian Lips</p>
                    <p className={style.cardsCardText}>Labios voluminosos, belleza natural, técnica exclusiva</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardTitle}>Tratamiento Antiarrugas</p>
                    <p className={style.cardsCardText}>Arrugas desvanecen, juventud vuelve, renueva belleza facial</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardTitle}>Armonización</p>
                    <p className={style.cardsCardText}>Rostro equilibrado, belleza armonizada</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardTitle}>Biorepeel</p>
                    <p className={style.cardsCardText}>Renovación profunda, piel radiante</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardTitle}>PRP</p>
                    <p className={style.cardsCardText}>Renovación profunda, piel radiante</p>
                </div>
            </div>
            <Link to={"/services"} className={style.link} onClick={() => window.scrollTo(0, 0)}>
                Más información
            </Link>
        </section>
    );
}
