import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importamos useNavigate para redirigir
import './styles.css';
import {setSupplier} from "../../store";
import {Supplier} from "../../types";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState(""); 
  const [tipoServicio, setTipoServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imageUrl, setImageUrl] = useState<string>(""); 

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`email:${email}name:${name}password:${password}tipo:${tipoServicio}descrip:${descripcion}image:${imageUrl}`);
    if(email && password && tipoServicio && descripcion && imageUrl && name) {
      try {
        const url: string = `${import.meta.env.VITE_API_URL}create_supplier`;
        await fetch(url,{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email:email,
            name:name,
            password:password,
            description: descripcion,
            supplier_type: tipoServicio,
            url_image: imageUrl
          }), // Convierte el objeto a JSON
        });
        const newSup:Supplier = {
          name: name,
          email: email,
          password: password,
          description: descripcion,
          type: tipoServicio,
          url_image: imageUrl
        }
        setSupplier(newSup);
        sessionStorage.setItem('isLoggedIn', 'true');  // Guardar estado de login
        window.dispatchEvent(new Event("storage"));  // Forzar actualización
        navigate("/");
        alert("Se creo correctamente");
      } catch (e) {
        console.log(e);
        alert("Error al cambiar el estado");
      }
    }else {
      alert("Llena todos los campos")
    }


  };

  const handleRedirectToSignIn = () => {
    navigate("/"); // Redirige a la ruta de Sign In
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
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Ingrese su nombre"
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
                style={{maxWidth: "200px", marginTop: "1rem"}}
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
          <span onClick={handleRedirectToSignIn} style={{color: "#007bff", cursor: "pointer"}}>
            Iniciar sesión
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
