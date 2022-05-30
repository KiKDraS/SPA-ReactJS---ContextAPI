import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import DataContext from "../context/DataContext";
import { helpHttp } from "../helpers/helpHttp";
import ErrorMsg from "./ErrorMsg";
import Loader from "./Loader";
import LoginForm from "./LoginForm";

const ajax = helpHttp();
const Login = () => {
  const { logIn } = useContext(AuthContext);
  const { getData } = useContext(DataContext);
  const [erroLog, setErrorLog] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [form, setForm] = useState(null);
  const navigate = useNavigate();

  /*  
    Hay que tener en cuenta que useEffect se va a ejecutar al montar el componente por primera vez
    y cada vez que los valores de dependecia cambien, por lo que se hace necesario agregar una dependencia
    que controle el flujo y evite la ejecución innecesaria
  */
  useEffect(() => {
    if (form)
      (async () => {
        //console.log("Datos del form:", form);

        const data = await ajax.get(
          "https://62633b22c430dc560d2cf4d6.mockapi.io/users"
        );

        //console.log("Data:", data);

        const user = await data.find(
          (user) =>
            user.userName === form.userName && user.password === form.password
        );

        //console.log("Usuario Logueado:", user);

        if (typeof user !== "undefined") {
          setIsLoading(false);
          logIn(user);
          getData();
          user.role === "Admin" ? navigate("/admin") : navigate("/user");
        } else {
          setIsLoading(false);
          setErrorLog(true);
        }
      })();
  }, [isLoading, form, logIn, getData, navigate]);

  /*
    exahustive-dep es una regla ESLint para ayudarnos a trabajar con el 
    valor más actualizado posible de todos los elementos que se encuentra en nuestro hook.
  */
  /*
    Hay que tener presente que los componentes de React son imagenes y,
    al cambiar el estado, estamos cambiando esa imagen. Pero todas nuestras imagenes
    están compuestas de otras imagenes que requieren actualización, es por eso que
    a la hora de utilizar useEffect es importante pasar como dependencia no sólo el
    valor del estado que vamos a estar cambiando sino también todos los valores que
    puedan haber cambiado al momento de la ejecución.
    Mas info:
    https://tkdodo.eu/blog/hooks-dependencies-and-stale-closures
  */

  useEffect(() => {
    const showMsg = () => {
      setTimeout(() => {
        setErrorLog(false);
      }, 2000);
    };
    showMsg();

    return () => {
      clearTimeout(showMsg);
    };
  }, [erroLog]);

  return (
    <div id="login">
      <h2>Iniciar Sesion</h2>
      <LoginForm sendForm={setForm} setIsLoading={setIsLoading} />
      {isLoading && <Loader />}
      {erroLog && <ErrorMsg msg="Usuario y/o contraseña incorrecta" />}
    </div>
  );
};

export default Login;
