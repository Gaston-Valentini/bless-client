import style from "./ServiceCard.module.css";
import { BiInjection } from "react-icons/bi";
import { MdNumbers } from "react-icons/md";
import { FaRegClock, FaCalendarCheck } from "react-icons/fa";

export default function ServiceCard(props) {
    const { title, description, image, product, sessions, time, date } = props;
    console.log(props);

    return (
        <section className={style.container}>
            <div className={style.image}>
                <img src={image} />
            </div>
            <div className={style.data}>
                <p className={style.dataTitle}>{title}</p>
                <p className={style.dataDescription}>{description}</p>
                <div className={style.dataInfo}>
                    <div className={style.dataInfoElement}>
                        <BiInjection />
                        <p className={style.dataInfoElementText}>{product}</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <MdNumbers />
                        <p className={style.dataInfoElementText}>{sessions}</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <FaRegClock />
                        <p className={style.dataInfoElementText}>{time}</p>
                    </div>
                    <div className={style.dataInfoElement}>
                        <FaCalendarCheck />
                        <p className={style.dataInfoElementText}>{date}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
