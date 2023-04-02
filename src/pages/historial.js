import React from "react";
import MaterialTable from "material-table";

function App(){

    const columnas=[

        {
            title:'Paciente', field: 'nombre'
        },
        {
            title:'Procedimiento', field:'procedimiento'
        },
        {
            title:'Medicamento', field:'medicamento'
        },
        {
            title:'Fecha', field:' fecha'
        }
    ];


    const data = [
        {nombre: 'Valerin Calderón', procedimiento: 'Operación', medicamento:'Paracetamol',fecha:'25 marzo'},
        {nombre: 'Maria Calderón', procedimiento: 'Radiografía', medicamento:'Paracetamol',fecha:'25 abril'},
        {nombre: 'Pablo Calderón', procedimiento: 'Cirugía', medicamento:'Paracetamol',fecha:'25'},
        {nombre: 'Luis Calderón', procedimiento: 'Operación', medicamento:'Paracetamol',fecha:'25'},
        {nombre: 'Jose Calderón', procedimiento: 'Operación', medicamento:'Paracetamol',fecha:'25'},
        {nombre: 'Kendall Calderón', procedimiento: 'Operación', medicamento:'Paracetamol',fecha:'25'},

    ]
return (
<div>
    <MaterialTable
    columns= {columnas}
    data={data}
    title= "Hospital TecNológico"
    actions={

        [
            {
                icon: 'edit',
                tooltip: 'editar procedimiento',
                onClick:(event, rowData)=>alert('Has seleccionado editar procedimiento:'+rowData.procedimiento)

            }
        ]
    }
    
/>
</div>

);

}

export default App;