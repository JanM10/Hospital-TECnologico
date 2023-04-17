import React, { useState, useEffect } from 'react'

const initialForm = {
    id: null,
    nombrePaciente: "",
    fechaIngreso: "",
    duracionProcedimientos: "",
    fechaSalida: ""
};

const CrudFormR = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

    const [form, setForm] = useState(initialForm);

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

    const joinduracionProcedimientos = (e) => {

        var inputElements = document.getElementsByClassName('checkbox');
        /*var inputOtros = document.getElementById('otros').value;*/

        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                form.duracionProcedimientos += inputElements[i].value + ' ';
            }
        }

        /*form.duracionProcedimientos += inputOtros;*/
    };

    const editarduracionProcedimientos = (e) => {
        form.duracionProcedimientos = '';

        var inputElements = document.getElementsByClassName('checkbox');
        /*var inputOtros = document.getElementById('otros').value;*/

        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                form.duracionProcedimientos += inputElements[i].value + ' ';
            }
        }

        /*form.duracionProcedimientos += inputOtros;*/
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.nombrePaciente
            || !form.fechaIngreso) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            joinduracionProcedimientos();
            createData(form);
        } else {
            editarduracionProcedimientos();
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        var checkedValue = null;
        var inputElements = document.getElementsByClassName('checkbox');

        console.log(inputElements);

        for (var i = 0; inputElements[i]; ++i) {
            if (inputElements[i].checked) {
                checkedValue = inputElements[i].checked = false;
            }
        }

        setForm(initialForm);
        setDataToEdit(null);
    };
    
    return (
        <div>
            <h3 className="h2">{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="input_type_text"
                    type="text"
                    name="nombrePaciente"
                    placeholder="Ingrese el numero de cedula"
                    onChange={handleChange}
                    value={form.nombrePaciente}
                />
                <input
                    className="input_type_text"
                    type="date"
                    name="fechaIngreso"
                    onChange={handleChange}
                    value={form.fechaIngreso}
                />


                <label className="label-normal">Eliga el/los procedimiento/s que se realizaran:</label><br />

                <input
                    className="checkbox"
                    type="checkbox"
                    name="biopsia"
                    id="biopsia"
                    value="Biopsia"
                />
                <label className="label-checkbox" for="biopsia">Biopsia</label><br />

                <input
                    className="checkbox"
                    type="checkbox"
                    name="TAC"
                    id="TAC"
                    value="TAC"
                />
                <label className="label-checkbox" for="TAC">TAC</label><br />


                <input
                    className="checkbox"
                    type="checkbox"
                    name="gammagrafia"
                    id="gammagrafia"
                    value="Gammagrafia"
                />
                <label className="label-checkbox" for="gammagrafia">Gammagrafía</label><br />

                <input
                    className="checkbox"
                    type="checkbox"
                    name="ecografia"
                    id="ecografia"
                    value="Ecografia"
                />
                <label className="label-checkbox" for="ecografia">Ecografía</label><br />

                <input
                    className="checkbox"
                    type="checkbox"
                    name="radiografia"
                    id="radiografia"
                    value="Radiografia"
                />
                <label className="label-checkbox" for="radiografia">Radiografía</label><br />

                <input
                    className="input_type_text"
                    type="date"
                    name="fechaSalida"
                    placeholder="Fecha de Salida"
                    onChange={handleChange}
                    value={form.fechaSalida}
                />


                <input className='button_sub_res' type="submit" value="Enviar" />
                <input className='button_sub_res' type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudFormR;