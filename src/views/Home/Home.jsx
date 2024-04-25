import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import FreeValoration from "../../sections/FreeValoration/FreeValoration";
import Process from "../../sections/Process/Process";
import Values from "../../sections/Values/Values";
import Gallery from "../../sections/Galery/Gallery";

export default function HomeView() {
    return (
        <section>
            <HomeHeader />
            <About />
            <Services />
            <FreeValoration />
            <Process />
            <Values />
            <Gallery />
        </section>
    );
}
