import style from "./Gallery.module.css";
import image1 from "../../assets/images/gallery-1.jpg";
import image2 from "../../assets/images/gallery-2.jpg";
import image3 from "../../assets/images/gallery-3.jpg";
import image4 from "../../assets/images/free-valoration.jpg";

export default function Gallery() {
    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>LA CLÍNICA</p>
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
            </div>
        </section>
    );
}
