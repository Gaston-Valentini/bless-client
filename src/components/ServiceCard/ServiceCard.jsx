import { useState } from "react";
import style from "./ServiceCard.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { BiInjection } from "react-icons/bi";
import { MdNumbers } from "react-icons/md";
import { FaRegClock, FaCalendarCheck } from "react-icons/fa";

export default function ServiceCard(props) {
    const { title, description, image, product, sessions, time, date } = props;
    const [showInfo, setShowInfo] = useState(false);

    const toggleInfo = () => {
        setShowInfo(!showInfo);
    };

    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleText}>{title}</div>
                <IoIosArrowDown onClick={toggleInfo} style={showInfo ? { transform: "rotate(180deg)" } : {}} />
            </div>
            {showInfo && (
                <div className={style.content}>
                    <div className={style.contentImage}>
                        <div className={style.contentImageContainer}>
                            <img src={image} alt={title} />
                        </div>
                    </div>
                    <div className={style.contentData}>
                        <p className={style.contentDataText}>{description}</p>
                        <div className={style.contentDataNumbers}>
                            <div className={style.contentDataNumbersElement}>
                                <BiInjection />
                                <p>{product}</p>
                            </div>
                            <div className={style.contentDataNumbersElement}>
                                <MdNumbers />
                                <p>{sessions}</p>
                            </div>
                            <div className={style.contentDataNumbersElement}>
                                <FaRegClock />
                                <p>{time}</p>
                            </div>
                            <div className={style.contentDataNumbersElement}>
                                <FaCalendarCheck />
                                <p>{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
