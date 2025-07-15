import React, { useState } from "react";

const EarlyAccessForm: React.FC = () => {
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
      const url = process.env.NEXT_PUBLIC_SUPABASE_WAITLIST_URL;
      const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      
      if (!url || !key) {
        throw new Error("Missing configuration");
      }
      
      // Debug logging (will show in browser console)
      console.log("Submitting to:", url);
      console.log("Key present:", !!key);
      
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "apikey": key,
          "Authorization": `Bearer ${key}`,
          "Prefer": "return=representation",
        },
        body: JSON.stringify({ email, name }),
      });
      
      console.log("Response status:", res.status);
      console.log("Response headers:", Object.fromEntries(res.headers.entries()));
      
      if (!res.ok) {
        const errorText = await res.text();
        console.error("Error response:", errorText);
        if(res.status == 409) {
          throw new Error("You're already on the waitlist!");
        }
        throw new Error(`Failed to join waitlist`);
      }
      
      setSuccess(true);
      setEmail("");
      setName("");
    } catch (err: unknown) {
      console.error("Form error:", err);
      setError(err instanceof Error ? err.message : "Something went wrong.");
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
          🎉 Thank you! You&apos;re on the waitlist. We&apos;ll notify you when we launch!
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
};

export default EarlyAccessForm; 