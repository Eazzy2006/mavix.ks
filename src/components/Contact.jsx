  import React, { useState } from "react";

  const ContactsPage = () => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: ""
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);

      try {
        const response = await fetch("https://formsubmit.co/ajax/idrizosmanii6@gmail.com", {
          method: "POST",
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            message: formData.message,
            _subject: "New Message from Contact Form",
            _template: "box",
            _captcha: "false"
          })
        });

        const data = await response.json();
        
        if (response.ok) {
          setSubmitStatus({ 
            success: true, 
            message: "Mesazhi u dërgua me sukses! Do të ju kontaktojmë së shpejti." 
          });
          setFormData({ name: "", email: "", message: "" });
        } else {
          throw new Error(data.message || "Failed to send message");
        }
      } catch (error) {
        console.error("Submission error:", error);
        setSubmitStatus({ 
          success: false, 
          message: `Gabim në dërgimin e mesazhit. Ju lutem provoni përsëri ose na kontaktoni direkt në idrizosmanii6@gmail.com. Gabim: ${error.message}`
        });
      } finally {
        setIsSubmitting(false);
      }
    };

    // SVG Icon Components
    const InstagramIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="6" r="1" fill="currentColor"/>
      </svg>
    );

    const FacebookIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" stroke="currentColor" strokeWidth="2" fill="none"/>
      </svg>
    );

    const LinkedInIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
        <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
        <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );

    const MailIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" stroke="currentColor" strokeWidth="2"/>
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );

    const PhoneIcon = () => (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2"/>
      </svg>
    );

    const TikTokIcon = () => (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" fill="currentColor"/>
      </svg>
    );

    const socialLinks = [
      { 
        icon: <InstagramIcon />, 
        url: "https://www.instagram.com/mavix.ks/", 
        color: "radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)",
        name: "Instagram"
      },
      { 
        icon: <FacebookIcon />, 
        url: "https://www.facebook.com/profile.php?id=61574342724335", 
        color: "#1877F2",
        name: "Facebook"
      },
      /*
      { 
        icon: <LinkedInIcon />, 
        url: "https://linkedin.com/in/yourprofile", 
        color: "#0077B5",
        name: "LinkedIn"
      },*/
      { 
        icon: <TikTokIcon />, 
        url: "https://www.tiktok.com/@mavix.ks", 
        color: "#0077B5",
        name: "Tiktok"
      }
    ];

    return (
      <div style={{
        minHeight: '100vh',
        background: '#040C19',
        color: '#ffffff',
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        padding: '40px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Animated background elements */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite'
        }}></div>
        
        <div style={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          animation: 'float 8s ease-in-out infinite 2s'
        }}></div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Header Section */}
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h1 className="kontaktih1" style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 700,
              marginBottom: '16px',
              marginLeft:'80px',
              background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              <a id="kontaktz"></a>
              Le të fillojmë <br className="mobile"></br> bashkëpunimin!
            </h1>
            <p  className="kontaktip"style={{
              fontSize: '1.25rem',
              color: '#94a3b8',
              maxWidth: '700px',
              margin: '0 auto',
              lineHeight: 1.6
            }}>
              
            Na kontaktoni sot dhe le ta <br className="mobile"></br> kthejmë vizionin tuaj në realitet.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '40px',
            '@media (min-width: 1024px)': {
              gridTemplateColumns: '1fr 1fr'
            }
          }}>
            {/* Contact Form */}
            <div style={{
              background: 'rgba(15, 23, 42, 0.5)',
              backdropFilter: 'blur(10px)',
              borderRadius: '16px',
              padding: '32px',
              border: '1px solid rgba(56, 189, 248, 0.1)',
              boxShadow: '0 8px 32px rgba(2, 6, 23, 0.5)'
            }}>
                    
              <h2 style={{
                fontSize: '1.75rem',
                fontWeight: 600,
                marginBottom: '24px',
                color: '#22d3ee'
              }}>Na shkruani</h2>
              
              {submitStatus && (
                <div style={{
                  padding: '12px',
                  marginBottom: '20px',
                  borderRadius: '8px',
                  background: submitStatus.success ? 'rgba(34, 211, 238, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                  border: `1px solid ${submitStatus.success ? '#22d3ee' : '#ef4444'}`,
                  color: submitStatus.success ? '#22d3ee' : '#ef4444'
                }}>
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '24px' }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '8px',
                    color: '#e2e8f0'
                  }}>Emri i plotë</label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      ':focus': {
                        outline: 'none',
                        borderColor: '#22d3ee',
                        boxShadow: '0 0 0 3px rgba(34, 211, 238, 0.2)'
                      }
                    }}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '8px',
                    color: '#e2e8f0'
                  }}>Email</label>
                  <input
                    type="email"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      ':focus': {
                        outline: 'none',
                        borderColor: '#22d3ee',
                        boxShadow: '0 0 0 3px rgba(34, 211, 238, 0.2)'
                      }
                    }}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.875rem',
                    fontWeight: 500,
                    marginBottom: '8px',
                    color: '#e2e8f0'
                  }}>Mesazhi</label>
                  <textarea
                    rows="5"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(30, 41, 59, 0.8)',
                      border: '1px solid rgba(56, 189, 248, 0.2)',
                      borderRadius: '8px',
                      color: '#f8fafc',
                      fontSize: '1rem',
                      transition: 'all 0.2s ease',
                      ':focus': {
                        outline: 'none',
                        borderColor: '#22d3ee',
                        boxShadow: '0 0 0 3px rgba(34, 211, 238, 0.2)'
                      }
                    }}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: '100%',
                    padding: '14px 24px',
                    background: 'linear-gradient(to right, #22d3ee, #3b82f6)',
                    color: 'white',
                    fontWeight: 600,
                    fontSize: '1rem',
                    borderRadius: '8px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                    opacity: isSubmitting ? 0.7 : 1,
                    ':hover': !isSubmitting ? {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 6px 12px rgba(34, 211, 238, 0.2)'
                    } : {}
                  }}
                >
                  {isSubmitting ? 'Duke dërguar...' : 'Dërgo mesazhin'}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>+
                <h2 style={{
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  marginBottom: '24px',
                  color: '#22d3ee'
                }}>Çfarë ofrojmë për ju?</h2>
                
                <p style={{
                  color: '#94a3b8',
                  marginBottom: '24px',
                  lineHeight: 1.6
                }}>
                  Çdo biznes ka nevojë për zgjidhje të ndryshme për të optimizuar praninë digitale.
                </p>
                
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                  gap: '12px'
                }}>
                  {[
                    "Website Development",
                    "Content Marketing",
                    "Graphic Design",
                    "Interior Design",
                    "Logo Design",
                    "3D Animation",
                    "SEO",
                    "Social Media"
                  ].map((service, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: '#22d3ee'
                      }}></div>
                      <span style={{ color: '#e2e8f0', fontSize: '0.9375rem' }}>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                paddingTop: '24px',
                borderTop: '1px solid rgba(56, 189, 248, 0.1)'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: '#22d3ee'
                }}>Na kontaktoni</h3>
                
                <div style={{ display: 'grid', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(34, 211, 238, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22d3ee'
                    }}>
                      <MailIcon />
                    </div>
                    <span style={{ color: '#e2e8f0' }}>idrizosmanii6@gmail.com</span>
                  </div>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(34, 211, 238, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#22d3ee'
                    }}>
                      <PhoneIcon />
                    </div>
                    <span style={{ color: '#e2e8f0' }}>+383-45-288-876/993-743</span>
                  </div>
                </div>
                
                <div style={{ marginTop: '32px' }}>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: 500,
                    marginBottom: '16px',
                    color: '#e2e8f0'
                  }}>Na ndjekni në rrjetet sociale</h4>
                  
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '50%',
                          background: social.color,
                          color: 'white',
                          transition: 'all 0.3s ease',
                          ':hover': {
                            transform: 'translateY(-3px)',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)'
                          }
                        }}
                        aria-label={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <div>
                    <br></br><br></br>
                    <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: '#22d3ee'
                }}>Code, Create, Captivate - The future is (y)ours!</h3>
                    <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 600,
                  marginBottom: '20px',
                  color: '#22d3ee'
                }}>© Mavix</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation styles */}
        <style>{`
          @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
          }
        `}</style>
      </div>
    );
  };

  export default ContactsPage;