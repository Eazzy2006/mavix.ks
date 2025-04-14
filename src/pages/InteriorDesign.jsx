import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/mavix-transparent.png";
import sm1 from "../images/interiordesign-examples/66737adf-55e9-4af2-a272-d60bce82ecb5.jpg";
import sm4 from "../images/interiordesign-examples/temp_image_31AF1D2C-A5EF-47DC-A344-DE9774592378.jpg";
import sm5 from "../images/interiordesign-examples/temp_image_448E6A6F-B26D-4581-8EE0-0505A509537A.jpg";
import sm6 from "../images/interiordesign-examples/temp_image_757BE74A-ACF4-4D58-ACB8-F484E447257E.jpg";
import sm8 from "../images/interiordesign-examples/temp_image_6622D74E-1283-4F3B-BBCB-1797CFCF27CA.jpg";
import sm9 from "../images/interiordesign-examples/temp_image_6905A2A6-0CD5-4A63-8177-E7887EC050A3.jpg";
import sm10 from "../images/interiordesign-examples/temp_image_53219DEC-D2B2-409F-B91F-C76CA956A3E7.jpg";

const InteriorDesign = () => {
  const styles = {
    container: {
      maxWidth: '1500px',
      margin: '0 auto',
      padding: '2rem',
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: '#ffffff',
      backgroundColor: '#1a1a2e',
      minHeight: '100vh'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      padding: '2rem 0',
      background: 'linear-gradient(135deg, #16213e 0%, #0f3460 100%)',
      borderRadius: '10px'
    },
    title: {
      fontSize: '4.8rem',
      marginBottom: '1.5rem',
      fontWeight: '800',
      position: 'relative',
      left: '-10px',
      background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    },
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      marginBottom: '3rem',
      padding: '1.5rem',
      background: '#16213e',
      borderRadius: '8px',
      flexWrap: 'wrap'
    },
    section: {
      marginBottom: '4rem',
      padding: '2rem',
      background: '#16213e',
      borderRadius: '10px',
      boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
    },
    sectionTitle: {
      fontSize: '2rem',
      marginBottom: '1.5rem',
      color: '#ffffff'
    },
    sectionText: {
      lineHeight: '1.8',
      fontSize: '1.1rem',
      color: '#e6e6e6'
    },
    navLink: {
      textDecoration: 'none',
      color: '#ffffff',
      fontWeight: '500',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: 'all 0.3s ease'
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '2rem'
    },
    projectCard: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    projectImage: {
      width: '100%',
      height: '220px',
      objectFit: 'cover'
    },
    logoImg: {
      height: "100px",
      marginBottom: "1rem"
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#e6e6e6',
      marginBottom: '1rem'
    }
  };

  const projects = [
    { id: 1, image: sm1 },
    { id: 4, image: sm4 },
    { id: 5, image: sm5 },
    { id: 6, image: sm6 },
    { id: 8, image: sm8 },
    { id: 9, image: sm9 },
    { id: 10, image: sm10 }
  ];

  const handleProjectClick = (image) => {
    window.open(image, '_blank');
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img src={logo} alt="Mavix Logo" style={styles.logoImg} />
        <h1 className='idh1' style={styles.title}>Interior Design</h1>
        <p style={styles.subtitle}>Mos prisni – hapësira juaj e ëndrrave është vetëm një dizajn larg.</p>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Kryefaqja</Link>
        <Link to="/dashboard" style={styles.navLink}>Shërbimet</Link>
        <Link to="/orders" style={styles.navLink}>Dëshmitë</Link>
        <Link to="/products" style={styles.navLink}>Kontakt</Link>
      </nav>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Portfolio Jonë e Dizajnit të Brendshëm</h2>
        <p style={styles.sectionText}>
          Ne krijojmë hapësira funksionale dhe estetike që pasqyrojnë stilin dhe nevojat e klientëve tanë.
          Nga kuzhinat moderne deri te ambientet e banimit minimaliste – çdo projekt është unik.
        </p>

        <div className='inticards' style={styles.projectGrid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard} onClick={() => handleProjectClick(project.image)}>
              <img src={project.image} alt={`Project ${project.id}`} style={styles.projectImage} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InteriorDesign;
