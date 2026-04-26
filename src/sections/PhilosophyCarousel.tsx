import { useEffect, useRef, useState } from 'react';
import { philosophyConfig } from '../config';

export default function PhilosophyCarousel() {
  const WORDS = philosophyConfig.rollingWords;
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 350);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % WORDS.length);
        setAnimating(false);
      }, 350);
    }, 2200);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [WORDS.length]);

  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          width: '100%',
          minHeight: '100vh',
          background: 'transparent',
          display: 'flex',
        }}
      >
        {/* Left 30% — text panel */}
        <div style={{ flex: '0 0 30%', position: 'relative' }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '0 5vw 0 4vw',
            }}
          >
            {philosophyConfig.eyebrow && (
              <p
                className="font-sans-body"
                style={{
                  fontSize: '13px',
                  letterSpacing: '0.25em',
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  marginBottom: '24px',
                  textShadow: '0 2px 24px rgba(0,0,0,0.45)',
                }}
              >
                {philosophyConfig.eyebrow}
              </p>
            )}
            {philosophyConfig.title && (
              <h2
                className="font-serif-display"
                style={{
                  fontSize: 'clamp(28px, 2.5vw, 42px)',
                  fontWeight: 300,
                  lineHeight: 1.35,
                  color: '#ffffff',
                  marginBottom: '28px',
                  textShadow: '0 2px 24px rgba(0,0,0,0.45)',
                }}
              >
                {philosophyConfig.title}
              </h2>
            )}
            {philosophyConfig.body && (
              <p
                className="font-sans-body"
                style={{
                  fontSize: '15px',
                  lineHeight: 2,
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 300,
                  textShadow: '0 2px 24px rgba(0,0,0,0.45)',
                }}
              >
                {philosophyConfig.body}
              </p>
            )}
          </div>
        </div>

        {/* Right 70% — word carousel */}
        <div style={{ flex: '0 0 70%', position: 'relative' }}>
          <div
            style={{
              position: 'sticky',
              top: 0,
              width: '100%',
              height: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '40px',
            }}
          >
            {/* Main word display */}
            <div
              style={{
                height: '110px',
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: 'clamp(36px, 5vw, 68px)',
                  fontWeight: 300,
                  color: '#ffffff',
                  letterSpacing: '0.12em',
                  textShadow: '0 2px 30px rgba(0,0,0,0.55)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                  opacity: animating ? 0 : 1,
                  transform: animating ? 'translateY(16px)' : 'translateY(0)',
                  display: 'inline-block',
                  textTransform: 'uppercase',
                }}
              >
                {WORDS[current]}
              </span>
            </div>

            {/* Dot indicators */}
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              {WORDS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  style={{
                    width: idx === current ? '28px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    background: idx === current ? '#30B0D0' : 'rgba(255,255,255,0.3)',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    transition: 'all 0.3s ease',
                  }}
                />
              ))}
            </div>

            {/* All words as small pills */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
                maxWidth: '480px',
                padding: '0 2vw',
              }}
            >
              {WORDS.map((word, idx) => (
                <button
                  key={word}
                  onClick={() => goTo(idx)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '11px',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: idx === current ? '#30B0D0' : 'rgba(255,255,255,0.45)',
                    background: idx === current ? 'rgba(48,176,208,0.12)' : 'transparent',
                    border: `1px solid ${idx === current ? 'rgba(48,176,208,0.5)' : 'rgba(255,255,255,0.15)'}`,
                    borderRadius: '20px',
                    padding: '6px 16px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
