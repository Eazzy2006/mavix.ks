import React, { useEffect, useState } from "react";

export default function Bashk() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const target = 100;
    const duration = 4500;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= target) {
          clearInterval(timer);
          return target;
        }
        return Math.ceil(prev + increment);
      });
    }, 16);
    
    return () => clearInterval(timer);
  }, []);

  // DEBUG: Add this to verify the image path
  const imagePath = process.env.PUBLIC_URL + '/mavix-enhanced.png';
  console.log('Image path:', imagePath);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 5%',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      color: 'white',
      marginTop: '150px',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Glow effect */}
      <div style={{
        position: 'absolute',
        top: '-50%',
        left: '30%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)',
        zIndex: 0
      }}></div>

      {/* Text section */}
      <div style={{ width: '45%', position: 'relative', zIndex: 1 }}>
        <h2 style={{
          fontSize: 'clamp(1.5rem, 3vw, 3rem)',
          fontWeight: 300,
          margin: '0 0 20px 0',
          lineHeight: 1.3,
          letterSpacing: '1px'
        }}>
          {count}+ BASHKËPUNIME <br/>
          ME KOMPANI TË NDRYSHME
        </h2>
        
        <p style={{
          fontSize: '1rem',
          opacity: 0.8,
          margin: '0 0 30px 0',
          fontStyle: 'italic'
        }}>
          Dhe numri vazhdon të rritet
        </p>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '20px'
        }}>
          <div style={{
            height: '1px',
            width: '50px',
            background: 'white'
          }}></div>
          <span style={{
            fontFamily: '"Helvetica Neue", sans-serif',
            fontWeight: 300,
            letterSpacing: '3px',
            fontSize: '0.8rem'
          }}>MAVIX</span>
          <span style={{
            opacity: 0.5,
            fontSize: '0.8rem'
          }}>NEXT — GEN</span>
        </div>
      </div>

      {/* Image section - UPDATED WITH DEBUGGING */}
      <div style={{
          width: '50%',
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.5s ease',
          backgroundColor: '#ff000020' // Debug background
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <img 
          src={imagePath}
          alt="Collaborations" 
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(20%) contrast(110%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            transition: 'all 0.5s ease',
            cursor: 'pointer',
            border: '2px dashed red' // Debug border
          }}
          onError={(e) => {
            console.error('IMAGE FAILED TO LOAD:', e.target.src);
            e.target.style.border = '3px solid red';
            e.target.style.backgroundColor = '#ff000030';
          }}
          onLoad={(e) => {
            console.log('IMAGE LOADED SUCCESSFULLY');
            e.target.style.border = '2px solid green';
          }}
        />
      </div>
    </div>
  );
}
