import React from "react";

const HowItWorksSection: React.FC = () => (
  <section className="responsive-section" style={{ 
    width: '90%', 
    maxWidth: '56rem', 
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
    }}>How It Works</h2>
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '2rem', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column',
        gap: '2rem',
        alignItems: 'center', 
        justifyContent: 'center', 
        width: '100%',
        maxWidth: '100%'
      }}>
        {/* Step 1 */}
        <div style={{ 
          flex: 1, 
          minWidth: 'auto',
          maxWidth: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '0 1rem',
          transition: 'transform 0.3s ease'
        }} className="step-card">
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            borderRadius: '9999px', 
            width: 64, 
            height: 64, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 16,
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
            position: 'relative'
          }}>
            <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#ff6b6b',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>1</div>
          </div>
          <h3 style={{ 
            fontWeight: 600, 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: 8,
            textAlign: 'center',
            color: '#2d3748'
          }}>Connect Your Google Business Account</h3>
          <p style={{ 
            color: '#718096', 
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>Securely link your Google account to get started.</p>
        </div>
        {/* Step 2 */}
        <div style={{ 
          flex: 1, 
          minWidth: 'auto',
          maxWidth: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '0 1rem',
          transition: 'transform 0.3s ease'
        }} className="step-card">
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            borderRadius: '9999px', 
            width: 64, 
            height: 64, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 16,
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
            position: 'relative'
          }}>
            <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19.5 2 21l1.5-5L16.5 3.5z"/></svg>
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#4ecdc4',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>2</div>
          </div>
          <h3 style={{ 
            fontWeight: 600, 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: 8,
            textAlign: 'center',
            color: '#2d3748'
          }}>PilotReply Generates Smart Responses</h3>
          <p style={{ 
            color: '#718096', 
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>AI drafts personalized replies for each review in seconds.</p>
        </div>
        {/* Step 3 */}
        <div style={{ 
          flex: 1, 
          minWidth: 'auto',
          maxWidth: '100%',
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          padding: '0 1rem',
          transition: 'transform 0.3s ease'
        }} className="step-card">
          <div style={{ 
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
            borderRadius: '9999px', 
            width: 64, 
            height: 64, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: 16,
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
            position: 'relative'
          }}>
            <svg width="32" height="32" fill="none" stroke="white" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M5 13l4 4L19 7"/></svg>
            <div style={{
              position: 'absolute',
              top: '-4px',
              right: '-4px',
              background: '#ff6b6b',
              color: 'white',
              borderRadius: '50%',
              width: '24px',
              height: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.75rem',
              fontWeight: 'bold'
            }}>3</div>
          </div>
          <h3 style={{ 
            fontWeight: 600, 
            fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
            marginBottom: 8,
            textAlign: 'center',
            color: '#2d3748'
          }}>You Review & Approve or Auto-Post</h3>
          <p style={{ 
            color: '#718096', 
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            textAlign: 'center',
            lineHeight: '1.5'
          }}>Edit, approve, or let PilotReply auto-post your replies.</p>
        </div>
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

export default HowItWorksSection; 