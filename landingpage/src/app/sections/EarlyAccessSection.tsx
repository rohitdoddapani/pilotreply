import React from "react";
import EarlyAccessForm from "./EarlyAccessForm";

const EarlyAccessSection: React.FC = () => (
  <section
    style={{
      width: '90%',
      maxWidth: '32rem',
      textAlign: 'center',
      padding: 'clamp(2rem, 4vw, 4rem) 1rem',
      marginBottom: '2rem',
      background: 'rgba(255,255,255,0.95)',
      borderRadius: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.2)',
      position: 'relative',
      overflow: 'hidden',
    }}
    id="waitlist-form"
  >
    {/* Background decoration */}
    <div
      style={{
        position: 'absolute',
        top: '-50%',
        right: '-50%',
        width: '200%',
        height: '200%',
        background:
          'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }}
    />
    <h2
      style={{
        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
        fontWeight: 700,
        color: '#2d3748',
        marginBottom: '1rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        position: 'relative',
        zIndex: 1,
      }}
    >
      Join the Waitlist
    </h2>
    <p
      style={{
        color: '#718096',
        marginBottom: '2rem',
        fontSize: 'clamp(0.9rem, 2vw, 1rem)',
        lineHeight: '1.5',
        position: 'relative',
        zIndex: 1,
      }}
    >
      Be the first to try PilotReply. Get early access when we launch.
    </p>
    <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
      <EarlyAccessForm />
    </div>
  </section>
);

export default EarlyAccessSection; 