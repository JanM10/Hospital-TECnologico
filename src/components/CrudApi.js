import React, { useEffect, useState } from 'react'
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import '../styles/crud-app.module.css'
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';


const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "http://localhost:5000/Pacientes";

  useEffect(() => {
    setLoading(true);
    helpHttp().get(url).then(res => {
      //console.log(res)
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const createData = (data) => {
    data.id = Date.now();

    let options = {body: data, headers:{"content-type":"application/json"}}

    api.post(url, options).then(res => {
      console.log(res)
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });

  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`
    //console.log(endpoint);

    let options = {body: data, headers:{"content-type":"application/json"}}

    api.put(url, options).then(res => {
      console.log(res)
      if (!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
      } else {
        setError(res);
      }
    });
    
    
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(`Esta seguro de eliminar el registro con el id '${id}' ?`);

    if (isDelete) {
      let newData = db.filter(el => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className='grid-1-2'>
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit} />
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
        {db && <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData} />}
      </article>
    </div>
  )
}

export default CrudApi;