import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './styles.css';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault(); 
    // Aquí se pueden agregar más lógicas de validación o manejo de datos
    console.log("Info de Sign In:", { email, password });

    navigate("/home");
  };

  const handleRedirectToLogin = () => {
    navigate("/login"); 
  };

  return (
    <div className="signin-container">
      <header className="signin-header">
        <h1>Iniciar sesión</h1>
      </header>

      <form onSubmit={handleSignIn} className="signin-form">
        <div className="signin-item">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su email"
            required
          />
        </div>

        <div className="signin-item">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>

        <div className="signin-item">
          <button type="submit" className="signin-button">
            Iniciar sesión
          </button>
        </div>
      </form>

      <div className="signin-footer">
        <p>
          ¿Aún no tienes cuenta?{" "}
          <span onClick={handleRedirectToLogin}>
            Regístrate
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
