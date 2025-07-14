import React from "react";

const UseCasesSection: React.FC = () => (
  <section style={{ 
    width: '100%', 
    maxWidth: '64rem', 
    textAlign: 'center', 
    padding: 'clamp(2rem, 4vw, 4rem) 1rem', 
    marginBottom: '2rem'
  }}>
    <h2 style={{ 
      fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
      fontWeight: 700, 
      color: '#171717', 
      marginBottom: '1.5rem' 
    }}>Why Should Businesses Use This?</h2>
    <div className="card-grid-4" style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: 'clamp(1rem, 3vw, 2rem)',
      padding: '0 1rem'
    }}>
      {/* Use Case 1 */}
      <div className="use-case-card" style={{ 
        transition: 'box-shadow 0.2s, transform 0.2s', 
        background: '#f8fafc', 
        borderRadius: '1rem', 
        padding: 'clamp(1.5rem, 3vw, 2rem)', 
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center'
        }}>Save Time & Resources</h3>
        <p style={{ 
          color: '#52525b', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>No more manual review replies—free up your team for higher-value work.</p>
      </div>
      {/* Use Case 2 */}
      <div className="use-case-card" style={{ 
        transition: 'box-shadow 0.2s, transform 0.2s', 
        background: '#f8fafc', 
        borderRadius: '1rem', 
        padding: 'clamp(1.5rem, 3vw, 2rem)', 
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center'
        }}>Boost Customer Trust</h3>
        <p style={{ 
          color: '#52525b', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>Respond quickly and thoughtfully to every review, showing you care.</p>
      </div>
      {/* Use Case 3 */}
      <div className="use-case-card" style={{ 
        transition: 'box-shadow 0.2s, transform 0.2s', 
        background: '#f8fafc', 
        borderRadius: '1rem', 
        padding: 'clamp(1.5rem, 3vw, 2rem)', 
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center'
        }}>Consistent Brand Voice</h3>
        <p style={{ 
          color: '#52525b', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>Ensure every reply matches your brand&apos;s tone and messaging.</p>
      </div>
      {/* Use Case 4 */}
      <div className="use-case-card" style={{ 
        transition: 'box-shadow 0.2s, transform 0.2s', 
        background: '#f8fafc', 
        borderRadius: '1rem', 
        padding: 'clamp(1.5rem, 3vw, 2rem)', 
        boxShadow: '0 1px 4px 0 rgba(0,0,0,0.04)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <h3 style={{ 
          fontWeight: 600, 
          fontSize: 'clamp(1rem, 2.5vw, 1.1rem)', 
          marginBottom: 8,
          textAlign: 'center'
        }}>Grow Your Reputation</h3>
        <p style={{ 
          color: '#52525b', 
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          lineHeight: '1.5'
        }}>More replies = better engagement, higher ratings, and improved SEO.</p>
      </div>
    </div>
    <div style={{ height: '4px', width: '4rem', background: '#e0e7ff', margin: '3rem auto', borderRadius: '9999px' }} />
  </section>
);

export default UseCasesSection; 