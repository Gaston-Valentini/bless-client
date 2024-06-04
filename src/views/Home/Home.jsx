import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import FreeValoration from "../../sections/FreeValoration/FreeValoration";
import Values from "../../sections/Values/Values";
import Gallery from "../../sections/Gallery/Gallery";

export default function HomeView() {
    return (
        <section>
            <HomeHeader />
            <About />
            <Services />
            <FreeValoration />
            <Values />
            <Gallery />
        </section>
    );
}
