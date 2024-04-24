import ViewHeader from "../../components/ViewHeader/ViewHeader";
import headerBackground from "../../assets/images/frequently-questions.jpg";
import FrequentlyQuestions from "../../sections/FrequentlyQuestions/FrequentlyQuestions";

export default function QuestionsView() {
    return (
        <section>
            <ViewHeader title="Preguntas frecuentes" subtitle="Respondemos cualquiera de tus dudas" background={headerBackground} />
            <FrequentlyQuestions />
        </section>
    );
}
