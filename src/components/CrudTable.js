import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>FechaIngreso</th>
                        <th>DuracionProcedimientos</th>
                        <th>FechaSalida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (<tr><td colSpan="3">Sin datos</td></tr>) :
                        (data.map((el) => <CrudTableRow
                            el={el}
                            key={el.Id}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />))}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable