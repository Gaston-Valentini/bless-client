import rusianLips from "../assets/images/russian-lips.jpg";
import antiWrinkle from "../assets/images/anti-wrinkle-treatment.jpg";
import armonization from "../assets/images/armonization.jpg";
import biorepeel from "../assets/images/biorepeel.jpg";
import prp from "../assets/images/prp.jpg";

const services = [
    {
        id: 1,
        title: "Russian Lips",
        description: (
            <p>
                Popularizada en la moda rusa, de allí su nombre, ofrece una forma <span>natural y voluminosa</span> para realzar
                tus labios y resaltar tu belleza única. Basado en una técnica precisa de inyección, este procedimiento utiliza{" "}
                <span>ácido hialurónico de alta calidad</span> para crear una apariencia voluminosa y natural en los labios.
                <br />
                <br />A diferencia de las técnicas convencionales, "Russian Lips" se centra en la{" "}
                <span>distribución uniforme </span>del producto a lo largo de la mucosa labial y el vermillón, logrando un
                perfilado definido y una suavidad táctil. Este enfoque cuidadoso garantiza{" "}
                <span>resultados armoniosos y un aspecto rejuvenecido sin exceso de volumen</span>.
                <br />
                <br />
                Nuestros especialistas personalizan cada tratamiento de para adaptarse a la estructura facial única de cada
                cliente, garantizando una apariencia equilibrada y natural en cada sonrisa.
            </p>
        ),
        image: rusianLips,
    },
    {
        id: 2,
        title: "Tratamiento Antiarrugas",
        description: (
            <p>
                Diseñado para <span>reducir los signos del envejecimiento y restaurar la firmeza y elasticidad de la piel</span>,
                este procedimiento ofrece resultados excepcionales sin necesidad de cirugía.
                <br />
                <br />
                Nuestro enfoque integral combina técnicas probadas con tecnología de punta para abordar{" "}
                <span>arrugas, líneas de expresión y flacidez facial</span>. Utilizando productos de calidad y métodos de
                aplicación precisos, nuestros especialistas eliminan suavemente las arrugas, devolviéndote una apariencia
                rejuvenecida y radiante.
                <br />
                <br />
                Desde tratamientos de Botox hasta rellenos dérmicos, cada opción de nuestro tratamiento antiarrugas está diseñada
                para satisfacer tus necesidades individuales y brindarte resultados duraderos y naturales.
            </p>
        ),
        image: antiWrinkle,
    },
    {
        id: 3,
        title: "Armonización",
        description: (
            <p>
                Este procedimiento sofisticado está diseñado para{" "}
                <span>
                    equilibrar los rasgos faciales, optimizando la proporción y la simetría de tu rostro de forma natural y
                    armoniosa
                </span>
                .
                <br />
                <br />
                Nuestros expertos en estética emplean una combinación de rellenos dérmicos y técnicas de modelado facial para
                <span> esculpir suavemente los contornos y definir los puntos focales de tu rostro</span>. Al utilizar productos
                de última generación y métodos de aplicación precisos, logramos resultados excepcionales sin sacrificar la
                naturalidad.
                <br />
                <br />
                Desde la mejora de los pómulos hasta la definición de la mandíbula, cada paso del tratamiento se adapta a tus
                características faciales únicas y tus objetivos estéticos personales.
            </p>
        ),
        image: armonization,
    },
    {
        id: 4,
        title: "Biorepeel",
        description: (
            <p>
                Esta innovadora técnica combina la eficacia de los <span>ácidos de frutas con ingredientes naturales</span> para
                ofrecerte una renovación facial profunda y <span>resultados visibles desde la primera sesión</span>.
                <br />
                <br />
                El Biorepeel es un procedimiento <span>seguro y no invasivo</span> que actúa exfoliando suavemente la piel,
                eliminando células muertas y estimulando la regeneración celular. Este proceso promueve la producción de colágeno
                y elastina, mejorando la textura, tono y luminosidad de la piel, al tiempo que reduce la apariencia de
                imperfecciones, como manchas, poros dilatados y líneas finas.
            </p>
        ),
        image: biorepeel,
    },
    {
        id: 5,
        title: "Plasma Rico en Plaquetas (PRP)",
        description: (
            <p>
                Este procedimiento revolucionario aprovecha el{" "}
                <span>poder regenerativo de las plaquetas de tu propia sangre</span> para revitalizar y rejuvenecer tu piel desde
                adentro hacia afuera.
                <br />
                <br />
                El tratamiento PRP implica la extracción de una pequeña cantidad de sangre del paciente, que luego se centrifuga
                para separar y <span>concentrar las plaquetas y los factores de crecimiento</span>. Esta solución rica en
                nutrientes se inyecta luego en las áreas específicas de la piel, donde actúa para{" "}
                <span>
                    estimular la producción de colágeno, mejorar la textura y la elasticidad, y reducir la apariencia de arrugas y
                    líneas finas
                </span>
                .
            </p>
        ),
        image: prp,
    },
];

const questions = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
    {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
    {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
    {
        id: 6,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: (
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur
                quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam
                aliquam.
            </p>
        ),
    },
];

export { services, questions };
