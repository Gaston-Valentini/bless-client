import ViewHeader from "../../components/ViewHeader/ViewHeader";
import headerBackground from "../../assets/images/contact-header.jpg";
import ContactForm from "../../sections/ContactForm/ContactForm";
import Map from "../../sections/Map/Map";

export default function ContactView() {
    return (
        <section>
            <ViewHeader title="Contacto" subtitle="Disbonibles para lo que necesites" background={headerBackground} />
            <ContactForm />
            <Map />
        </section>
    );
}
