import ViewHeader from "../../components/ViewHeader/ViewHeader";
import headerBackground from "../../assets/images/headers/services-header.jpg";
import ServicesList from "../../sections/ServicesList/ServicesList";
import Results from "../../sections/Results/Results";

export default function ServicesView() {
    return (
        <section>
            <ViewHeader title="Servicios" subtitle="Conoce nuestros tratamientos" background={headerBackground} />
            <ServicesList />
            <Results />
        </section>
    );
}
