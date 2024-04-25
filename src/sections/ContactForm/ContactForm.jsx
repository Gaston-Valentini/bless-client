import style from "./ContactForm.module.css";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Switch from "react-switch";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
    const [form, setForm] = useState({
        user_name: "",
        user_email: "",
        treatment: "",
        user_phone: "",
        message: "",
    });
    const [terms, setTerms] = useState(false);
    const [confirmMessage, setConfirmMessage] = useState("");

    const formRef = useRef();

    const handleInput = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm("", "", formRef.current, "").then(
            (result) => {
                console.log(result);
                setConfirmMessage("Tu mensaje se ha enviado correctamente, nos comunicaremos contigo lo antes posible.");
                setTimeout(() => {
                    setConfirmMessage("");
                }, 5000);
            },
            (error) => {
                console.log(error);
                setConfirmMessage("Ha ocurrido un error, por favor inténtalo nuevamente");
                setTimeout(() => {
                    setConfirmMessage("");
                }, 5000);
            }
        );
    };

    return (
        <section className={style.container}>
            <div className={style.data}>
                <div className={style.dataTitle}>
                    <div className={style.dataTitleMain}>
                        <hr />
                        <p>Nuestros servicios</p>
                        <hr />
                    </div>
                    <p className={style.dataTitleText}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus minus error odit, laborum a nesciunt.
                        Reprehenderit aspernatur, dignissimos tenetur perspiciatis veritatis, accusamus, cupiditate nostrum fugiat
                        quae adipisci facilis explicabo exercitationem?
                    </p>
                </div>
                <form className={style.dataForm} ref={formRef} onSubmit={handleSubmit}>
                    <input name="user_name" type="text" placeholder="Nombre..." onChange={(e) => handleInput(e)} />
                    <input name="user_email" type="email" placeholder="Correo..." onChange={(e) => handleInput(e)} />
                    <select name="treatment" value={form.treatment} onChange={(e) => handleInput(e)}>
                        <option value="" disabled hidden>
                            Seleccione tratamiento
                        </option>
                        <option value="Eliminación de tatuaje">Eliminación de tatuaje</option>
                        <option value="Eliminación de micropigmentación">Eliminación de micropigmentación</option>
                        <option value="Eliminación de manchas solares">Eliminación de manchas solares</option>
                        <option value="Eliminación de manchas de la edad">Eliminación de manchas de la edad</option>
                        <option value="Eliminación de marcas de radioterapia">Eliminación de marcas de radioterapia</option>
                    </select>
                    <PhoneInput
                        name="user_phone"
                        style={{ gap: "5px" }}
                        placeholder="Teléfono..."
                        onChange={(value) => setForm((prevState) => ({ ...prevState, user_phone: value || "" }))}
                    />
                    <textarea name="message" placeholder="Escribe tu mensaje..." onChange={(e) => handleInput(e)} />
                    <div className={style.dataFormTerms}>
                        <Switch
                            onChange={() => setTerms(!terms)}
                            checked={terms}
                            offColor="#d3d3d3"
                            onColor="#de679b"
                            height={20}
                            width={40}
                            handleDiameter={18}
                            onHandleColor="#fff"
                        />
                        <div>
                            He leído y acepto los <Link to="/terms">Términos y Condiciones de Usuario</Link>
                        </div>
                    </div>
                    <input
                        className={style.dataFormSubmit}
                        type="submit"
                        value="Enviar"
                        disabled={!terms || Object.values(form).some((value) => value === "")}
                    />
                </form>
                <div
                    className={
                        confirmMessage === "Tu mensaje se ha enviado correctamente, nos comunicaremos contigo lo antes posible."
                            ? style.dataMessage
                            : style.dataMessageError
                    }
                >
                    {confirmMessage}
                </div>
            </div>
        </section>
    );
}
