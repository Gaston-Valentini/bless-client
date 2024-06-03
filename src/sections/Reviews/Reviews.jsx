import style from "./Reviews.module.css";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { IoStarSharp } from "react-icons/io5";

export default function Reviews() {
    const [reviews, setReviews] = useState([]);

    const settings = {
        dots: true,
        speed: 1500,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    useEffect(() => {
        fetch("https://bless-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                const filteredReviews = data.data.filter((review) => review.rating >= 4);
                setReviews(filteredReviews);
            });
    }, []);

    return (
        <section className={style.container}>
            <div className={style.title}>
                <div className={style.titleMain}>
                    <hr />
                    <p>¿QUÉ DICEN NUESTROS CLIENTES?</p>
                    <hr />
                </div>
                <p className={style.titleText}>
                    Valoramos profundamente las experiencias y opiniones de nuestros pacientes. Aquí presentamos algunas de las reseñas que han
                    compartido, reflejando los resultados y el servicio de calidad que ofrecemos. Estas historias de satisfacción y transformación son
                    la prueba de nuestro compromiso con la excelencia y la atención personalizada.
                </p>
            </div>
            <div className={style.reviews}>
                {reviews.length > 0 ? (
                    <Slider {...settings}>
                        {reviews.map((e) => (
                            <div key={e.time} className={style.reviewsReview}>
                                <div className={style.reviewsReviewAuthor}>
                                    <div className={style.reviewsReviewAuthorPhoto}>
                                        <img src={e.profile_photo_url} />
                                    </div>
                                    <div className={style.reviewsReviewAuthorName}>{e.author_name}</div>
                                </div>
                                <div className={style.reviewsReviewContent}>
                                    <div className={style.reviewsReviewContentText}>" {e.text} "</div>
                                    <div className={style.reviewsReviewContentRating}>
                                        {Array.from({ length: e.rating }, (_, index) => (
                                            <IoStarSharp key={index} />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <p className={style.reviewsVoid}>No hay reseñas disponibles para BLESS.</p>
                )}
            </div>
        </section>
    );
}
