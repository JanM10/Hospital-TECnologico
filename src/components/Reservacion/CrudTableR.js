import React from 'react'
import CrudTableRow from './CrudTableRowR'

const CrudTable = ({ data, setDataToEdit, deleteData }) => {

    return (
        <div>
            <h3 className="h2">Reservaciones</h3>
            <table className="h2">
                <thead>
                    <tr>
                        <th>Paciente</th>
                        <th>FechaIngreso</th>
                        <th>Procedimientos</th>
                        <th>FechaSalida</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        (data.map((el) => <CrudTableRow
                            el={el}
                            key={el.id}
                            setDataToEdit={setDataToEdit}
                            deleteData={deleteData}
                        />))
                        :
                        (<tr><td colSpan="3">Sin datos</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable;