import style from "./Results.module.css";
import BeforeAfter from "../../components/BeforeAfter/BeforeAfter";
import BeforeOne from "../../assets/images/before-after/before-after-one.jpg";
import AfterOne from "../../assets/images/before-after/before-after-two.jpg";
import BeforeTwo from "../../assets/images/before-after/before-after-three.jpg";
import AfterTwo from "../../assets/images/before-after/before-after-four.jpg";
import BeforeFour from "../../assets/images/before-after/before-after-seven.jpg";
import AfterFour from "../../assets/images/before-after/before-after-eight.jpg";
import BeforeFive from "../../assets/images/before-after/before-after-nine.jpg";
import AfterFive from "../../assets/images/before-after/before-after-ten.jpg";
import BeforeSix from "../../assets/images/before-after/before-after-eleven.jpg";
import AfterSix from "../../assets/images/before-after/before-after-twelve.jpg";
import BeforeSeven from "../../assets/images/before-after/before-after-thirteen.jpg";
import AfterSeven from "../../assets/images/before-after/before-after-fourteen.jpg";
import BeforeEight from "../../assets/images/before-after/before-after-fifteen.jpg";
import AfterEight from "../../assets/images/before-after/before-after-sixteen.jpg";
import BeforeNine from "../../assets/images/before-after/before-after-seventeen.jpg";
import AfterNine from "../../assets/images/before-after/before-after-eighteen.jpg";
import BeforeTen from "../../assets/images/before-after/before-after-nineteen.jpg";
import AfterTen from "../../assets/images/before-after/before-after-twenty.jpg";
import BeforeEleven from "../../assets/images/before-after/before-after-twentyone.jpg";
import AfterEleven from "../../assets/images/before-after/before-after-twentytwo.jpg";
import BeforeTwelve from "../../assets/images/before-after/before-after-twentythree.jpg";
import AfterTwelve from "../../assets/images/before-after/before-after-twentyfour.jpg";
import BeforeThirteen from "../../assets/images/before-after/before-after-twentyfive.jpg";
import AfterThirteen from "../../assets/images/before-after/before-after-twentysix.jpg";

export default function Results() {
    return (
        <section className={style.container}>
            <div className={style.dataTitle}>
                <div className={style.dataTitleMain}>
                    <hr />
                    <p>RESULTADOS</p>
                    <hr />
                </div>
                <p className={style.dataTitleText}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia consectetur nesciunt inventore. Officiis sunt tenetur rem, officia distinctio inventore doloribus at sint omnis
                    enim nemo explicabo alias veniam illum asperiores.
                </p>
            </div>
            <div className={style.cards}>
                <BeforeAfter before={BeforeOne} after={AfterOne} name={"Russian lips"} />
                <BeforeAfter before={BeforeTwo} after={AfterTwo} name={"Mentón y labios"} />
                <BeforeAfter before={BeforeFour} after={AfterFour} name={"Pómulos"} />
                <BeforeAfter before={BeforeFive} after={AfterFive} name={"Rinolips"} />
                <BeforeAfter before={BeforeSix} after={AfterSix} name={"Rinolips"} />
                <BeforeAfter before={BeforeSeven} after={AfterSeven} name={"Relleno de ojeras"} />
                <BeforeAfter before={BeforeEight} after={AfterEight} name={"Russian lips"} />
                <BeforeAfter before={BeforeNine} after={AfterNine} name={"Marcación mandibular"} />
                <BeforeAfter before={BeforeTen} after={AfterTen} name={"Russian lips"} />
                <BeforeAfter before={BeforeEleven} after={AfterEleven} name={"Rinomodelación"} />
                <BeforeAfter before={BeforeTwelve} after={AfterTwelve} name={"Neouromoduladores"} />
                <BeforeAfter before={BeforeThirteen} after={AfterThirteen} name={"Neouromoduladores"} />
            </div>
        </section>
    );
}
