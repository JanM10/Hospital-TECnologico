import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let {id, fechaIngreso, nombrePaciente, duracionProcedimientos, fechaSalida} = el;
    return (
        <tr>
            <td>{nombrePaciente}</td> {/* CAMBIAR TODO ESTO A COMO ESTABA ANTES*/}
            <td>{fechaIngreso}</td>
            <td>{duracionProcedimientos}</td>
            <td>{fechaSalida}</td>
            <td>
                <button className='button_edit_eli' onClick={() => setDataToEdit(el)}>Editar</button>
                <button className='button_edit_eli' onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;