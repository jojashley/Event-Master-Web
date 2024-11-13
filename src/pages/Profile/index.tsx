import React from "react";
import './styles.css';

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
          <img src={imagenPerfil} alt="Profile" className="profile-image-large" /> {/* Imagen de perfil más grande */}
          <label>Email:</label>
          <div className="info">{email}</div>
        </div>
        <div className="profile-item">
          <label>Tipo de servicio:</label>
          <div className="info">{tipoServicio}</div>
        </div>
        <div className="profile-item">
          <label>Descripción:</label>
          <div className="info">{descripcion}</div>
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
