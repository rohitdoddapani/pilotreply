import React from "react";

const FooterSection: React.FC = () => (
  <footer
    style={{
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
      marginRight: 0,
    }}
  >
    <span
      style={{
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        justifyContent: 'center',
      }}
    >
      <svg
        style={{ width: '1.1em', height: '1.1em', marginRight: '0.25em' }}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      2025 pilotreply.com all rights reserved
    </span>
  </footer>
);

export default FooterSection; 