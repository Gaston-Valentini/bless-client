import style from "./ServicesList.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../data/data";

export default function ServicesList() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>Nuestros servicios</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus error odit, laborum a nesciunt.
                    Reprehenderit aspernatur, dignissimos tenetur perspiciatis veritatis, accusamus, cupiditate nostrum fugiat
                    quae adipisci facilis explicabo exercitationem?
                </p>
            </div>
            <div className={style.services}>
                {services.map((service) => (
                    <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} />
                ))}
            </div>
        </section>
    );
}
