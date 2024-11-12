import React from "react";
import './styles.css';

export const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenido a Events Master</h1>
      </header>

      <section className="home-description">
        <p>
          Esta es una plataforma diseñada especialmente para proveedores de servicios. Aquí, puedes
          subir tus servicios para eventos, como bodas, fiestas, conferencias y más. Los usuarios podrán
          contactarte para contratar tus servicios y hacer de su evento un éxito.
        </p>
        <p>
          Si eres proveedor, ¡estás en el lugar indicado para expandir tu negocio y conectar con
          potenciales clientes!
        </p>
      </section>
    </div>
  );
};

export default Home;
