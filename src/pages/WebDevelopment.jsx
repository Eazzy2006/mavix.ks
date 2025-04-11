import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/mavix-transparent.png";
import sm1 from "../images/website-examples/Screenshot 2025-04-09 122834.png";
import sm2 from "../images/website-examples/Screenshot 2025-04-09 123410.png";
import sm3 from "../images/website-examples/Screenshot 2025-04-09 123452.png";

const WebDevelopment = () => {
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
      fontSize: '4rem',
      marginBottom: '1.5rem',
      marginLeft:'100px',
      fontWeight: '800',
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
      transition: 'all 0.3s ease'
    },
    projectContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '3rem',
      marginTop: '2rem'
    },
    projectCard: {
      borderRadius: '10px',
      overflow: 'hidden',
      boxShadow: '0 8px 15px rgba(0,0,0,0.3)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 15px 30px rgba(0,0,0,0.4)'
      }
    },
    projectImage: {
      width: '100%',
      height: 'auto',
      maxHeight: '600px',
      objectFit: 'contain',
      border: '1px solid #2d2d42'
    },
    logoImg: {
      height: "100px",
      marginBottom: "1rem"
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#e6e6e6'
    }
  };

  // Project data with links
  const projects = [
    { 
      id: 1, 
      image: sm1, 
      link: 'https://fitworld-ks.netlify.app/',
      title: 'FitWorld KS - Fitness Center Website'
    },
    { 
      id: 2, 
      image: sm2, 
      link: 'https://vushtrria-fc.vercel.app/',
      title: 'Vushtrria FC - Football Club Website'
    },
    { 
      id: 3, 
      image: sm3, 
      link: 'https://idrizosmani.netlify.app/',
      title: 'Idriz Osmani - Personal Portfolio'
    }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img 
          src={logo} 
          alt="Mavix Logo" 
          style={styles.logoImg}
        />
        <h1 className='h1shat' style={styles.title}>Web Development <br className='mobile'></br> & SEO</h1>
        <p style={styles.subtitle}>Gati për një faqe që konverton vizitorët në klientë? Na kontaktoni sot!</p>
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
          Ne krijojmë faqe internet të personalizuara që janë të shpejta, të sigurta dhe të optimizuara për motorët e kërkimit. 
          Qasja jonë e plotë kombinon dizajn të përkryer me ekselencë teknike për të ofruar rezultate të shkëlqyera për biznesin tuaj.
        </p>
        
        <h2 style={styles.sectionTitle}>Portfolio Jonë</h2>
        <div style={styles.projectContainer}>
          {projects.map((project) => (
            <a 
              key={project.id} 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              style={styles.projectCard}
            >
              <img 
                src={project.image} 
                alt={project.title} 
                style={styles.projectImage}
              />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;