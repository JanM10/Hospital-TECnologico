import React from 'react'
import '../styles/paciente.css'
import calendario from '../assets/calendario.png';

const Reservacion2 = () => {
    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <img className="center" src={calendario} alt="Calendario" />
                <form action="https://formbold.com/s/FORM_ID" method="POST">
                    <div className="formbold-input-group">
                        <label for="nombre" className="formbold-form-label"> Nombre </label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Ingrese su nombre"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="apellido1" className="formbold-form-label"> Apellido1 </label>
                        <input
                            type="text"
                            name="apellido1"
                            id="apellido1"
                            placeholder="Ingrese su primer apellido"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="apellido2" className="formbold-form-label"> Apellido2 </label>
                        <input
                            type="text"
                            name="apellido2"
                            id="apellido2"
                            placeholder="Ingrese su segundo apellido"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="cedula" className="formbold-form-label"> Cédula </label>
                        <input
                            type="text"
                            name="cedula"
                            id="cedula"
                            placeholder="Ingrese su número de cédula"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="telefono1" className="formbold-form-label"> Primer télefono </label>
                        <input
                            type="text"
                            name="telefono1"
                            id="telefono1"
                            placeholder="Ingrese su número de télefono"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="telefono2" className="formbold-form-label"> Segundo télefono </label>
                        <input
                            type="text"
                            name="telefono2"
                            id="telefono2"
                            placeholder="Ingrese su número de télefono"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="direccion1" className="formbold-form-label"> Preimera dirección </label>
                        <input
                            type="text"
                            name="direccion1"
                            id="direccion1"
                            placeholder="Ingrese su dirección"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="direccion2" className="formbold-form-label"> Segunda dirección </label>
                        <input
                            type="text"
                            name="direccion2"
                            id="direccion2"
                            placeholder="Ingrese su dirección"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="fnacimiento" className="formbold-form-label"> Fecha de nacimiento </label>
                        <input
                            type="date"
                            name="fnacimiento"
                            id="fnacimiento"
                            className="formbold-form-input"
                        />
                    </div>

                    <div className="formbold-input-radio-wrapper">
                        <label className="formbold-form-label">
                            Patologias que tiene:
                        </label>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="aneurismas">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="aneurismas"
                                        id="aneurismas"
                                    />
                                    Aneurismas
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="flebopatias">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="flebopatias"
                                        id="flebopatias"
                                    />
                                    Flebopatias
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="trombosis">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="trombosis"
                                        id="trombosis"
                                    />
                                    Trombosis
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="ulceras">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="ulceras"
                                        id="ulceras"
                                    />
                                    Úlceras
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="embolia">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="embolia"
                                        id="embolia"
                                    />
                                    Embolia
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-radio-flex">
                            <div className="formbold-radio-group">
                                <label className="formbold-radio-label" for="linfedema">
                                    <input
                                        className="formbold-input-radio"
                                        type="checkbox"
                                        name="linfedema"
                                        id="linfedema"
                                    />
                                    Linfedema
                                    <span className="formbold-radio-checkmark"></span>
                                </label>
                            </div>
                        </div>

                        <div className="formbold-input-group">
                            <label for="otros" className="formbold-form-label"> Otro/s </label>
                            <input
                                type="text"
                                name="otros"
                                id="otros"
                                placeholder="Ingrese el nombre de la/s patoligia/s seguida por una ' , '"
                                className="formbold-form-input"
                            />
                        </div>

                    </div>

                    <div>
                        <label for="tratamiento" className="formbold-form-label">
                            Tratamiento/s que toma para la/s patologia/s
                        </label>
                        <textarea
                            rows="6"
                            name="tratamiento"
                            id="tratamiento"
                            placeholder="Escriba aquí..."
                            className="formbold-form-input"
                        ></textarea>
                    </div>

                    <button className="formbold-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Reservacion2;

