import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";
import FreeValoration from "../../sections/FreeValoration/FreeValoration";
import Reviews from "../../sections/Reviews/Reviews";

export default function HomeView() {
    return (
        <section>
            <HomeHeader />
            <About />
            <Services />
            <FreeValoration />
            <Reviews />
        </section>
    );
}
