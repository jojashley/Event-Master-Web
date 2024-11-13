import React from "react";
import './styles.css';
import { getSupplier } from "../../store";
import { useTranslation } from 'react-i18next'; 

export const Profile: React.FC = () => {
  const user = getSupplier();
  const { t, i18n } = useTranslation("global");

  const handleLanguageChange = (language: string) => {
    i18n.changeLanguage(language); // Cambia el idioma
  };

  return (
    <div className="profile-container">
      <header className="profile-header">
        <h1>{t('profileTitle')}</h1> {/* Usamos traducción aquí */}
      </header>

      <div className="profile-info">
        <div className="profile-item">
          <img src={user?.url_image} alt="Profile" className="profile-image-large" /> {/* Imagen de perfil más grande */}
          <label>{t('emailLabel')}:</label> {/* Traducción del label */}
          <div className="info">{user?.email}</div>
        </div>
        <div className="profile-item">
          <label>{t('serviceTypeLabel')}:</label> {/* Traducción del label */}
          <div className="info">{user?.type}</div>
        </div>
        <div className="profile-item">
          <label>{t('descriptionLabel')}:</label> {/* Traducción del label */}
          <div className="info">{user?.description}</div>
        </div>
      </div>

      {/* Botones para cambiar idioma */}
      <div className="language-buttons">
        <button className="language-button" onClick={() => handleLanguageChange('en')}>Inglés</button>
        <button className="language-button" onClick={() => handleLanguageChange('es')}>Español</button>
      </div>
    </div>
  );
};

export default Profile;
