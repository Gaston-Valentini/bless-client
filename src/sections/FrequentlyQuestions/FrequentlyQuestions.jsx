import style from "./FrequentlyQuestions.module.css";
import { questions } from "../../data/data";
import QuestionCard from "../../components/QuestionCard/QuestionCard";

export default function FrequentlyQuestions() {
    return (
        <section className={style.container}>
            <div className={style.questions}>
                {questions.map((question) => (
                    <QuestionCard key={question.id} question={question.question} answer={question.answer} />
                ))}
            </div>
        </section>
    );
}
