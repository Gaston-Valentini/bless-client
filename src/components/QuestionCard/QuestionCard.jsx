import style from "./QuestionCard.module.css";
import { FaQuestionCircle } from "react-icons/fa";

export default function QuestionCard({ question, answer }) {
    return (
        <section className={style.container}>
            <FaQuestionCircle className={style.icon} />
            <div className={style.text}>
                <div className={style.textQuestion}>{question}</div>
                <div className={style.textAnswer}>{answer}</div>
            </div>
        </section>
    );
}
