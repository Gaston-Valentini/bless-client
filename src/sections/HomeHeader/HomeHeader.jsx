import style from "./HomeHeader.module.css";
import logo from "../../assets/images/logos/logo-white.png";

export default function HomeHeader() {
    return (
        <section className={style.container}>
            <div className={style.overlay}>
                <div className={style.logo}>
                    <img src={logo} />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200" className={style.wave}>
                    <path
                        fill="white"
                        fill-opacity="1"
                        d="M0,96L80,117.3C160,139,320,181,480,170.7C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,200L1360,200C1280,200,1120,200,960,200C800,200,640,200,480,200C320,200,160,200,80,200L0,200Z"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
