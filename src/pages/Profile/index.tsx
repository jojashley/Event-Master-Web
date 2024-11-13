import React from "react";
import './styles.css';
import {getSupplier} from "../../store";

export const Profile: React.FC = () => {
  // Constantes con datos de ejemplo
  const email = "ejemplo@correo.com";
  const tipoServicio = "Premium";
  const descripcion = "Este es un servicio premium de alta calidad.";
  const imagenPerfil = "https://via.placeholder.com/150"; 

  const mostrarInfo = () => {
    console.log(`Info: Email: ${email}, Tipo de Servicio: ${tipoServicio}, Descripción: ${descripcion}`);
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>My Profile</h1>
      </header>

      <div className="profile-info">
        <div className="profile-item">
          <img src={user?.url_image} alt="Profile" className="profile-image-large" /> {/* Imagen de perfil más grande */}
          <label>Email:</label>
          <div className="info">{user?.email}</div>
        </div>
        <div className="profile-item">
          <label>Tipo de servicio:</label>
          <div className="info">{user?.type}</div>
        </div>
        <div className="profile-item">
          <label>Descripción:</label>
          <div className="info">{user?.description}</div>
        </div>
      </div>

      {/* Botones para cambiar idioma */}
      <div className="language-buttons">
        <button className="language-button">Inglés</button>
        <button className="language-button">Español</button>
      </div>
    </div>
  );
};

export default Profile;
