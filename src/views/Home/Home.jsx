import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import FreeValoration from "../../sections/FreeValoration/FreeValoration";

export default function HomeView() {
    return (
        <section>
            <HomeHeader />
            <About />
            <Services />
            <FreeValoration />
        </section>
    );
}
