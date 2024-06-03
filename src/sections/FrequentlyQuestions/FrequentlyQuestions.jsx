import style from "./FrequentlyQuestions.module.css";
import { Link } from "react-router-dom";
import { questions } from "../../data/data";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

export default function FrequentlyQuestions() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>PREGUNTAS Y RESPUESTAS</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    Entendemos que puedas tener preguntas antes de decidirte por un tratamiento estético. Es por eso que hemos compilado una lista de
                    las preguntas más frecuentes para ayudarte a obtener las respuestas que necesitas de forma rápida y clara.
                </p>
            </div>
            <div className={style.questions}>
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question.question} answer={question.answer} />
                ))}
            </div>
            <div className={style.contact}>
                <p className={style.contactText}>¿Tu duda no se encuentra aquí?</p>
                <Link to={"/contact"} className={style.contactLink} onClick={() => window.scrollTo(0, 0)}>
                    Escríbenos
                </Link>
            </div>
        </section>
    );
}
