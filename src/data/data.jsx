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
import fullFace from "../assets/images/full-face.jpg";

const services = [
    {
        id: 1,
        title: "AUMENTO DE LABIOS - RUSSIAN LIPS",
        description: (
            <p>
                Esta innovadora técnica logra resultados <span>naturales y equilibrados</span> mediante la <span>eversión del labio</span> y sin el
                efecto "Boca de Pato". A diferencia de otros métodos, se inyecta ácido hialurónico en las capas más superficiales del labio, evitando
                así que el volumen se proyecte hacia adelante, manteniendo una <span>apariencia más natural</span>. El procedimiento es prácticamente
                indoloro y causa muy pocas molestias después del tratamiento.
                <br />
                <br />
                Además de proporcionar un perfilado más preciso y un arco de Cupido más prominente, esta técnica también es ideal para quienes desean{" "}
                <span>reducir visualmente la distancia entre la nariz y la boca</span>, ya que el levantamiento del arco de Cupido ayuda a acortar esa
                distancia. Trabajamos contigo para diseñar un estilo de labios que respete la estructura anatómica y los rasgos faciales, asegurando
                que el resultado sea el que mejor se ajuste a tus necesidades.
            </p>
        ),
        image: russianLips,
        product: "1 vial de ácido hialurónico",
        sessions: "1 - 2 sesión",
        time: "30 minutos",
        date: "9-12 meses",
    },
    {
        id: 2,
        title: "HIDRATACIÓN DE LABIOS",
        description: (
            <p>
                La hidratación de labios es un tratamiento que proporciona <span>hidratación profunda y duradera</span> a los labios secos y
                agrietados. Utilizando productos de alta calidad, restauramos la hidratación natural de tus labios, dándoles un{" "}
                <span>aspecto más suave y jugoso</span>. Este tratamiento es ideal para aquellos que desean mejorar la textura y apariencia de sus
                labios de forma rápida y efectiva.
            </p>
        ),
        image: lipsHydration,
        product: "Ácido hialurónico",
        sessions: "1 - 2 sesión",
        time: "30 minutos",
        date: "Varía según el paciente",
    },
    {
        id: 3,
        title: "RINOMODELACIÓN",
        description: (
            <p>
                La rinomodelación es un procedimiento estético que utiliza ácido hialurónico para{" "}
                <span>armonizar, definir y realzar la forma de la nariz</span>. Esta técnica se centra en mejorar la armonía facial y crear una
                apariencia más equilibrada y atractiva. Al remodelar la nariz mejoramos los rasgos faciales genéricos y especialmente el perfil de
                forma no invasiva y sin cirujías..
            </p>
        ),
        image: rhinomodelation,
        product: "Ácido hialurónico de alta densidad",
        sessions: "1 o más sesiones",
        time: "30 minutos",
        date: "12-24 meses",
    },
    {
        id: 4,
        title: "MARCACIÓN MANDIBULAR",
        description: (
            <p>
                La marcación mandibular es un tratamiento en medicina estética que tiene el objetivo de mejorar el contorno de la mandíbula para
                brindarle una <span>mayor armonía a nuestros rasgos y embellecer</span> así nuestro rostro. El contorno mandibular es uno de los
                rasgos con mayor participación en la definición del óvalo facial. Y este tratamiento consiste en modificar su forma por medio de
                pequeñas infiltraciones de ácido hialurónico. Gracias a este tratamiento logramos también disimular la zona de la papada y que haya
                una mayoría separación entre el contorno mandibular y el cuello. En hombres logramos una mayor{" "}
                <span>masculinización y en mujeres un embellecimiento y feminización</span>.
            </p>
        ),
        image: mandibularMarking,
        product: "2-4 viales de ácido hialurónico de alta calidad",
        sessions: "1 sesión",
        time: "30-40 minutos",
        date: "9-15 meses",
    },
    {
        id: 5,
        title: "CÓDIGO DE BARRAS",
        description: (
            <p>
                El código de barras, también conocido como <span>líneas verticales en el labio superior</span>, es un signo de envejecimiento que
                puede hacer que la zona se vea más envejecida y antiestética. Utilizando técnicas de relleno con ácido hialurónico, podemos suavizar
                estas líneas y restaurar la juventud y plenitud de dicha área. El tratamiento es rápido, seguro y proporciona resultados duraderos
                para una sonrisa más juvenil y atractiva.
            </p>
        ),
        image: barsCode,
        product: "Ácido hialurónico de baja densidad",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "9-12 meses",
    },
    {
        id: 6,
        title: "RELLENO DE OJERAS",
        description: (
            <p>
                El <span>relleno de ojeras con ácido hialurónico</span> es un tratamiento que permite corregir la pérdida de contorno alrededor de los
                ojos, lo cual nos dota de ese aspecto de cansancio permanente . Es importante un correcto diagnóstico ya que esta zona se puede ver
                afectada por surco , bolsa y/o pigmentación así como falta de soporte a nivel del pómulo. Gracias a las infiltraciones en dicha zona
                se consiguen resultados de mirada más fresca y descansada mejorando la anatomía completa y un <span>efecto de buena cara</span>.
            </p>
        ),
        image: underEyeFiller,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "6-18 meses",
    },
    {
        id: 7,
        title: "REPOSICIÓN DE PÓMULOS",
        description: (
            <p>
                La reposición de pómulos es un procedimiento que utiliza ácido hialurónico para restaurar el <span>volumen y la definición</span> de
                los pómulos y el tercio medio en general. Al inyectar cuidadosamente el relleno en áreas específicas de los pómulos, podemos mejorar
                la estructura facial y crear un aspecto más <span>juvenil y armonioso</span>. Con un solo tratamiento también podemos dar soporte a la
                ojera, y liberar la caída del pómulo sobre el nasogeniano mejorando también estas zonas. Este tratamiento es seguro, eficaz y
                proporciona resultados <span>inmediatos y duraderos</span>.
            </p>
        ),
        image: cheekboneReplacement,
        product: "Ácido hialurónico de alta densidad",
        sessions: "1 sesión",
        time: "30-60 minutos",
        date: "12-24 meses",
    },
    {
        id: 8,
        title: "PROYECCIÓN DE MENTÓN",
        description: (
            <p>
                La proyección del mentón es un procedimiento que <span>armoniza la perspectiva facial de un mentón retraído</span>, resaltando las
                facciones faciales y ofreciendo un aspecto armonizado al óvalo facial. Es posible mejorar tu mentón con ácido hialurónico sin
                necesidad de cirugía y desde la 1 sesión se consigue una armonización inmediata. Este procedimiento está indicado si buscas armonizar
                el tercio facial inferior, disimular la papada, mejorar la desproporción del rostro y el mentón retraído respecto a las proporciones
                faciales. <span>Resalta tus facciones faciales con resultados naturales y duraderos</span>. Dependiendo de la anatomía y gustos del
                paciente se puede combinar con otros tratamientos para una armonización completa facial.
            </p>
        ),
        image: chinProjection,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "20-30 minutos",
        date: "9-18 meses",
    },
    {
        id: 9,
        title: "SURCOS NASOGENIANOS",
        description: (
            <p>
                Los surcos nasogenianos son una de las áreas problemáticas de la cara. Debido a la frecuente{" "}
                <span>gesticulación y pérdida de colágeno</span> en aquella zona y a la <span>caída del los paquetes grasos del pómulo</span> caída
                del los paquetes grasos del pómulo que se depositan aquí se acentúan estos surcos.Aplicando el ácido hialurónico conseguimos quitar
                las marcas de expresión y de ese modo deshacemos de los signos mencionados del envejecimiento y obtenemos el resultado natural y
                armonioso. Para dicho tratamiento suele ser recomendable tratar, anclar y/o elevar los tejidos del tercio medio (pómulos ) si estos
                fuera necesario para una correcta mejora. Es importante un correcto diagnóstico.
            </p>
        ),
        image: nasolabialFold,
        product: "1 vial de ácido hialurónico",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "6-12 meses",
    },
    {
        id: 10,
        title: "ARRUGAS DEL TERCIO SUPERIOR - NEUROMODULADORES",
        description: (
            <p>
                Las arrugas del tercio superior son aquellas que se encuentran en la parte superior del rostro, como las{" "}
                <span>líneas de expresión en la frente, entrecejo y patas de gallo</span>. Estas arrugas suelen ser causadas por la contracción
                repetida de los músculos faciales y pueden hacer que parezcamos cansados o preocupados. Con el uso de neouromoduladores, podemos
                relajar estos músculos y suavizar las arrugas, creando un aspecto más fresco y rejuvenecido y una mirada más despejada.
            </p>
        ),
        image: upperThirdWrinkles,
        product: "Neuromoduladores",
        sessions: "1 sesión",
        time: "20 minutos",
        date: "2-6 meses",
    },
    {
        id: 11,
        title: "BRUXISMO",
        description: (
            <p>
                El bruxismo es una condición en la que se aprieta la mandíbula y rechina los dientes de forma involuntaria, lo que puede causar
                desgaste dental, sobreestimulación de los músculos maseteros, lo que conlleva dolores musculares y otros problemas. El tratamiento del
                bruxismo con neuromoduladores, ayuda a <span>relajar los músculos maseteros</span> y reducir los síntomas asociados con esta
                condición.
            </p>
        ),
        image: bruxismTreatment,
        product: "Neuromoduladores",
        sessions: "1 sesión",
        time: "30 minutos",
        date: "3-6 meses",
    },
    {
        id: 12,
        title: "SKINBOOSTER",
        description: (
            <p>
                El skinnbooster es un tratamiento que utiliza <span>ácido hialurónico de baja densidad</span> para mejorar la hidratación y la calidad
                de la piel. Al inyectar el skinnbooster en la piel, podemos estimular la producción de colágeno y elastina, mejorando su elasticidad y
                firmeza. Este tratamiento es ideal para aquellos que desean hidratar, rejuvenecer y revitalizar su piel de forma natural y duradera.
            </p>
        ),
        image: skinBooster,
        product: "Ácido hialurónico de baja densidad",
        sessions: "Sesiones a determinar",
        time: "30 minutos por sesión",
        date: "6-12 meses",
    },
    {
        id: 13,
        title: "PLASMA RICO EN PLAQUETAS (PRP)",
        description: (
            <p>
                Es un procedimiento con grandes ventajas y numerosas utilidades, ayuda a prevenir y combatir el{" "}
                <span>envejecimiento cutáneo actuando como revitalizante facial y la alopecia</span>. Es una terapia naturista y segura que busca
                utilizar mecanismos propios de reparación y regeneración del organismo. De ese modo no ocasiona problemas de alergias ni de rechazo.
                La técnica consiste en extracción de sangre similar a una analítica normal , se coloca en una máquina centrifugadora que se encarga de
                separar sangre en varios partes, una de ellas es plasma rico en plaquetas - el material biológico que utilizamos en infiltración y
                aquel que nos libera los factores de crecimiento, aportando más nutrientes en zona de infiltración consiguiendo{" "}
                <span>mayor luminosidad y un aumento de producción de colágeno</span>. Asimismo proporciona elastina que da firmeza y consistencia a
                la piel disminuyendo las arrugas.
            </p>
        ),
        image: plateletRichPlasma,
        product: "Plasma rico en plaquetas",
        sessions: "Sesiones a determinar",
        time: "45 minutos",
        date: "Aproximadamente 1 año",
    },
    {
        id: 14,
        title: "PEELING QUÍMICO",
        description: (
            <p>
                El peeling químico es un tratamiento que utiliza <span>sustancias químicas exfoliantes</span> para eliminar las capas superficiales de
                la piel, revelando una piel más suave, luminosa y rejuvenecida debajo. Dependiendo de las necesidades del paciente, podemos utilizar
                diferentes tipos de ácidos (como ácido glicólico, ácido salicílico o ácido láctico) en concentraciones específicas para lograr los
                resultados deseados. El peeling químico es ideal para tratar manchas, arrugas, cicatrices de acné y otros problemas de la piel.
            </p>
        ),
        image: chemicalPeel,
        product: "Sustancia química exfoliante",
        sessions: "1 sesión",
        time: "30-45 minutos",
        date: "Varía según el tipo de peeling",
    },
    {
        id: 15,
        title: "LIFTING LÍQUIDO",
        description: (
            <p>
                El lifting líquido es un procedimiento no invasivo que utiliza <span>ácido poliláctico y/o hidroxiapatita cálcica</span> para mejorar
                y tensar la piel flácida y caída, en dicho procedimiento estimulamos la producción de colágeno y mejoramos la firmeza y la elasticidad
                de la piel. Este tratamiento es ideal para aquellos que desean rejuvenecer y reafirmar su rostro sin someterse a cirugía.
            </p>
        ),
        image: liquidLifting,
        product: "Hilos tensores de ácido poliláctico",
        sessions: "1 sesión",
        time: "45-90 minutos",
        date: "12-18 meses",
    },
    {
        id: 16,
        title: "DERMAPEN",
        description: (
            <p>
                El dermapen es un dispositivo médico que utiliza <span>microagujas estériles</span> para estimular la producción de colágeno y mejorar
                la textura y la apariencia de la piel. Al crear microlesiones controladas en la piel, el dermapen activa el proceso de curación
                natural del cuerpo, promoviendo la regeneración de tejidos y la formación de nuevo colágeno y elastina. Este tratamiento es eficaz
                para tratar arrugas, líneas finas, cicatrices de acné, poros dilatados y más.
            </p>
        ),
        image: dermapen,
        product: "Dispositivo de dermapen",
        sessions: "Sesiones a determinar",
        time: "30-60 minutos por sesión",
        date: "Varía según el paciente",
    },
    {
        id: 17,
        title: "MESOTERAPIA",
        description: (
            <p>
                La mesoterapia es un tratamiento estético facial y corporal que utiliza{" "}
                <span>inyecciones de vitaminas, minerales y otros nutrientes</span> para mejorar la calidad y apariencia de la piel. Al inyectar estos
                nutrientes directamente en la capa superficial de la piel, podemos estimular la producción de colágeno y elastina, mejorar la
                hidratación y la circulación, y reducir los signos de envejecimiento. La mesoterapia es eficaz para mejorar la calidad de la piel y
                tratar afecciones como la flacidez y la celulitis a nivel corporal.
            </p>
        ),
        image: mesotherapy,
        product: "Cóctel de vitaminas, minerales y nutrientes",
        sessions: "Sesiones a determinar",
        time: "45-60 minutos por sesión",
        date: "Varía según el paciente",
    },
    {
        id: 18,
        title: "FULL FACE",
        description: (
            <p>
                El <span>tratamiento Full Face</span> o <span>tratamiento</span> facial completo, es una combinación de diferentes{" "}
                <span>tratamientos</span> de medicina estética que se realizan de forma conjunta, para abordar el rostro de manera integral, y así
                conseguir un rejuvenecimiento y/o armonización completa. Será necesario un diagnóstico completo que variará siempre en función a la
                anatomía y expectativa de cada paciente.
            </p>
        ),
        image: fullFace,
        product: "Cóctel de vitaminas, minerales y nutrientes",
        sessions: "Sesiones a determinar",
        time: "45-60 minutos por sesión",
        date: "Varía según el paciente",
    },
];

const questions = [
    {
        id: 1,
        question: "¿En qué consiste la armonización facial?",
        answer: (
            <p>
                La armonización facial se conoce como un conjunto de procedimientos que tienen como objetivo mejorar la apariencia global del rostro
                al equilibrar sus características y proporciones. Se logra mediante el uso de métodos no quirúrgicos, como ácido hialurónico y
                neuromoduladores, entre otros.
            </p>
        ),
    },
    {
        id: 2,
        question: "¿Cuántas sesiones son necesarias para los tratamientos?",
        answer: (
            <p>
                Dependiendo de cada tratamiento, de las características inherentes de cada paciente y de las expectativas a lograr, serán necesarias
                desde una a varias sesiones en un mismo procedimiento. Este podrá repetirse las veces que sean necesarias con los márgenes de tiempo
                correspondientes, primando siempre la seguridad del paciente y el resultado deseado.
            </p>
        ),
    },
    {
        id: 3,
        question: "¿Son dolorosos los procedimientos?",
        answer: (
            <p>
                Minimamente, los procedimientos se realizan con las medidas necesarias para que sean lo menos dolorosos posible. No obstante, esto lo
                determinarán, entre otros factores, cada tipo de tratamiento y técnica utilizada, así como el umbral de dolor y la sensibilidad de
                cada paciente.
            </p>
        ),
    },
    {
        id: 4,
        question: "¿Los resultados son definitivos?",
        answer: (
            <p>
                Todos los tratamientos realizados en medicina estética son realizados con productos reabsorbibles en el tiempo. El tiempo de
                reabsorción lo determinarán, entre otros factores, el producto utilizado, así como el metabolismo y la capacidad de reabsorción de
                cada paciente. Asimismo, los efectos son acumulativos.
            </p>
        ),
    },
    {
        id: 5,
        question: "¿Cómo puedo obtener cita?",
        answer: (
            <p>
                Tanto las citas de valoración como las de tratamientos se tendrán que reservar con antelación en nuestro número de teléfono o nuestro
                número de WhatsApp.
            </p>
        ),
    },
];

export { services, questions };
