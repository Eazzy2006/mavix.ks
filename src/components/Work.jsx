import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Work() {
  // Animated counter
  const [count, setCount] = useState(0);
  useEffect(() => {
    const target = 100;
    const duration = 1500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      setCount(prev => Math.min(target, Math.ceil(prev + increment)));
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  // Service data - 2 rows of 3
  const services = [
    { title: "Website Development & SEO", link: "/web-development" },
    { title: "Social Media & Content Marketing", link: "/social-media" },
    { title: "Interior Design", link: "/interior-design" },
    { title: "Logo Design", link: "/logo-design" },
    { title: "3D Animations", link: "/3d-animations" }
  ];

  return (
    <div style={{
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '80px 20px',
      fontFamily: "'Inter', sans-serif",
      background: 'transparent',
      color: '#ffffff'
    }} className="work-section">
      {/* Header */}
      <h1 style={{
        position: 'relative',
        width: '24em',
        borderRight: '2px solid rgba(255,255,255,.75)',
        fontSize: '60px',
        color: 'white',
        fontFamily: "'Anonymous Pro', monospace",
        whiteSpace: 'nowrap',
        overflow: 'hidden'
      }}>
        <a id="sherbimet"></a>
        <span className="spani">SHËRBIMET</span> <br className="mobile"></br> TONA
      </h1>

      {/* Services grid - 2 rows of 3 */}
      <div 
      className="sherbimetcard"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '30px',
        marginBottom: '50px'
      }}>
        {services.map((service, index) => (
          <Link
            key={index}
            to={service.link}
            style={{
              padding: '30px 25px',
              borderRadius: '10px',
              background: 'rgba(30, 41, 59, 0.4)',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              textDecoration: 'none',
              transition: 'all 0.25s ease',
              textAlign: 'center',
              ':hover': {
                transform: 'translateY(-3px)',
                borderColor: 'rgba(56, 189, 248, 0.4)',
                boxShadow: '0 5px 15px rgba(56, 189, 248, 0.1)'
              }
            }}
          >
            <h2 style={{
              fontSize: '1.4rem',
              fontWeight: 600,
              margin: 0,
              color: '#f8fafc',
              position: 'relative',
              paddingBottom: '12px'
            }}>
              {service.title}
              <span style={{
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '30px',
                height: '2px',
                background: '#38bdf8',
                transition: 'width 0.3s ease'
              }}></span>
            </h2>
          </Link>
        ))}
      </div>

      {/* Text link */}
      <div style={{ 
        textAlign: 'center',
        marginTop: '20px'
      }}>
          Klikoni për të parë projektet e mëparshme
      </div>
    </div>
  );
}