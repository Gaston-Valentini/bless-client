import style from "./ViewHeader.module.css";

export default function ViewHeader({ title, subtitle, background }) {
    return (
        <section className={style.container} style={{ backgroundImage: `url(${background})` }}>
            <div className={style.overlay}>
                <p className={style.title}>{title}</p>
                <p className={style.subtitle}>{subtitle}</p>
            </div>
        </section>
    );
}
