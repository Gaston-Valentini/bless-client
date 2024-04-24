import style from "./ServiceCard.module.css";

export default function ServiceCard({ title, description, image }) {
    return (
        <section className={style.container}>
            <div className={style.data}>
                <p className={style.dataTitle}>{title}</p>
                <p className={style.dataDescription}>{description}</p>
            </div>
            <div className={style.image}>
                <img src={image} />
            </div>
        </section>
    );
}
