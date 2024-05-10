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
                <p className={style.titleText}>Nos complace presentarte nuestra amplia gama de servicios diseñados para realzar tu belleza y bienestar. En nuestra clínica, nos comprometemos a ofrecerte una experiencia integral y personalizada que satisfaga todas tus necesidades estéticas. A continuación, te detallamos nuestros servicios especializados</p>
            </div>
            <div className={style.services}>
                {services.map((service) => (
                    <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} product={service.product} sessions={service.sessions} time={service.time} date={service.date} />
                ))}
            </div>
        </section>
    );
}
