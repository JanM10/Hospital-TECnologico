import React from "react";
import Header from "../components/Header";
import Style from "../styles/styles-forms.module.css";

function Reservacion() {
    return (
        <>
            <Header />
            <div className={Style.form}>
                <form className={Style.form}>
                    <div>
                        <label for="Paciente">Paciente: </label>
                        <input className={Style.input} type="text" id="Paciente" name="Paciente" />
                    </div>
                    <br />

                    <div>
                        <label for="FechaIngreso">Fecha de ingreso: </label>
                        <input className={Style.input} type="date" id="FechaIngreso" name="FechaIngreso" />
                    </div>
                    <br />

                    <div>
                        <label>Seleccione el/los procedimiento/s que desee: </label><br />
                        <input type="checkbox" id="Apendicectomia" name="Apendicectomia" value="Apendicectomia" />
                        <label for="Apendicectomia">Apendicectomía</label><br />

                        <input type="checkbox" id="Biopsia" name="Biopsia" value="Biopsia" />
                        <label for="Biopsia">Biopsia de mama</label><br />

                        <input type="checkbox" id="cataratas" name="cataratas" value="cataratas" />
                        <label for="cataratas">Cirugía de cataratas</label><br />

                        <input type="checkbox" id="Cesarea" name="Cesarea" value="Cesarea" />
                        <label for="Cesarea">Cesárea</label><br />

                        <input type="checkbox" id="Histerectomia" name="Histerectomia" value="Histerectomia" />
                        <label for="Histerectomia">Histerectomía</label><br />

                        <input type="checkbox" id="lumbalgia" name="lumbalgia" value="lumbalgia" />
                        <label for="lumbalgia">Cirugía para la lumbalgia</label><br />

                        <input type="checkbox" id="Mastectomia" name="Mastectomia" value="Mastectomia" />
                        <label for="Mastectomia">Mastectomía</label><br />

                        <input type="checkbox" id="Amigdalectomia" name="Amigdalectomia" value="Amigdalectomia" />
                        <label for="Amigdalectomia">Amigdalectomía</label><br />

                        <label for="Procedimiento">Otro/s: </label>
                        <input type="text" id="Procedimiento" name="Procedimiento" />
                    </div>
                    <br />

                    <div>
                        <input className={Style.input} type="reset" />
                    </div>
                    <br />

                    <div>
                        <input className={Style.input} type="submit" />
                    </div>
                    <br />
                </form>
            </div>
        </>

    )
}

export default Reservacion;