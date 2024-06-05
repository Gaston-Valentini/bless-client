import ViewHeader from "../../components/ViewHeader/ViewHeader";
import headerBackground from "../../assets/images/headers/before-after-header.jpg";
import Results from "../../sections/Results/Results";

export default function BeforeAfterView() {
    return (
        <section>
            <ViewHeader title={"Antes y después"} subtitle={"Pequeños cambio ofrecen radicales resultados"} background={headerBackground} />
            <Results />
        </section>
    );
}
