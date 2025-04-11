import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/mavix-transparent.png";
import sm1 from "../images/logo-examples/logo 1-Picsart-AiImageEnhancer.png";
import sm3 from "../images/logo-examples/logo 3-Picsart-AiImageEnhancer.png";
import sm4 from "../images/logo-examples/logo 4-Picsart-AiImageEnhancer.png";
import sm5 from "../images/logo-examples/logo 5-Picsart-AiImageEnhancer.png";
import sm6 from "../images/logo-examples/logo 6-Picsart-AiImageEnhancer.png";
import sm7 from "../images/logo-examples/logo 7-Picsart-AiImageEnhancer.png";
import sm8 from "../images/logo-examples/logo 9-Picsart-AiImageEnhancer.png";
import sm9 from "../images/logo-examples/logo 10-Picsart-AiImageEnhancer.png";
import sm10 from "../images/logo-examples/logo 11-Picsart-AiImageEnhancer.png";
import sm11 from "../images/logo-examples/logo 12-Picsart-AiImageEnhancer.png";

const LogoDesign = () => {
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
      fontSize: '3.5rem',
      marginBottom: '1rem',
      marginLeft: '210px',
      fontWeight: '800',
      background: 'linear-gradient(90deg, #00dbde 0%, #fc00ff 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      textAlign: 'center'
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
      color: '#ffffff',
      position: 'relative',
      paddingBottom: '0.5rem'
    },
    sectionText: {
      lineHeight: '1.8',
      fontSize: '1.1rem',
      color: '#e6e6e6',
      marginBottom: '2rem'
    },
    navLink: {
      textDecoration: 'none',
      color: '#ffffff',
      fontWeight: '500',
      fontSize: '1.1rem',
      padding: '0.5rem 1rem',
      borderRadius: '5px',
      transition: 'all 0.3s ease',
      ':hover': {
        background: 'rgba(255,255,255,0.1)'
      }
    },
    projectGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: '2.5rem',
      marginTop: '2rem'
    },
    projectCard: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      background: '#0f3460',
      padding: '1rem',
      ':hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 25px rgba(0,0,0,0.4)'
      }
    },
    projectImage: {
      width: '100%',
      height: '250px',
      objectFit: 'contain',
      backgroundColor: 'white',
      padding: '1rem',
      borderRadius: '5px'
    },
    logoImg: {
      height: "100px",
      marginBottom: "1rem"
    },
    subtitle: {
      fontSize: '1.3rem',
      color: '#e6e6e6',
      marginBottom: '1rem'
    },
    projectTitle: {
      textAlign: 'center',
      marginTop: '1rem',
      color: '#ffffff',
      fontWeight: '500'
    }
  };

  // Project data with imported images and titles
  const projects = [
    { id: 1, image: sm1, title: 'Modern Business Logo' },
    { id: 3, image: sm3, title: 'Minimalist Brand Mark' },
    { id: 4, image: sm4, title: 'Creative Agency Logo' },
    { id: 5, image: sm5, title: 'Elegant Typography Logo' },
    { id: 6, image: sm6, title: 'Abstract Symbol Design' },
    { id: 7, image: sm7, title: 'Vibrant Brand Identity' },
    { id: 8, image: sm8, title: 'Professional Corporate Logo' },
    { id: 9, image: sm9, title: 'Playful Character Logo' },
    { id: 10, image: sm10, title: 'Luxury Brand Symbol' },
    { id: 11, image: sm11, title: 'Tech Startup Logo' }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img 
          src={logo} 
          alt="Mavix Logo" 
          style={styles.logoImg}
        />
        <h1 className='ldh1' style={styles.title}>Logo Design</h1>
        <p style={styles.subtitle}>Ne krijojmë logo unike, të paharrueshme dhe të përshtatura për identitetin tuaj të markës</p>
      </header>

      <nav style={styles.nav}>
        <Link to="/" style={styles.navLink}>Kryefaqja</Link>
        <Link to="/dashboard" style={styles.navLink}>Shërbimet</Link>
        <Link to="/orders" style={styles.navLink}>Dëshmitë</Link>
        <Link to="/products" style={styles.navLink}>Kontakt</Link>
      </nav>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Si punojmë ne?</h2>
        <p style={styles.sectionText}>
          Ne thjeshtësojmë identitetin tuaj vizual me logo të pastra dhe koncepte të fuqishme, duke lënë një përshtypje të qëndrueshme.
          Çdo dizajn është i krijuar me kujdes për të pasqyruar thelbin e markës tuaj dhe për të ndikuar tek audienca e synuar.
        </p>

        <h2 style={styles.sectionTitle}>Portfolio Jonë</h2>
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              style={styles.projectCard}
              onClick={() => window.open(project.image, '_blank')}
            >
              <img 
                src={project.image} 
                alt={`Logo Design ${project.id}`} 
                style={styles.projectImage}
              />
              <h3 style={styles.projectTitle}>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LogoDesign;