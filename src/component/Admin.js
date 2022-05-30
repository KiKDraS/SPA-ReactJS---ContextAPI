import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import DataContext from "../context/DataContext";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

//Compoenente privado, sólo accesible para usuario logueados
const Admin = () => {
  const { auth } = useContext(AuthContext);
  const {
    dataToEdit,
    createData,
    updateData,
    setDataToEdit,
    deleteData,
    error,
  } = useContext(DataContext);

  return (
    <>
      {!auth ? (
        <Navigate to="/" />
      ) : (
        <>
          <h2>Bienvenid@ {auth.userName}</h2>
          <CrudForm
            createData={createData}
            updateData={updateData}
            dataToEdit={dataToEdit}
            setDataToEdit={setDataToEdit}
          />
          {error && <h3>{`Error ${error.status}: ${error.statusText}`}</h3>}
          <CrudTable
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
            showButtons={true}
          />
        </>
      )}
    </>
  );
};

export default Admin;
