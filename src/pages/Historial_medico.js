import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'datatables.net';
import 'datatables.net/js/jquery.dataTables';
/*import 'datatables.net/css/jquery.dataTables.min.css';*/
import '../styles/historial.css';


/*import '../Front-End/styles/styles-forms.css';*/
/*import 'bootstrap/dist/css/bootstrap.min.css';*/
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Historial_medico = () => {
    const tableRef = useRef(null);

    useEffect(() => {
        $(tableRef.current).DataTable({
            language: {
                search: 'Buscar:',
                previous: 'Anterior',
                next: 'Siguiente',
            },
        });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <table ref={tableRef} className="display" style={{ width: '100%' }}>
                        <thead>
                            <tr>
                                <th>Procedimiento</th>
                                <th>Fecha Realización</th>
                                <th>Tratamiento Prescrito</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 agosto</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 abril</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 abril</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>6 abril</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 abril</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 noviembre</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>extraccion muela</td>
                                <td>4 mayo</td>
                                <td>acetaminofen</td>
                            </tr>
                            <tr>
                                <td>Radiografia</td>
                                <td>3 abril</td>
                                <td>Ibuprofeno</td>
                            </tr>
                            <tr>
                                <td>Operacion</td>
                                <td>20 marzo</td>
                                <td>panadol</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Historial_medico;

