import React from 'react'

const CrudTableRow = ({ el, setDataToEdit, deleteData }) => {
    let {id, FechaIngreso, Paciente, DuracionProcedimientos, FechaSalida} = el;
    return (
        <tr>
            <td>{Paciente}</td>
            <td>{FechaIngreso}</td>
            <td>{DuracionProcedimientos}</td>
            <td>{FechaSalida}</td>
            <td>
                <button onClick={() => setDataToEdit(el)}>Editar</button>
                <button onClick={() => deleteData(id)}>Eliminar</button>
            </td>
        </tr>
    )
}

export default CrudTableRow;