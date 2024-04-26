import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./RegisterAndLogin.css"; // Archivo CSS para los estilos

function RegisterAndLogin() {
  const [login, setLogin] = useState(false);

  const history = useNavigate();

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (type === "Iniciar Sesión") {
      createUserWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(database, email, password)
        .then((data) => {
          console.log(data, "authData");
          history("/home");
        })
        .catch((err) => {
          alert(err.code);
        });
    }
  };

  const handleReset = () => {
    history("/reset");
  };

  return (
    <div className="container">
      {/* Registration and login Screen */}
      <div className="tab">
        <div
          className={login === false ? "tab-item active" : "tab-item"}
          onClick={() => setLogin(false)}
        >
          Registrarse
        </div>
        <div
          className={login === true ? "tab-item active" : "tab-item"}
          onClick={() => setLogin(true)}
        >
          Iniciar Sesión
        </div>
      </div>
      <h1>{login ? "Iniciar Sesión" : "Registrarse"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? "iniciar sesión" : "registrase")}>
        <input name="email" placeholder="Email" />
        <br />
        <input name="password" type="password" placeholder="Password" />
        <br />
        <p onClick={handleReset}>¿Olvidaste tu contraseña?</p>
        <br />
        <button className="submit-button">
          {login ? "Iniciar Sesión" : "Registrarse"}
        </button>
      </form>
    </div>
  );
}

export default RegisterAndLogin;