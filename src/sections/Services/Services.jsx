import style from "./Services.module.css";
import { GiLips } from "react-icons/gi";
import { Link } from "react-router-dom";

export default function Services() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>Nuestros servicios</p>
                    <hr />
                </div>
                <p className={style.titleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus error odit, laborum a nesciunt. Reprehenderit aspernatur, dignissimos tenetur perspiciatis veritatis, accusamus, cupiditate nostrum fugiat quae adipisci facilis explicabo exercitationem?</p>
            </div>
            <div className={style.cards}>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, explicabo?</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, explicabo?</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, explicabo?</p>
                </div>
                <div className={style.cardsCard}>
                    <GiLips />
                    <p className={style.cardsCardText}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis, explicabo?</p>
                </div>
            </div>
            <Link className={style.link}>Más información</Link>
        </section>
    );
}
