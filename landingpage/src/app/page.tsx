"use client";

import React from "react";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import FeaturesSection from "./sections/FeaturesSection";
import UseCasesSection from "./sections/UseCasesSection";
import EarlyAccessSection from "./sections/EarlyAccessSection";
import FooterSection from "./sections/FooterSection";

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

      <HeroSection />
      <HowItWorksSection />
      <FeaturesSection />
      <UseCasesSection />
      <EarlyAccessSection />
      <FooterSection />
    </main>
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
