import style from "./Gallery.module.css";
import image1 from "../../assets/images/gallery-1.jpg";
import image2 from "../../assets/images/gallery-2.jpg";
import image3 from "../../assets/images/gallery-3.jpg";
import image4 from "../../assets/images/gallery-4.jpg";
import image5 from "../../assets/images/gallery-5.jpg";
import image6 from "../../assets/images/gallery-6.jpg";
import image7 from "../../assets/images/gallery-7.jpg";
import image8 from "../../assets/images/free-valoration.jpg";

export default function Gallery() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>La clínica</p>
                    <hr />
                </div>
                <p className={style.titleText}>Te dejamos una pequeña galería para que le eches un vistazo a nuestra clínica</p>
            </div>
            <div className={style.gallery}>
                <div className={style.image}>
                    <img src={image1} />
                </div>
                <div className={style.image}>
                    <img src={image2} />
                </div>
                <div className={style.image}>
                    <img src={image3} />
                </div>
                <div className={style.image}>
                    <img src={image4} />
                </div>
                <div className={style.image}>
                    <img src={image5} />
                </div>
                <div className={style.image}>
                    <img src={image6} />
                </div>
                <div className={style.image}>
                    <img src={image7} />
                </div>
                <div className={style.image}>
                    <img src={image8} />
                </div>
            </div>
        </section>
    );
}
