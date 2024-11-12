import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir
import './styles.css';

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); 
  const [tipoServicio, setTipoServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageUrl, setImageUrl] = useState<string>(""); 

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); 
    // Aquí se pueden agregar más lógicas de validación o manejo de datos
    console.log("Info de Login:", { email, password, tipoServicio, descripcion, imageUrl });

    navigate("/home");
  };

  const handleRedirectToSignIn = () => {
    navigate("/sign_in"); // Redirige a la ruta de Sign In
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Registrarse</h1>
      </header>

      <form onSubmit={handleLogin} className="login-form">
        <div className="login-item">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ingrese su email"
            required
          />
        </div>

        <div className="login-item">
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingrese su contraseña"
            required
          />
        </div>

        <div className="login-item">
          <label>Tipo de servicio:</label>
          <input
            type="text"
            value={tipoServicio}
            onChange={(e) => setTipoServicio(e.target.value)}
            placeholder="Ingrese el tipo de servicio"
            required
          />
        </div>

        <div className="login-item">
          <label>Descripción:</label>
          <textarea
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Ingrese una descripción"
            required
          />
        </div>

        <div className="login-item">
          <label>URL de la imagen:</label>
          <input
            type="url"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Ingrese la URL de la imagen"
          />
          {imageUrl && (
            <div>
              <p>Imagen vista previa:</p>
              <img
                src={imageUrl}
                alt="Imagen subida"
                style={{ maxWidth: "200px", marginTop: "1rem" }}
              />
            </div>
          )}
        </div>

        <div className="login-item">
          <button type="submit" className="login-button">
            Ingresar
          </button>
        </div>
      </form>

      <div className="login-footer">
        <p>
          ¿Ya tienes cuenta?{" "}
          <span onClick={handleRedirectToSignIn} style={{ color: "#007bff", cursor: "pointer" }}>
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
