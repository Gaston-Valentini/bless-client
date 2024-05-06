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
                        <p>Tamara</p>
                        <hr />
                    </div>
                    <p className={style.contentDataText}>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem ipsam, voluptates porro cum ea vel
                        accusamus unde. Ullam porro ea blanditiis, necessitatibus deleniti sapiente. Hic facere dolorem eaque
                        consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem ipsam, voluptates porro
                        cum ea vel accusamus unde. Ullam porro ea blanditiis, necessitatibus deleniti sapiente. Hic facere dolorem
                        eaque consectetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo autem ipsam, voluptates
                        porro cum ea vel accusamus unde. Ullam porro ea blanditiis, necessitatibus deleniti sapiente. Hic facere
                        dolorem eaque consectetur!
                    </p>
                    <a
                        href="https://www.instagram.com/blessaestheticmedicine/"
                        target="blank"
                        className={style.contentDataSocial}
                    >
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
