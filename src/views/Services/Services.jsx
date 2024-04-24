import ViewHeader from "../../components/ViewHeader/ViewHeader";
import headerBackground from "../../assets/images/services-header.jpg";
import ServicesList from "../../sections/ServicesList/ServicesList";

export default function ServicesView() {
    return (
        <section>
            <ViewHeader title="Servicios" subtitle="Conoce nuestros tratamientos" background={headerBackground} />
            <ServicesList />
        </section>
    );
}
