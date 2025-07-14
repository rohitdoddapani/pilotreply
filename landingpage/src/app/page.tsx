"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Home() {
  return (
    <main style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start',
      paddingTop: 0,
      maxWidth: '100vw',
      overflowX: 'hidden',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      position: 'relative',
      margin: 0
    }}>
      {/* Background Pattern */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      {/* Hero Section */}
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
          onClick={() => {
            const el = document.getElementById('waitlist-form');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
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

      {/* How It Works Section */}
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

      {/* Features Section */}
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

      {/* Use Cases Section */}
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
            }}>Ensure every reply matches your brand's tone and messaging.</p>
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

      {/* Early Access Form Section */}
      <section style={{ 
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
        overflow: 'hidden'
      }}
      id="waitlist-form"
      >
        {/* Background decoration */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-50%',
          width: '200%',
          height: '200%',
          background: 'radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%)',
          pointerEvents: 'none'
        }} />
        
        <h2 style={{ 
          fontSize: 'clamp(1.5rem, 3vw, 2rem)', 
          fontWeight: 700, 
          color: '#2d3748', 
          marginBottom: '1rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          position: 'relative',
          zIndex: 1
        }}>Join the Waitlist</h2>
        <p style={{ 
          color: '#718096', 
          marginBottom: '2rem',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          lineHeight: '1.5',
          position: 'relative',
          zIndex: 1
        }}>Be the first to try PilotReply. Get early access when we launch.</p>
        
        <div style={{ width: '100%', position: 'relative', zIndex: 1 }}>
          <EarlyAccessForm />
        </div>
      </section>

      {/* Footer */}
      <footer style={{ 
        width: '100%', 
        padding: '1.5rem 0', 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        borderTop: '1px solid #e5e7eb', 
        background: '#f9fafb', 
        marginTop: 'auto', 
        fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', 
        color: '#9ca3af', 
        boxShadow: '0 -2px 8px 0 rgba(0,0,0,0.03)',
        textAlign: 'center',
        position: 'relative',
        left: 'unset',
        right: 'unset',
        marginLeft: 0,
        marginRight: 0
      }}>
        <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <svg style={{ width: '1.1em', height: '1.1em', marginRight: '0.25em' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          2025 pilotreply.com all rights reserved
        </span>
      </footer>
    </main>
  );
}

function EarlyAccessForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_SUPABASE_WAITLIST_URL || "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "",
            Prefer: "return=representation",
          },
          body: JSON.stringify({ email, name }),
        }
      );
      if (!res.ok) {
        throw new Error("Failed to join waitlist.");
      }
      setSuccess(true);
      setEmail("");
      setName("");
    } catch (err: any) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      alignItems: 'center',
      width: '100%',
      maxWidth: '100%'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '20rem'
      }}>
        <input
          type="email"
          required
          placeholder="Your email"
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            border: '2px solid rgba(102, 126, 234, 0.2)',
            borderRadius: '1rem',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            outline: 'none',
            transition: 'all 0.3s ease',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'translateY(0)';
          }}
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={loading || success}
        />
        <svg style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1.2em',
          height: '1.2em',
          color: '#667eea',
          opacity: 0.6
        }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
        </svg>
      </div>
      
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '20rem'
      }}>
        <input
          type="text"
          placeholder="Your name (optional)"
          style={{
            width: '100%',
            padding: '1rem 1.5rem',
            border: '2px solid rgba(102, 126, 234, 0.2)',
            borderRadius: '1rem',
            fontSize: 'clamp(0.9rem, 2vw, 1rem)',
            outline: 'none',
            transition: 'all 0.3s ease',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)'
          }}
          onFocus={(e) => {
            e.target.style.borderColor = '#667eea';
            e.target.style.boxShadow = '0 0 0 4px rgba(102, 126, 234, 0.1)';
            e.target.style.transform = 'translateY(-2px)';
          }}
          onBlur={(e) => {
            e.target.style.borderColor = 'rgba(102, 126, 234, 0.2)';
            e.target.style.boxShadow = 'none';
            e.target.style.transform = 'translateY(0)';
          }}
          value={name}
          onChange={e => setName(e.target.value)}
          disabled={loading || success}
        />
        <svg style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '1.2em',
          height: '1.2em',
          color: '#667eea',
          opacity: 0.6
        }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      
      <button
        type="submit"
        style={{
          width: '100%',
          maxWidth: '20rem',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          fontWeight: 600,
          padding: '1rem 1.5rem',
          borderRadius: '1rem',
          border: 'none',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          cursor: 'pointer',
          transition: 'all 0.3s ease',
          opacity: (loading || success) ? 0.6 : 1,
          boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
          position: 'relative',
          overflow: 'hidden'
        }}
        onMouseEnter={(e) => {
          if (!loading && !success) {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.4)';
          }
        }}
        onMouseLeave={(e) => {
          if (!loading && !success) {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 16px rgba(102, 126, 234, 0.3)';
          }
        }}
        disabled={loading || success}
      >
        {loading ? (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ 
              width: '1.2em', 
              height: '1.2em', 
              marginRight: '0.5rem',
              animation: 'spin 1s linear infinite'
            }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582a8.001 8.001 0 0 0 15.836 0H20V4" />
            </svg>
            Joining...
          </span>
        ) : success ? (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg style={{ 
              width: '1.2em', 
              height: '1.2em', 
              marginRight: '0.5rem'
            }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Joined!
          </span>
        ) : (
          <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            Join Waitlist
            <svg style={{ 
              width: '1.2em', 
              height: '1.2em', 
              marginLeft: '0.5rem'
            }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        )}
      </button>
      {success && (
        <div style={{ 
          color: '#059669', 
          marginTop: '0.5rem',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          padding: '1rem',
          background: 'rgba(5, 150, 105, 0.1)',
          borderRadius: '1rem',
          border: '1px solid rgba(5, 150, 105, 0.2)',
          animation: 'fadeInUp 0.6s ease-out'
        }}>
          🎉 Thank you! You're on the waitlist. We'll notify you when we launch!
        </div>
      )}
      {error && (
        <div style={{ 
          color: '#dc2626', 
          marginTop: '0.5rem',
          fontSize: 'clamp(0.9rem, 2vw, 1rem)',
          textAlign: 'center',
          padding: '1rem',
          background: 'rgba(220, 38, 38, 0.1)',
          borderRadius: '1rem',
          border: '1px solid rgba(220, 38, 38, 0.2)',
          animation: 'fadeInUp 0.6s ease-out'
        }}>
          ❌ {error}
        </div>
      )}
    </form>
  );
}

// Add responsive CSS for use-case-card hover effect and media queries
if (typeof window !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(-5deg); }
      50% { transform: translateY(-10px) rotate(-5deg); }
    }
    
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.05); }
    }
    
    @keyframes spin {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    .step-card {
      animation: fadeInUp 0.6s ease-out;
    }
    
    .step-card:nth-child(1) { animation-delay: 0.1s; }
    .step-card:nth-child(2) { animation-delay: 0.2s; }
    .step-card:nth-child(3) { animation-delay: 0.3s; }
    
    .step-card:hover {
      transform: translateY(-5px);
    }
    
    .feature-card {
      animation: fadeInUp 0.6s ease-out;
      transition: all 0.3s ease;
    }
    
    .feature-card:nth-child(1) { animation-delay: 0.1s; }
    .feature-card:nth-child(2) { animation-delay: 0.2s; }
    .feature-card:nth-child(3) { animation-delay: 0.3s; }
    .feature-card:nth-child(4) { animation-delay: 0.4s; }
    
    .feature-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 20px 40px rgba(102, 126, 234, 0.15);
      border-color: rgba(102, 126, 234, 0.3);
    }
    
    .feature-card:hover > div:first-child {
      animation: pulse 1s ease-in-out;
    }
    
    .use-case-card:hover { 
      box-shadow: 0 8px 32px rgba(102, 126, 234, 0.15); 
      transform: translateY(-4px) scale(1.02); 
      border: 1px solid rgba(102, 126, 234, 0.2);
    }
    
    .use-case-card {
      transition: all 0.3s ease;
      animation: fadeInUp 0.6s ease-out;
    }
    
    .use-case-card:nth-child(1) { animation-delay: 0.1s; }
    .use-case-card:nth-child(2) { animation-delay: 0.2s; }
    .use-case-card:nth-child(3) { animation-delay: 0.3s; }
    .use-case-card:nth-child(4) { animation-delay: 0.4s; }
    
    @media (max-width: 768px) {
      .use-case-card:hover {
        transform: translateY(-2px) scale(1.01);
      }
      
      .feature-card:hover {
        transform: translateY(-4px) scale(1.01);
      }
    }
    
    @media (max-width: 480px) {
      .use-case-card:hover {
        transform: none;
      }
      
      .feature-card:hover {
        transform: none;
      }
    }
    
    /* Smooth scrolling */
    html {
      scroll-behavior: smooth;
    }
    
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
    }
    
    ::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.1);
    }
    
    ::-webkit-scrollbar-thumb {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 4px;
    }
    
    ::-webkit-scrollbar-thumb:hover {
      background: linear-gradient(135deg, #5a67d8 0%, #6b46c1 100%);
    }

    @media (max-width: 600px) {
      .responsive-section {
        width: 90% !important;
      }
    }

    .card-grid-4 {
      grid-template-columns: repeat(2, 1fr) !important;
    }
    @media (max-width: 600px) {
      .card-grid-4 {
        grid-template-columns: 1fr !important;
      }
    }
  `;
  document.head.appendChild(style);
}
