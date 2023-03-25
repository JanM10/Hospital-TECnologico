import React from "react";
import Header from "../components/Header";
import Style from "../styles/styles-forms.module.css";

const Crear_cuenta = () => {
    return (
        <>
            <Header />
            <div className={Style.form}>
                <form className={Style.form}>
                    <div>
                        <label for="Nombre">Nombre: </label>
                        <input className={Style.input} type="text" id="Nombre" name="Nombre" />
                    </div>
                    <br />

                    <div>
                        <label for="Apellido1">Primer Apellido: </label>
                        <input className={Style.input} type="text" id="Apellido1" name="Apellido1" />
                    </div>
                    <br />

                    <div>
                        <label for="Apellido2">Segundo Apellido: </label>
                        <input className={Style.input} type="text" id="Apellido2" name="Apellido2" />
                    </div>
                    <br />
                    <div>
                        <label for="Cedula">Cedula: </label>
                        <input className={Style.input} type="text" id="Cedula" name="Cedula" />
                    </div>
                    <br />

                    <div>
                        <label for="Telefono1">Telefono1: </label>
                        <input className={Style.input} type="tel" id="Telefono1" name="Telefono1" />
                    </div>
                    <br />

                    <div>
                        <label for="Telefono2">Telefono2: </label>
                        <input className={Style.input} type="tel" id="Telefono2" name="Telefono2" />
                    </div>
                    <br />

                    <div>
                        <label for="Direccion1">Direccion1: </label>
                        <input className={Style.input} type="tel" id="Direccion1" name="Direccion1" />
                    </div>
                    <br />

                    <div>
                        <label for="Direccion2">Direccion2: </label>
                        <input className={Style.input} type="tel" id="Direccion2" name="Direccion2" />
                    </div>
                    <br />

                    <div>
                        <label for="Date">Fecha de nacimiento: </label>
                        <input className={Style.input} type="date" id="Date" name="Date" />
                    </div>
                    <br />

                    <div>
                        <label for="Patologias">Patologias: </label>
                        <input className={Style.input} type="text" id="Patologias" name="Patologias" />
                    </div>
                    <br />


                    <div>
                        <label for="Tratamiento">Tratamiento: </label>
                        <input className={Style.input} type="text" id="Tratamiento" name="Tratamiento" />
                    </div>
                    <br />

                    <div>
                        <label>Seleccione los tipos de patologias que posee: </label>
                        <br />
                        <input className={Style.input} type="checkbox" id="Cancer" name="Cancer" />
                        <label for="Cancer">Cancer</label>
                        <br />
                        <input className={Style.input} type="checkbox" id="Fiebre" name="Fiebre" />
                        <label for="Fiebre">Fiebre</label>
                    </div>
                    <br />

                    <div>
                        <label for="Tratamiento">Tratamiento: </label>
                        <br />
                        <textarea className={Style.textarea} name="Patologias" placeholder="Escriba sus patologias seguidas por una coma"></textarea>
                    </div>
                    <br />

                    <div>
                        <input className={Style.input} type="reset" />
                    </div>
                    <br />

                    <div>
                        <input className={Style.input} type="submit" />
                    </div>
                    <br />

                </form>
            </div>

        </>

    )
}

export default Crear_cuenta