import style from "./About.module.css";
import image from "../../assets/images/tamara.jpg";
import { FaInstagram } from "react-icons/fa";

export default function About() {
    return (
        <section className={style.container}>
            <div className={style.content}>
                <div className={style.contentData}>
                    <div className={style.contentDataTitle}>
                        <hr />
                        <p>CARTA DE DIRECCIÓN</p>
                        <hr />
                    </div>
                    <p className={style.contentDataText}>
                        Bienvenidas/os a Bless Aesthetic Medicine, mi nombre es Tamara, directora de esta nuestra clínica, especializada en medicina
                        estética, creada y pensada con la firme intención de aportar seguridad y mejorar la autoestima de mujeres y hombres a través
                        de potenciar y mejorar aquellas características innatas que tenemos por naturaleza, primando resultados exitosos y la
                        seguridad en cada tratamiento.
                        <br />
                        <br />
                        Reunimos los mejores profesionales con años de experiencia y las técnicas más exclusivas adquiridas en formaciones no solo a
                        nivel nacional si no también internacionalmente, nunca dejamos de aprender para poder ofreceros las últimas tendencias en el
                        sector.
                        <br />
                        <br />
                        Nuestra misión consiste en aportar todo el conocimiento a nuestras/os pacientes, puesto que el conocimiento es seguridad,
                        realizar un diagnóstico exhaustivo y valorar las mejores opciones para cada caso ya que cada uno cuenta con unas necesidades y
                        objetivos diferentes.
                        <br />
                        <br />
                        Nuestra misión consiste en aportar todo el conocimiento a nuestras/os pacientes, puesto que el conocimiento es seguridad,
                        realizar un diagnóstico exhaustivo y valorar las mejores opciones para cada caso ya que cada uno cuenta con unas necesidades y
                        objetivos diferentes.
                        <br />
                        <br />
                        Estamos a vuestra disposición para lograr vuestros objetivos y con ello que logremos una mejora de la autoconfianza para
                        nuestro día a día.
                    </p>
                    <a href="https://www.instagram.com/blessaestheticmedicine/" target="blank" className={style.contentDataSocial}>
                        <FaInstagram />
                        <p>Instagram</p>
                    </a>
                </div>
                <div className={style.contentImage}>
                    <img src={image} />
                </div>
            </div>
        </section>
    );
}
