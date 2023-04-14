import React, { useState, useEffect } from 'react'

const initialForm = {
    id: null,
    Paciente: "",
    FechaIngreso: "",
    DuracionProcedimientos: "",
    FechaSalida: "",
};

const CrudForm = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

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
            [e.target.name]: e.target.value, //Aqui puede estar el error
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.Paciente
            || !form.FechaIngreso
            || !form.DuracionProcedimientos
            || !form.FechaSalida) {
            alert("Datos incompletos");
            return;
        }

        if (form.id === null) {
            createData(form);
        } else {
            updateData(form);
        }

        handleReset();
    };

    const handleReset = (e) => {
        setForm(initialForm);
        setDataToEdit(null);
    };

    return (
        <div>
            <h3>{dataToEdit ? "Editar" : "Agregar"}</h3>
            <form onSubmit={handleSubmit}>
                <input
                    className="input_type_text"
                    type="text"
                    name="Paciente"
                    placeholder="Paciente"
                    onChange={handleChange}
                    value={form.Paciente}
                />
                <input
                    className="input_type_text"
                    type="text"
                    name="FechaIngreso"
                    placeholder="Fecha de Ingreso"
                    onChange={handleChange}
                    value={form.FechaIngreso}
                />
                <input
                    className="input_type_text"
                    type="text"
                    name="DuracionProcedimientos"
                    placeholder="Duracion del procedimiento"
                    onChange={handleChange}
                    value={form.DuracionProcedimientos}
                />
                <input
                    className="input_type_text"
                    type="text"
                    name="FechaSalida"
                    placeholder="Fecha de Salida"
                    onChange={handleChange}
                    value={form.FechaSalida}
                />

                <input className='button_sub_res' type="submit" value="Enviar" />
                <input className='button_sub_res' type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudForm;