import React from "react";
import './styles.css';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation("global");

  return (
    <div className="home-container">
      <header className="home-header">
        <h1>{t('homeTitle')}</h1> {/* Traducción del título */}
      </header>
      <section className="home-description">
        <p>{t('homeDescription1')}</p> {/* Traducción de la primera descripción */}
        <p>{t('homeDescription2')}</p> {/* Traducción de la segunda descripción */}
      </section>
    </div>
  );
};

export default Home;
