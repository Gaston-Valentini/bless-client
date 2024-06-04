import { useState } from "react";
import style from "./BeforeAfter.module.css";

export default function BeforeAfter({ before, after }) {
    const [opacity, setOpacity] = useState(0);

    const onBar = (e) => {
        setOpacity(e.target.value / 1000);
    };

    return (
        <section className={style.container}>
            <div className={style.images}>
                <div className={style.imagesBefore}>
                    <img src={before} />
                </div>
                <div className={style.imagesAfter} style={{ opacity: opacity }}>
                    <img src={after} />
                </div>
            </div>
            <div className={style.bar}>
                <div className={style.barText}>Antes</div>
                <input type="range" step={1} min={0} max={1000} defaultValue={0} onChange={onBar} />
                <div className={style.barText}>Después</div>
            </div>
        </section>
    );
}
