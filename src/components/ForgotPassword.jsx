import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { database } from "./FirebaseConfig";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css"; // Archivo CSS para los estilos

function ForgotPassword() {
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailVal = e.target.email.value;
    sendPasswordResetEmail(database, emailVal)
      .then((data) => {
        alert("Revise su bandeja de entrada de correo electrónico.");
        history("/");
      })
      .catch((err) => {
        alert(err.code);
      });
  };

  return (
    <div className="container">
      <h1>Olvidaste tu contraseña</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input name="email" placeholder="Correo electrónico" />
        <br />
        <button className="reset-button">Restablecer contraseña</button>
      </form>
    </div>
  );
}

export default ForgotPassword;