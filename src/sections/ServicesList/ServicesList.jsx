import style from "./ServicesList.module.css";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import { services } from "../../data/data";

export default function ServicesList() {
    return (
        <section className={style.container}>
            <p className={style.title}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi ducimus doloremque reprehenderit, illo quam ut at cum rem quas commodi accusamus cumque perferendis eius quo et nam optio omnis quis?</p>
            <div className={style.services}>
                {services.map((service) => (
                    <ServiceCard key={service.id} title={service.title} description={service.description} image={service.image} />
                ))}
            </div>
        </section>
    );
}
