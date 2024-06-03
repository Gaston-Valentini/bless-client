import style from "./ServicesList.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../data/data";

export default function ServicesList() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>NUESTROS SERVICIOS</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    A continuación nuestros tratamientos disponibles en clínica, diseñados para realzar y mejorar la armonía facial así como la salud
                    y bienestar de nuestros pacientes. En nuestra clínica, nos comprometemos a ofrecer una experiencia integral y personalizada que
                    satisfaga todas las necesidades y expectativas
                </p>
            </div>
            <div className={style.services}>
                {services.map((service) => (
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        description={service.description}
                        image={service.image}
                        product={service.product}
                        sessions={service.sessions}
                        time={service.time}
                        date={service.date}
                    />
                ))}
            </div>
        </section>
    );
}
