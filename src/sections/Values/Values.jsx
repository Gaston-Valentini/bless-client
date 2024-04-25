import style from "./Values.module.css";
import { FaBullseye } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

export default function Values() {
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
            <div className={style.values}>
                <div className={style.valuesCard}>
                    <FaBullseye className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>MISIÓN</p>
                        <p className={style.valuesCardDataText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione culpa soluta in rem.</p>
                    </div>
                </div>
                <div className={style.valuesCard}>
                    <FaRegEye className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>VISIÓN</p>
                        <p className={style.valuesCardDataText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione culpa soluta in rem.</p>
                    </div>
                </div>
                <div className={style.valuesCard}>
                    <IoDiamondOutline className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>VALORES</p>
                        <p className={style.valuesCardDataText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ratione culpa soluta in rem.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
