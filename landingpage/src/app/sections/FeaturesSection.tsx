import React from "react";

const FeaturesSection: React.FC = () => (
  <section className="responsive-section" style={{ 
    width: '90%', 
    maxWidth: '64rem', 
    textAlign: 'center', 
    padding: 'clamp(2rem, 4vw, 4rem) 1rem', 
    marginBottom: '2rem', 
    background: 'rgba(255,255,255,0.95)', 
    borderRadius: '2rem', 
    boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255,255,255,0.2)'
  }}>
    <h2 style={{ 
      fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
      fontWeight: 700, 
      color: '#2d3748', 
      marginBottom: '1.5rem',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }}>Features</h2>
    <div className="card-grid-4" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      padding: '0 1rem'
    }}>
      {/* Feature 1 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }} className="feature-card">
        <div style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
        }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m0-13.414l1.414 1.414M17.95 17.95l1.414 1.414"/>
          </svg>
        </div>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center',
          color: '#2d3748'
        }}>AI-Powered Replies</h3>
        <p style={{ 
          color: '#718096', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>Let advanced AI craft thoughtful, on-brand responses for every review.</p>
      </div>
      {/* Feature 2 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }} className="feature-card">
        <div style={{ 
          background: 'linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          boxShadow: '0 8px 16px rgba(78, 205, 196, 0.3)'
        }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M4 4v5h.582a8.001 8.001 0 0 0 15.836 0H20V4"/>
            <path d="M8 12l4 4 4-4"/>
          </svg>
        </div>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center',
          color: '#2d3748'
        }}>Multi-Platform Expansion Coming Soon</h3>
        <p style={{ 
          color: '#718096', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>Reply to reviews across Google, Facebook, Yelp, and more (coming soon).</p>
      </div>
      {/* Feature 3 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }} className="feature-card">
        <div style={{ 
          background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)'
        }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.2" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        </div>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center',
          color: '#2d3748'
        }}>Customizable Tone & Language</h3>
        <p style={{ 
          color: '#718096', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>Set your brand voice and language preferences for every reply.</p>
      </div>
      {/* Feature 4 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        padding: '1.5rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%)',
        borderRadius: '1.5rem',
        border: '1px solid rgba(102, 126, 234, 0.1)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
      }} className="feature-card">
        <div style={{ 
          background: 'linear-gradient(135deg, #feca57 0%, #ff9ff3 100%)',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1rem',
          boxShadow: '0 8px 16px rgba(254, 202, 87, 0.3)'
        }}>
          <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2.2" strokeLinecap="round">
            <path d="M17 18a5 5 0 0 0 0-10h-1.26A8 8 0 1 0 7 17.75"/>
          </svg>
        </div>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center',
          color: '#2d3748'
        }}>Learns from Past Replies</h3>
        <p style={{ 
          color: '#718096', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>PilotReply adapts and improves by learning from your previous responses.</p>
      </div>
    </div>
    <div style={{ 
      height: '4px', 
      width: '4rem', 
      background: 'linear-gradient(90deg, #667eea, #764ba2)', 
      margin: '3rem auto', 
      borderRadius: '9999px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }} />
  </section>
);

export default FeaturesSection; 