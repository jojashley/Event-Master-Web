import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './styles.css';
import {setSupplier} from "../../store";

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const sign_in = async (email: string, password: string) => {
    try {
      const url: string = `${import.meta.env.VITE_API_URL}getsupplier?email=${email}`;
      console.log(url);
      const response = await fetch(url);
      const json = await response.json();
      console.log(json);
      if (json.state && json.data.password === password) {
        console.log("si coincide");
        setSupplier(json.data);
        sessionStorage.setItem('isLoggedIn', 'true');  // Guardar estado de login
        window.dispatchEvent(new Event("storage"));  // Forzar actualización
        navigate("/");  // Redirigir tras el login exitoso
      } else {
        setSupplier(null);
      }
    } catch (e) {
      console.log(e);
      alert("Error al Iniciar sesion");
    }
  };

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Debes llenar todos los campos");
      return;
    }
    sign_in(email, password);
  };

  const handleRedirectToLogin = () => {
    navigate("/sign_up"); // Redirige a la ruta de Sign In
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
