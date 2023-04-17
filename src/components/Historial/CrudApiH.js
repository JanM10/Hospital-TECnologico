import React, { useEffect, useState } from 'react'
import CrudFormH from './CrudFormH';
import CrudTableH from './CrudTableH';
import '../../styles/crud-app.css';
import { helpHttp } from '../../helpers/helpHttp';
import Loader from '../Loader';
import Message from '../Message';


const CrudApiH = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let api = helpHttp();
  /*let url = "http://localhost:5000/Historial";*/
  //let url = "https://localhost:7059/api/Historial";
  let url = "http://hospitaltec.somee.com/api/Historial";


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

    let options = { body: data, headers: { "content-type": "application/json" } }

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

    let options = { body: data, headers: { "content-type": "application/json" } }

    api.put(endpoint, options).then(res => {
      console.log(res)
      if (!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  return (
    <div>
      <h2 className="h2">Historial Médico</h2>
      <article className='grid-1-2'>
        <CrudFormH
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit} />
        {loading && <Loader />}
        {error && <Message msg={`Error ${error.status}:${error.statusText}`} bgColor="#dc3545" />}
        {db && <CrudTableH
          data={db}
          setDataToEdit={setDataToEdit} />}
      </article>
    </div>
  )
}

export default CrudApiH;