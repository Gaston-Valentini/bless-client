import russianLips from "../assets/images/russian-lips.jpg";
import lipsHydration from "../assets/images/lips-hydratation.jpg";
import hialuronidase from "../assets/images/hyaluronidase.jpg";
import rhinomodelation from "../assets/images/rhinomodelation.jpg";
import mandibularMarking from "../assets/images/mandibular-marking.jpg";
import barsCode from "../assets/images/bars-code.jpg";
import underEyeFiller from "../assets/images/filling-dark-circles.jpg";
import cheekboneReplacement from "../assets/images/cheekbone-replacement.jpg";
import chinProjection from "../assets/images/chin-projection.jpg";
import nasolabialFold from "../assets/images/nasolabial-fold.jpg";
import upperThirdWrinkles from "../assets/images/upper-third-wrinkles.jpg";
import bruxismTreatment from "../assets/images/bruxism.jpg";
import skinBooster from "../assets/images/skin-booster.jpg";
import plateletRichPlasma from "../assets/images/prp.jpg";
import chemicalPeel from "../assets/images/chemical-peel.jpg";
import liquidLifting from "../assets/images/liquid-lifting.jpg";
import dermapen from "../assets/images/dermapen.jpg";
import mesotherapy from "../assets/images/mesoterapy.jpg";

const services = [
    {
        id: 1,
        title: "Aumento de labios técnica rusa",
        description: (
            <p>
                Esta innovadora técnica logra resultados <span>naturales y equilibrados</span> mediante la <span>eversión del labio</span>, todo en una sola sesión y sin el efecto "Boca de Pato". A diferencia de otros métodos, se inyecta ácido hialurónico en las capas más superficiales del labio, evitando así que el volumen se proyecte hacia adelante, manteniendo una <span>apariencia más natural</span>. El procedimiento es prácticamente indoloro y causa muy pocas molestias después del
                tratamiento.
                <br />
                <br />
                Además de proporcionar un perfilado más preciso y un arco de Cupido más prominente, esta técnica también es ideal para quienes desean <span>reducir visualmente la distancia entre la nariz y la boca</span>, ya que el levantamiento del arco de Cupido ayuda a acortar esa distancia. Trabajamos contigo para diseñar un estilo de labios que respete la estructura anatómica y los rasgos faciales, asegurando que el resultado sea el que mejor se ajuste a tus necesidades.
            </p>
        ),
        image: russianLips,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "9-12 meses",
    },
    {
        id: 2,
        title: "Hidratación de labios",
        description: (
            <p>
                La hidratación de labios es un tratamiento que proporciona <span>hidratación profunda y duradera</span> a los labios secos y agrietados. Utilizando productos de alta calidad, restauramos la hidratación natural de tus labios, dándoles un <span>aspecto más suave y jugoso</span>. Este tratamiento es ideal para aquellos que desean mejorar la textura y apariencia de sus labios de forma rápida y efectiva.
            </p>
        ),
        image: lipsHydration,
        product: "Cocktail de ácido hialurónico y vitaminas",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "Varía según el paciente",
    },
    {
        id: 3,
        title: "Hialuronidasa",
        description: (
            <p>
                La hialuronidasa es una enzima que se utiliza para <span>disolver el ácido hialurónico</span> inyectado previamente en la piel. Es especialmente útil en casos donde se ha producido una mala distribución del relleno o si el paciente está insatisfecho con los resultados del tratamiento anterior. La hialuronidasa se aplica de manera precisa para descomponer el ácido hialurónico de forma segura y efectiva, <span>restaurando la apariencia natural de la piel</span>.
            </p>
        ),
        image: hialuronidase,
        product: "Hialuronidasa en solución",
        sessions: "1 sesión",
        time: "Varía según el caso",
        date: "Varía según el paciente",
    },
    {
        id: 4,
        title: "Rinomodelación",
        description: (
            <p>
                La rinomodelación es un procedimiento estético que utiliza ácido hialurónico para <span>definir y realzar la forma de la nariz</span>. Esta técnica se centra en mejorar la armonía facial y crear una apariencia más equilibrada y atractiva. Al remodelar la nariz y marcar la mandíbula, podemos corregir imperfecciones y resaltar los rasgos faciales de manera natural y no invasiva.
            </p>
        ),
        image: rhinomodelation,
        product: "Ácido hialurónico de alta densidad",
        sessions: "1 o más sesiones",
        time: "30-60 minutos por sesión",
        date: "12-24 meses",
    },
    {
        id: 5,
        title: "Marcación mandibular",
        description: (
            <p>
                Es un procedimiento seguro y eficaz con el que se puede conseguir una <span>armonización completa en una sesión</span>, se basa en infiltración con el ácido hialurónico gracias a ello conseguimos <span>mayor definición del perfil</span>, quitamos de flacidez en aquella zona disimulando la papada y con lo cual mejora de manera integral tercio inferior facial. Este procedimiento ofrece unos resultados naturales y es una excelente alternativa para recuperar la firmeza de la piel,
                mejorando el óvalo facial. También proporciona al rostro un <span>aspecto mucho más joven y atractivo</span>. También es muy beneficioso para los hombres, ya que proporciona mayor masculinización y armonización del rostro. Es un procedimiento no invasivo con apenas molestias después del tratamiento y unos resultados excelentes y duraderos. En algunos casos para lograr mejor armonía ha de combinarse con elevación de pómulos y la proyección del mentón aportando una armonización
                completa e integral. El diseño de este tratamiento se individualiza en cada paciente en función de sus gustos y necesidades, con un límite siempre en la naturalidad y en la armonía del rostro.
            </p>
        ),
        image: mandibularMarking,
        product: "2-4 viales de ácido hialurónico de alta calidad",
        sessions: "1 sesión",
        time: "30-40 minutos",
        date: "9-15 meses",
    },
    {
        id: 6,
        title: "Código de barras",
        description: (
            <p>
                El código de barras, también conocido como <span>líneas verticales en el labio superior</span>, es un signo de envejecimiento que puede hacer que los labios se vean más finos y arrugados. Utilizando técnicas de relleno con ácido hialurónico, podemos suavizar estas líneas y restaurar la juventud y plenitud de los labios. El tratamiento es rápido, seguro y proporciona resultados duraderos para una sonrisa más juvenil y atractiva.
            </p>
        ),
        image: barsCode,
        product: "Ácido hialurónico de baja densidad",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "9-12 meses",
    },
    {
        id: 7,
        title: "Relleno de ojeras",
        description: (
            <p>
                La zona periorbital y el surco lagrimal son aquellas áreas que en primer lugar revelan el bienestar, cansancio y la edad. Aquí, la piel, tejidos blandos y los músculos son muy finos. Por lo tanto, observamos el color oscuro y azulado en dicha zona, que transmite en cansancio de la mirada debido a que el contorno de ojos posee una piel tan fina que puede transparentar y hacer visible el color azulado de los vasos sanguíneos que se encuentran en esa parte. Dicho tratamiento{" "}
                <span>hidrata toda la zona de las ojeras, disminuyendo notoriamente el hundimiento, dando elasticidad, vitalidad y rejuvenecimiento para un efecto inmediato de cara descansada</span>. También ayuda a <span>disminuir el color del surco</span> porque al rellenar aquella zona se consigue que no se transparenten los tejidos blandos, como los vasos sanguíneos. De esta manera, la piel adquiere un mayor grosor y un tono más equilibrado, y además se elimina esa fatiga añadida al rostro.
                Dicho procedimiento es apto tanto para hombres, como para mujeres y es óptimo para todas las edades ya que se obtienen resultados naturales y duraderos hasta 18 meses.
            </p>
        ),
        image: underEyeFiller,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "6-18 meses",
    },
    {
        id: 8,
        title: "Reposición de pómulos",
        description: (
            <p>
                La reposición de pómulos es un procedimiento estético que utiliza ácido hialurónico para <span>restaurar el volumen y la definición de los pómulos</span>. Al inyectar cuidadosamente el relleno en áreas específicas de los pómulos, podemos mejorar la estructura facial y crear un aspecto más juvenil y armonioso. Este tratamiento es seguro, eficaz y proporciona resultados inmediatos y duraderos.
            </p>
        ),
        image: cheekboneReplacement,
        product: "Ácido hialurónico de alta densidad",
        sessions: "1 sesión",
        time: "30-60 minutos",
        date: "12-24 meses",
    },
    {
        id: 9,
        title: "Proyección de mentón",
        description: (
            <p>
                La proyección del mentón es un procedimiento que <span>armoniza la perspectiva facial de un mentón retraído</span>, resaltando las facciones faciales y ofreciendo un aspecto armonizado al óvalo facial. Es posible mejorar tu mentón con ácido hialurónico sin necesidad de cirugía y desde la 1 sesión se consigue una armonización inmediata. Este procedimiento está indicado si buscas armonizar el tercio facial inferior, disimular la papada, mejorar la desproporción del rostro y el
                mentón retraído respecto a las proporciones faciales. <span>Resalta tus facciones faciales con resultados naturales y duraderos hasta 18 meses</span>. Dependiendo de la anatomía y gustos del paciente se puede combinar con elevación de pómulos, consiguiendo mayor feminización o a su vez con definiciones del arco mandibular para una armonización completa facial.
            </p>
        ),
        image: chinProjection,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "20-30 minutos",
        date: "9-18 meses",
    },
    {
        id: 10,
        title: "Surco nasogeniano",
        description: (
            <p>
                Los surcos nasolabiales son una de las áreas problemáticas de la cara. Debido a la frecuente gesticulación y pérdida de colágeno en aquella zona, las arrugas y otros signos de envejecimiento a menudo aparecen aquí. Uno de los métodos modernos que <span>elimina estas imperfecciones</span> es el relleno del surco nasogeniano con el ácido hialurónico. Aplicando el ácido hialurónico conseguimos <span>quitar las marcas de expresión</span> y de ese modo deshacemos de los signos
                mencionados del envejecimiento y obtenemos el resultado natural y armonioso. Aplicando el ácido hialurónico en aquella zona obtenemos <span>piel más firme y tersa, alisando aquella área y obteniendo el efecto “flash”</span> con unos resultados duraderos y satisfactorios.
            </p>
        ),
        image: nasolabialFold,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "6-12 meses",
    },
    {
        id: 11,
        title: "Arrugas del tercio superior",
        description: (
            <p>
                Las arrugas del tercio superior son aquellas que se encuentran en la parte superior del rostro, como las <span>líneas de expresión en la frente y entrecejo</span>. Estas arrugas suelen ser causadas por la contracción repetida de los músculos faciales y pueden hacer que parezcamos cansados o preocupados. Con el uso de toxina botulínica, podemos relajar estos músculos y suavizar las arrugas, creando un aspecto más fresco y rejuvenecido.
            </p>
        ),
        image: upperThirdWrinkles,
        product: "Toxina botulínica (Botox)",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "3-6 meses",
    },
    {
        id: 12,
        title: "Bruxismo",
        description: (
            <p>
                El bruxismo es una condición en la que se aprieta o rechina los dientes de forma involuntaria, lo que puede causar desgaste dental, dolor facial y otros problemas. El tratamiento del bruxismo con toxina botulínica, también conocida como botox, puede ayudar a <span>relajar los músculos de la mandíbula</span> y reducir los síntomas asociados con esta condición. La toxina botulínica se administra de manera precisa para proporcionar alivio efectivo y duradero.
            </p>
        ),
        image: bruxismTreatment,
        product: "Toxina botulínica (Botox)",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "3-6 meses",
    },
    {
        id: 13,
        title: "Skinnbooster",
        description: (
            <p>
                El skinnbooster es un tratamiento estético que utiliza <span>ácido hialurónico de baja densidad</span> para mejorar la hidratación y la calidad de la piel. Al inyectar el skinnbooster en la piel, podemos estimular la producción de colágeno y elastina, mejorando su elasticidad y firmeza. Este tratamiento es ideal para aquellos que desean rejuvenecer y revitalizar su piel de forma natural y duradera.
            </p>
        ),
        image: skinBooster,
        product: "Ácido hialurónico de baja densidad",
        sessions: "3-4 sesiones (espaciadas cada 3-4 semanas)",
        time: "30 minutos por sesión",
        date: "6-12 meses",
    },
    {
        id: 14,
        title: "Plasma rico en plaquetas",
        description: (
            <p>
                Es un procedimiento con grandes ventajas y numerosas utilidades, ayuda a prevenir y combatir la <span>alopecia y el envejecimiento cutáneo actuando como revitalizante facial y corporal</span>. Es una terapia naturista y segura que busca utilizar mecanismos propios de reparación y regeneración del organismo. De ese modo no ocasiona problemas de alergias ni de rechazo. La técnica consiste en extracción de sangre similar a una analítica normal , se coloca en una máquina
                centrifugadora que se encarga de separar sangre en varios partes, una de ellas es plasma rico en plaquetas - el material biológico que utilizamos en infiltración y aquel que nos libera los factores de crecimiento, aportando más nutrientes en zona de infiltración consiguiendo <span>mayor luminosidad y un aumento de producción de colágeno</span>. Asimismo proporciona elastina que da firmeza y consistencia a la piel disminuyendo las arrugas. El procedimiento es prácticamente
                indoloro y no precisa ingreso. Para un resultado exitoso es recomendable hacer un curso de varios tratamientos: la cantidad de sesiones puede variar según las necesidades de cada paciente, aunque los efectos visibles son a partir de la 1° sesión.
            </p>
        ),
        image: plateletRichPlasma,
        product: "Plasma rico en plaquetas",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "Aproximadamente 1 año",
    },
    {
        id: 15,
        title: "Peeling químico",
        description: (
            <p>
                El peeling químico es un tratamiento estético que utiliza <span>sustancias químicas exfoliantes</span> para eliminar las capas superficiales de la piel, revelando una piel más suave, luminosa y rejuvenecida debajo. Dependiendo de las necesidades del paciente, podemos utilizar diferentes tipos de ácidos (como ácido glicólico, ácido salicílico o ácido láctico) en concentraciones específicas para lograr los resultados deseados. El peeling químico es ideal para tratar manchas,
                arrugas, cicatrices de acné y otros problemas de la piel.
            </p>
        ),
        image: chemicalPeel,
        product: "Sustancia química exfoliante",
        sessions: "1 sesión",
        time: "30-60 minutos",
        date: "Varía según el tipo de peeling",
    },
    {
        id: 16,
        title: "Lifting líquido",
        description: (
            <p>
                El lifting líquido es un procedimiento estético no invasivo que utiliza <span>hilos tensores de ácido poliláctico</span> para tensar y levantar la piel flácida y caída. Al insertar cuidadosamente los hilos debajo de la piel, podemos estimular la producción de colágeno y mejorar la firmeza y la elasticidad de la piel. Este tratamiento es ideal para aquellos que desean rejuvenecer y reafirmar su rostro sin someterse a cirugía.
            </p>
        ),
        image: liquidLifting,
        product: "Hilos tensores de ácido poliláctico",
        sessions: "1 sesión",
        time: "60-90 minutos",
        date: "12-18 meses",
    },
    {
        id: 17,
        title: "Dermapen",
        description: (
            <p>
                El dermapen es un dispositivo médico que utiliza <span>microagujas estériles</span> para estimular la producción de colágeno y mejorar la textura y la apariencia de la piel. Al crear microlesiones controladas en la piel, el dermapen activa el proceso de curación natural del cuerpo, promoviendo la regeneración de tejidos y la formación de nuevo colágeno y elastina. Este tratamiento es eficaz para tratar arrugas, líneas finas, cicatrices de acné, poros dilatados y más.
            </p>
        ),
        image: dermapen,
        product: "Dispositivo de dermapen",
        sessions: "3-6 sesiones (espaciadas cada 4-6 semanas)",
        time: "30-60 minutos por sesión",
        date: "Varía según el paciente",
    },
    {
        id: 18,
        title: "Mesoterapia",
        description: (
            <p>
                La mesoterapia es un tratamiento estético que utiliza <span>inyecciones de vitaminas, minerales y otros nutrientes</span> para mejorar la calidad y apariencia de la piel. Al inyectar estos nutrientes directamente en la capa superficial de la piel, podemos estimular la producción de colágeno y elastina, mejorar la hidratación y la circulación, y reducir los signos de envejecimiento. La mesoterapia es eficaz para tratar la flacidez, la celulitis, la pérdida de cabello y más.
            </p>
        ),
        image: mesotherapy,
        product: "Cóctel de vitaminas, minerales y nutrientes",
        sessions: "3-6 sesiones (espaciadas cada 1-2 semanas)",
        time: "30-60 minutos por sesión",
        date: "Varía según el paciente",
    },
];

const questions = [
    {
        id: 1,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
    {
        id: 4,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
    {
        id: 5,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
    {
        id: 6,
        question: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo, enim.",
        answer: <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, consequuntur? Ad modi voluptatum consequuntur quis facere obcaecati iusto reiciendis ipsam provident tempora sint, debitis assumenda rerum architecto ea aperiam aliquam.</p>,
    },
];

export { services, questions };
