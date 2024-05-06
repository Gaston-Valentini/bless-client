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
                    <p>En que creemos</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    En BLESS, nos esforzamos por ser más que una simple compañía; nuestro objetivo es ser un referente en la
                    industria gracias a nuestros valores fundamentales que guían cada uno de nuestros pasos y decisiones.
                </p>
            </div>
            <div className={style.values}>
                <div className={style.valuesCard}>
                    <FaBullseye className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>MISIÓN</p>
                        <p className={style.valuesCardDataText}>
                            Mejorar la confianza de nuestros clientes mediante tratamientos seguros y personalizados.
                        </p>
                    </div>
                </div>
                <div className={style.valuesCard}>
                    <FaRegEye className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>VISIÓN</p>
                        <p className={style.valuesCardDataText}>
                            Ser referente en innovación y excelencia en la estética clínica a nivel nacional.
                        </p>
                    </div>
                </div>
                <div className={style.valuesCard}>
                    <IoDiamondOutline className={style.valuesCardIcon} />
                    <div className={style.valuesCardData}>
                        <p className={style.valuesCardDataTitle}>VALORES</p>
                        <p className={style.valuesCardDataText}>
                            Compromiso, calidad, innovación, atención personalizada, integridad.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
