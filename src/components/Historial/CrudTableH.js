import React from 'react'
import CrudTableRow from './CrudTableRowH'

const CrudTableH = ({ data, setDataToEdit }) => {

    return (
        <div>
            <h3 className="h2">Historial Médico</h3>
            <table className="h2">
                <thead>
                    <tr>
                        <th>Procedimientos</th>
                        <th>Fecha del procedimiento</th>
                        <th>Tratamiento prescrito</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ?
                        (data.map((el) => <CrudTableRow
                            el={el}
                            key={el.id}
                            setDataToEdit={setDataToEdit}
                        />))
                        :
                        (<tr><td colSpan="3">Sin datos</td></tr>)
                    }
                </tbody>
            </table>
        </div>
    )
}

export default CrudTableH;