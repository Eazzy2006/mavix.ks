import React, { useEffect, useState } from "react";

export default function Bashk() {
  const [count, setCount] = useState(0);
  const [imgError, setImgError] = useState(false);
  
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

  // Absolute URL construction
  const imageUrl = window.location.origin + '/mavix-enhanced.png';
  console.log('Constructed image URL:', imageUrl);

  return (
    <div style={styles.container}>
      {/* Your existing text content */}
      
      {/* Image section with multiple fallbacks */}
      <div style={styles.imageWrapper}>
        {imgError ? (
          <div style={styles.errorBox}>
            Image failed to load! Check console.
          </div>
        ) : (
          <img 
            src={imageUrl}
            alt="Collaborations" 
            style={styles.image}
            onError={() => {
              console.error('Failed to load image at:', imageUrl);
              setImgError(true);
            }}
            onLoad={() => console.log('Successfully loaded image')}
          />
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '80px 5%',
    color: 'white',
    marginTop: '150px',
    position: 'relative'
  },
  imageWrapper: {
    width: '50%',
    position: 'relative'
  },
  image: {
    width: '100%',
    height: 'auto',
    border: '3px solid #00ff00',
    boxSizing: 'border-box'
  },
  errorBox: {
    padding: '20px',
    background: '#ff000020',
    border: '2px dashed red',
    color: 'white'
  }
};
