import React, { useState, useEffect } from 'react'

const initialForm = {
    id: null,
    procedimientos: "",
    fechaProcedimiento: "",
    tratamientos: ""
};

const CrudFormH = ({ createData, updateData, dataToEdit, setDataToEdit }) => {

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


    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.procedimientos
            || !form.fechaProcedimiento
            || !form.tratamientos) {
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
            <form onSubmit={handleSubmit}>
                <label className='label-normal'>procedimientos</label>
                <input
                    className="input_type_text"
                    type="text"
                    name="procedimientos"
                    placeholder="procedimientos"
                    onChange={handleChange}
                    value={form.procedimientos}
                />

                <label className='label-normal'>Fecha del procedimiento</label>
                <input
                    className="input_type_text"
                    type="date"
                    name="fechaProcedimiento"
                    readOnly
                    onChange={handleChange}
                    value={form.fechaProcedimiento}
                /> {/* Problema con el formato de las fechas entre api y front */}

                <label className='label-normal'>Tratamiento prescrito</label>
                <input
                    className="input_type_text"
                    type="text"
                    name="tratamientos"
                    placeholder="Tratamiento prescrito"
                    onChange={handleChange}
                    value={form.tratamientos}
                />


                <input className='button_sub_res' type="submit" value="Enviar" />
                <input className='button_sub_res' type="reset" value="Limpiar" onClick={handleReset} />
            </form>
        </div>
    );
}

export default CrudFormH;