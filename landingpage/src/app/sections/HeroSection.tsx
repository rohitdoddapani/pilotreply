import React from "react";

const HeroSection: React.FC<{ onGetEarlyAccess?: () => void }> = ({ onGetEarlyAccess }) => (
  <section style={{ 
    width: '100%', 
    maxWidth: '40rem', 
    textAlign: 'center', 
    padding: '3rem 1rem', 
    marginBottom: '2rem',
    position: 'relative', 
    overflow: 'hidden',
    zIndex: 1
  }}>
    {/* Soft Illustration/Icon */}
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      marginBottom: '1.5rem',
      animation: 'float 6s ease-in-out infinite'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '20px',
        padding: '1.5rem',
        boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
        transform: 'rotate(-5deg)',
        transition: 'transform 0.3s ease'
      }}>
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="8" y="8" width="48" height="48" rx="12" fill="rgba(255,255,255,0.9)" />
          <path d="M20 32h24M20 40h24" stroke="#667eea" strokeWidth="3" strokeLinecap="round" />
          <rect x="20" y="20" width="24" height="6" rx="3" fill="#667eea" />
        </svg>
      </div>
    </div>
    <h1 style={{ 
      fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', 
      fontWeight: 800, 
      color: '#ffffff', 
      marginBottom: '1rem',
      lineHeight: '1.2',
      textShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      Auto-Reply to Google Reviews with AI
    </h1>
    <p style={{ 
      fontSize: 'clamp(1rem, 2.5vw, 1.25rem)', 
      color: 'rgba(255,255,255,0.9)', 
      marginBottom: '2rem',
      lineHeight: '1.5'
    }}>
      PilotReply helps you save hours by generating smart, personalized review replies—automatically.
    </p>
    <button
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        padding: '1rem 2rem',
        borderRadius: '50px',
        fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
        fontWeight: 600,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
        marginBottom: '2rem',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}
      onClick={onGetEarlyAccess}
    >
      Get Early Access
      <svg style={{ width: '1.2em', height: '1.2em', marginLeft: '0.5rem', transition: 'transform 0.3s ease' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
      </svg>
    </button>
    <div style={{ 
      height: '4px', 
      width: '4rem', 
      background: 'linear-gradient(90deg, #ff6b6b, #4ecdc4)', 
      margin: '0 auto 2rem', 
      borderRadius: '9999px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }} />
  </section>
);

export default HeroSection; 