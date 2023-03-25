import React, { useState } from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
//import { v4 } from 'uuid'

const initialDB = [
    {
        id: 1,
        name: "Seiya",
        constellation: "Pegaso"
    },
    {
        id: 2,
        name: "Shriyu",
        constellation: "Dragon"
    },
    {
        id: 3,
        name: "Hyoga",
        constellation: "Cisne"
    }
]

const CrudApp = () => {
    const [db, setDb] = useState(initialDB);
    const [dataToEdit, setDataToEdit] = useState(null)

    const createData = (data) => { 
        //data.id = v4();
        data.id = Date.now();
        //console.log(data);
        setDb([...db, data]);
    };

    const updateData = (data) => { };
    const deleteData = (id) => { };

    return (
        <div>
            <h2>CRUD APP</h2>
            <CrudForm
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setDataToEdit={setDataToEdit} />
            <CrudTable
                data={db}
                setDataToEdit={setDataToEdit}
                deleteData={deleteData} />
        </div>
    )
}

export default CrudApp;