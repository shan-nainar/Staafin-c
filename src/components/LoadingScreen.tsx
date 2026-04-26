import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#050A0F',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '24px',
        transition: 'opacity 0.6s ease',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <style>{`
        @keyframes logoBreath {
          0%, 100% { transform: scale(1); opacity: 0.9; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes ripple {
          0% { transform: scale(0.85); opacity: 0.6; }
          100% { transform: scale(1.6); opacity: 0; }
        }
        @keyframes barGrow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}</style>

      {/* Ripple rings */}
      <div style={{ position: 'relative', width: '160px', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {[0, 0.4, 0.8].map((delay, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              border: '1.5px solid rgba(48,176,208,0.4)',
              animation: `ripple 2s ${delay}s ease-out infinite`,
            }}
          />
        ))}

        {/* Logo */}
        <img
          src="elitelogo.png"
          alt="Elite Care and Support"
          style={{
            width: '120px',
            height: '120px',
            objectFit: 'contain',
            animation: 'logoBreath 2s ease-in-out infinite',
            position: 'relative',
            zIndex: 1,
          }}
        />
      </div>

      {/* Company name */}
      <p
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '18px',
          fontWeight: 300,
          letterSpacing: '0.2em',
          color: 'rgba(237,232,228,0.85)',
          textTransform: 'uppercase',
          margin: 0,
        }}
      >
        Elite Care and Support
      </p>

      {/* Progress bar */}
      <div style={{ width: '160px', height: '2px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
        <div
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #30B0D0, rgba(48,176,208,0.4))',
            borderRadius: '2px',
            animation: 'barGrow 1.6s ease-out forwards',
          }}
        />
      </div>
    </div>
  );
}
