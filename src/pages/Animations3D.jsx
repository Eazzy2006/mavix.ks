import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/mavix-transparent.png";
import sm1 from "../images/threed-examples/Pink and Black Animated Science and Technology Mobile Video.mp4";
import sm2 from "../images/threed-examples/Professional_Mode_Begin_with_a_low_angle_shot_of_t.mp4";
import sm3 from "../images/threed-examples/Professional_Mode_Create_a_seamless_cinematic_tran (1).mp4";
import sm4 from "../images/threed-examples/Professional_Mode_Gradually__the_scene_transforms_ (2).mp4";
import sm5 from "../images/threed-examples/Professional_Mode_make_the_bottle_apear_in_the_env.mp4";
import sm6 from "../images/threed-examples/Professional_Mode_make_the_shoes_drop_to_the_grass.mp4";
import sm7 from "../images/threed-examples/Professional_Mode_make_the_shoes_drop_to_the_grass.mp4";
import sm8 from "../images/threed-examples/Professional_Mode_take_of_the_cap_of_the_parfume_a.mp4";
import sm9 from "../images/threed-examples/Standard_Mode_16x9_make_the_oven_and_the_cuboards_o.mp4";
import sm10 from "../images/threed-examples/Standard_Mode_make_this_video_a_transition_goi.mp4";

const Animations3D = () => {
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
      fontWeight: '800',
      marginLeft:'190px',
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
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
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
    videoPlayer: {
      width: '100%',
      height: '250px',
      objectFit: 'cover',
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

  // Project data with videos
  const projects = [
    { id: 1, video: sm1, title: 'Science & Tech Animation' },
    { id: 2, video: sm2, title: 'Professional Cinematic Shot' },
    { id: 3, video: sm3, title: 'Seamless Cinematic Transition' },
    { id: 4, video: sm4, title: 'Scene Transformation' },
    { id: 5, video: sm5, title: 'Product Appearance Effect' },
    { id: 6, video: sm6, title: 'Shoe Drop Animation' },
    { id: 8, video: sm8, title: 'Perfume Cap Removal' },
    { id: 9, video: sm9, title: 'Kitchen Cabinet Reveal' },
    { id: 10, video: sm10, title: 'Smooth Transition Effect' }
  ];

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <img 
          src={logo} 
          alt="Mavix Logo" 
          style={styles.logoImg}
        />
        <h1 className='d3h1' style={styles.title}>3D Animations</h1>
        <p style={styles.subtitle}>I japim jetë ideve tuaja me animacione 3D që mbërrijnë drejt në zemër të audiencës!</p>
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
          Përdorim softuer të avancuar për t'ju dhënë modele 3D që duken më real se realiteti!
          Çdo animacion është i krijuar me kujdes për të pasqyruar thelbin e markës tuaj.
        </p>

        <h2 style={styles.sectionTitle}>Portfolio Jonë</h2>
        <div style={styles.projectGrid}>
          {projects.map((project) => (
            <div className='cards3d' key={project.id} style={styles.projectCard}>
              <video 
                controls 
                style={styles.videoPlayer}
                poster={project.poster} // Add poster frames if available
              >
                <source src={project.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 style={styles.projectTitle}>{project.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Animations3D;