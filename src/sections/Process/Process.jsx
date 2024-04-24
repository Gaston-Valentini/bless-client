import style from "./Process.module.css";
import { IoIosArrowForward } from "react-icons/io";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function Process() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>Nuestros servicios</p>
                    <hr />
                </div>
                <p className={style.titleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus error odit, laborum a nesciunt. Reprehenderit aspernatur, dignissimos tenetur perspiciatis veritatis, accusamus, cupiditate nostrum fugiat quae adipisci facilis explicabo exercitationem?</p>
            </div>
            <div className={style.process}>
                <div className={style.processElement}>
                    <div className={style.processElementTitle}>
                        <p className={style.processElementTitleText}>RESEARCH</p>
                        <p className={style.processElementTitleNumber}>1</p>
                    </div>
                    <div className={style.processElementText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ad, aspernatur saepe numquam eligendi consequuntur ipsum facilis iste quo praesentium ut ratione perferendis, similique, provident exercitationem porro magni et.</div>
                    <FaMagnifyingGlass className={style.processElementIcon} />
                </div>
                <div className={style.processDivisor}>
                    <hr />
                    <IoIosArrowForward />
                    <hr />
                </div>
                <div className={style.processElement}>
                    <div className={style.processElementTitle}>
                        <p className={style.processElementTitleText}>RESEARCH</p>
                        <p className={style.processElementTitleNumber}>2</p>
                    </div>
                    <div className={style.processElementText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ad, aspernatur saepe numquam eligendi consequuntur ipsum facilis iste quo praesentium ut ratione perferendis, similique, provident exercitationem porro magni et.</div>
                    <FaMagnifyingGlass className={style.processElementIcon} />
                </div>
                <div className={style.processDivisor}>
                    <hr />
                    <IoIosArrowForward />
                    <hr />
                </div>
                <div className={style.processElement}>
                    <div className={style.processElementTitle}>
                        <p className={style.processElementTitleText}>RESEARCH</p>
                        <p className={style.processElementTitleNumber}>3</p>
                    </div>
                    <div className={style.processElementText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ad, aspernatur saepe numquam eligendi consequuntur ipsum facilis iste quo praesentium ut ratione perferendis, similique, provident exercitationem porro magni et.</div>
                    <FaMagnifyingGlass className={style.processElementIcon} />
                </div>
                <div className={style.processDivisor}>
                    <hr />
                    <IoIosArrowForward />
                    <hr />
                </div>
                <div className={style.processElement}>
                    <div className={style.processElementTitle}>
                        <p className={style.processElementTitleText}>RESEARCH</p>
                        <p className={style.processElementTitleNumber}>4</p>
                    </div>
                    <div className={style.processElementText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem alias ad, aspernatur saepe numquam eligendi consequuntur ipsum facilis iste quo praesentium ut ratione perferendis, similique, provident exercitationem porro magni et.</div>
                    <FaMagnifyingGlass className={style.processElementIcon} />
                </div>
            </div>
        </section>
    );
}
