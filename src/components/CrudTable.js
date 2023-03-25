import React from 'react'
import CrudTableRow from './CrudTableRow'

const CrudTable = ({ data }) => {

    return (
        <div>
            <h3>Tabla de datos</h3>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Constelacion</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (<tr><td colSpan="3">Sin datos</td></tr>) :
                        (data.map((el) => <CrudTableRow el={el} key={el.id} />))}
                </tbody>
            </table>
        </div>
    )
}

export default CrudTable