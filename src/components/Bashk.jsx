import React, { useEffect, useState } from "react";
import banner from "/images/mavix-enhanced.jpeg";

export default function Bashk() {
  // Animated counter state
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const target = 100;
    const duration = 4500; // 1.5 second animation
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

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '80px 5%',
      borderTop: '1px solid rgba(255,255,255,0.2)',
      borderBottom: '1px solid rgba(255,255,255,0.2)',
      color: 'white',
      marginTop:'150px',
      background: 'transparent',
      position: 'relative',
      overflow: 'hidden'
    }} className="bashki">
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
      <div style={{
        width: '45%',
        position: 'relative',
        zIndex: 1
      }}>
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

      {/* Image section with hover effects */}
      <div 
        style={{
          width: '50%',
          position: 'relative',
          zIndex: 1,
          transition: 'transform 0.5s ease'
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-10px)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)';
        }}
      >
        <img 
          src={banner} 
          alt="Collaborations" 
          style={{
            width: '100%',
            height: 'auto',
            filter: 'grayscale(20%) contrast(110%)',
            boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)',
            transition: 'all 0.5s ease',
            cursor: 'pointer'
          }}
          onMouseEnter={e => {
            e.currentTarget.style.filter = 'grayscale(0%) contrast(120%)';
            e.currentTarget.style.boxShadow = '0 30px 60px -10px rgba(0,0,0,0.3)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.filter = 'grayscale(20%) contrast(110%)';
            e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0,0,0,0.25)';
          }}
        />
      </div>
    </div>
  );
}
