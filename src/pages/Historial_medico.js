import React from 'react'
import Header from "../components/Header";
import Style from "../styles/styles-forms.module.css";

function Historial_medico() {
    return (
        <>
            <head>
                <title> Historial Médico</title>

                <link rel="stylesheet" href="https://cdn.datatables.net/1.10.22/css/jquery.dataTables.min.css" />


                <script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.js">
                </script>


                <script type="text/javascript" src="https://cdn.datatables.net/1.10.22/js/jquery.dataTables.min.js">
                </script>

                <link rel="stylesheet" href="../styles/styles-forms.css" />
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />


            </head>
            <Header />
            <div className={Style.form}>
                <div className={Style.form}>
                    <table>
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
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossorigin="anonymous">
            </script>
        </>
    )
}

export default Historial_medico