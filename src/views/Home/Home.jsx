import HomeHeader from "../../sections/HomeHeader/HomeHeader";
import About from "../../sections/About/About";
import Services from "../../sections/Services/Services";

export default function HomeView() {
    return (
        <section>
            <HomeHeader />
            <About />
            <Services />
        </section>
    );
}
