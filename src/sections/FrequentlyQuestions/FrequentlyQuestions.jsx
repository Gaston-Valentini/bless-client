import style from "./FrequentlyQuestions.module.css";
import { questions } from "../../data/data";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

export default function FrequentlyQuestions() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>Nuestros servicios</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus error odit, laborum a nesciunt.
                    Reprehenderit aspernatur, dignissimos tenetur perspiciatis veritatis, accusamus, cupiditate nostrum fugiat
                    quae adipisci facilis explicabo exercitationem?
                </p>
            </div>
            <div className={style.questions}>
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question.question} answer={question.answer} />
                ))}
            </div>
            <div className={style.contact}>
                <p className={style.contactText}>¿Tu duda no se encuentra aquí?</p>
                <a href="#" className={style.contactLink}>
                    Escríbenos
                </a>
            </div>
        </section>
    );
}
