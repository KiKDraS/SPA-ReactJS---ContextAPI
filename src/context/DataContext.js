import { createContext, useState } from "react";
import { helpHttp } from "../helpers/helpHttp";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [db, setDb] = useState({});
  const [error, setError] = useState(null);
  const [dataToEdit, setDataToEdit] = useState(null);
  //const [loading, setLoading] = useState(false);

  let api = helpHttp();
  let url = "https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter";

  const getData = () => {
    helpHttp()
      .get("https://62633b22c430dc560d2cf4d6.mockapi.io/harryPotter")
      .then((res) => {
        if (!res.err) {
          setDb(res);
        } else {
          setDb({});
        }
      });
  };

  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setDb([...db, res]);
        //updateDb(db);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
        //updateDb(db);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id '${id}'?`
    );

    if (isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setDb(newData);
          //updateDb(db);
        } else {
          setError(res);
        }
      });
    } else {
      return;
    }
  };

  const data = {
    db,
    getData,
    createData,
    dataToEdit,
    setDataToEdit,
    updateData,
    deleteData,
    error,
  };

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export { DataProvider };
export default DataContext;
