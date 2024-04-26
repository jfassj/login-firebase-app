import { signOut } from "firebase/auth";
import React from "react";
import { database } from './FirebaseConfig';
import { useNavigate } from "react-router-dom";
import "./HomeScreen.css"; // Archivo CSS para los estilos

function HomeScreen() {
    const history = useNavigate();

    const handleClick = () => {
        signOut(database)
            .then(() => {
                history('/');
            })
            .catch((error) => {
                console.error("Error al cerrar sesión:", error);
            });
    };

    return (
        <div className="container">
            <h1>Inicio</h1>
            <button className="logout-button" onClick={handleClick}>Cerrar Sesión</button>
        </div>
    );
}

export default HomeScreen;