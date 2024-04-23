import style from "./FreeValoration.module.css";
import { Link } from "react-router-dom";

export default function FreeValoration() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <p className={style.title}>Tu primera valoración es GRATIS</p>
                <p className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione recusandae fugiat atque, et rerum veritatis placeat sit a. Perspiciatis expedita aperiam dolor optio, deleniti mollitia maiores officiis ipsa dignissimos voluptates.</p>
                <Link to="#" className={style.link}>
                    CONTÁCTANOS
                </Link>
            </div>
        </section>
    );
}
