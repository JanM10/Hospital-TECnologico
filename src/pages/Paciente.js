import React, { useState, useEffect } from 'react'
import '../styles/paciente.css'
import Registro from '../assets/Registro.png';

const initialForm = {
    id: null,
    nombre: "",
    apellido1: "",
    apellido2: "",
    cedula: "",
    telefono1: "",
    telefono2: "",
    direccion1: "",
    direccion2: "",
    fechaNacimiento: "",
    patologias: "",
    tratamientos: "",
    password: ""

};


const Reservacion = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);
    var patologias = '';

    useEffect(() => {
        if (dataToEdit) {
            setForm(dataToEdit);
        } else {
            setForm(initialForm);
        }
    }, [dataToEdit]);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const joinPatologias = (e) => {

        var inputElements = document.getElementsByClassName('formbold-input-radio');
        var inputOtros = document.getElementById('otros').value;

        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                form.patologias += inputElements[i].value + ',';
            }
        }

        form.patologias += inputOtros;
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombre
            || !form.apellido1
            || !form.apellido2
            || !form.cedula
            || !form.telefono1
            || !form.telefono2
            || !form.direccion1
            || !form.direccion2
            || !form.fechaNacimiento) {

            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            joinPatologias();
            createData(form);
        } else {
            updateData(form);
        }
        console.log(form);
        handleReset();
    };

    const handleReset = (e) => {
        var checkedValue = null;
        var inputElements = document.getElementsByClassName('formbold-input-radio');

        //console.log(inputElements);

        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue = inputElements[i].checked = false;
            }
        }

        setForm(initialForm);
        setDataToEdit(null);
    };


    return (
        <div className="formbold-main-wrapper">
            <div className="formbold-form-wrapper">
                <img className="center" src={Registro} alt="Registro" />
                <form onSubmit={handleSubmit}>
                    <div className="formbold-input-group">
                        <label for="nombre" className="formbold-form-label"> Nombre </label>
                        <input
                            type="text"
                            name="nombre"
                            id="nombre"
                            placeholder="Ingrese su nombre"
                            className="formbold-form-input"
                            onChange={handleChange}
                            value={form.nombre}
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
                            onChange={handleChange}
                            value={form.apellido1}
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
                            onChange={handleChange}
                            value={form.apellido2}
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
                            onChange={handleChange}
                            value={form.cedula}
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
                            onChange={handleChange}
                            value={form.telefono1}
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
                            onChange={handleChange}
                            value={form.telefono2}
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="direccion1" className="formbold-form-label"> Primera dirección </label>
                        <input
                            type="text"
                            name="direccion1"
                            id="direccion1"
                            placeholder="Ingrese su dirección"
                            className="formbold-form-input"
                            onChange={handleChange}
                            value={form.direccion1}
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
                            onChange={handleChange}
                            value={form.direccion2}
                        />
                    </div>

                    <div className="formbold-input-group">
                        <label for="fechaNacimiento" className="formbold-form-label"> Fecha de nacimiento </label>
                        <input
                            type="date"
                            name="fechaNacimiento"
                            id="fechaNacimiento"
                            className="formbold-form-input"
                            onChange={handleChange}
                            value={form.fechaNacimiento}
                        />
                    </div>

                    {/*AQUI EMPIEZAN LOS CHECKBOX */}
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
                                        value="Aneurismas"
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
                                        value="Flebopatias"
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
                                        value="Trombosis"
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
                                        value="Úlceras"
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
                                        value="Embolia"
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
                                        value="Linfedema"
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
                        <label for="tratamientos" className="formbold-form-label">
                            Tratamiento/s que toma para la/s patologia/s
                        </label>
                        <textarea
                            rows="6"
                            name="tratamientos"
                            id="tratamientos"
                            placeholder="Escriba aquí..."
                            className="formbold-form-input"
                            onChange={handleChange}
                            value={form.tratamientos}
                        ></textarea>
                    </div>

                    <div className="formbold-input-group">
                        <label for="password" className="formbold-form-label"> Password </label>
                        <input
                            type="text"
                            name="password"
                            id="password"
                            placeholder="Ingrese su password"
                            className="formbold-form-input"
                            onChange={handleChange}
                            value={form.password}
                        />
                    </div>


                    <button className="formbold-btn">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Reservacion;

