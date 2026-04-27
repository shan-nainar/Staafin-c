import { useEffect, useRef, useState } from 'react';
import { navigationConfig } from '../config';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  if (!navigationConfig.brandMark && navigationConfig.links.length === 0) {
    return null;
  }

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 100,
          padding: isMobile ? '16px 5vw' : '24px 4vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'background-color 0.5s ease',
          backgroundColor: scrolled ? 'rgba(5, 10, 15, 0.7)' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(8px)' : 'none',
          boxSizing: 'border-box',
        }}
      >
        <img
          src="elitelogo.png"
          alt="Elite Care And Support LTD"
          style={{ height: isMobile ? '48px' : '72px', width: 'auto', display: 'block' }}
        />

        {isMobile ? (
          /* Hamburger button */
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '5px',
            }}
          >
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff' }} />
            <span style={{ display: 'block', width: '24px', height: '2px', background: '#ffffff' }} />
          </button>
        ) : (
          <div style={{ display: 'flex', gap: '36px', alignItems: 'center' }}>
            {navigationConfig.links.map((item) => (
              <button
                key={item.targetId}
                onClick={() => handleNavClick(item.targetId)}
                className="font-sans-body"
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#FFFFFF',
                  opacity: 0.6,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  transition: 'opacity 0.4s ease',
                  padding: 0,
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.opacity = '1';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.opacity = '0.6';
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Full-screen mobile overlay */}
      {isMobile && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 200,
            background: 'rgba(5,10,15,0.97)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '40px',
            opacity: menuOpen ? 1 : 0,
            pointerEvents: menuOpen ? 'all' : 'none',
            transition: 'opacity 0.35s ease',
          }}
        >
          {/* Close button */}
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            style={{
              position: 'absolute',
              top: '20px',
              right: '5vw',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '28px',
              lineHeight: 1,
            }}
          >
            ×
          </button>

          {navigationConfig.links.map((item) => (
            <button
              key={item.targetId}
              onClick={() => handleNavClick(item.targetId)}
              className="font-sans-body"
              style={{
                background: 'none',
                border: 'none',
                color: '#FFFFFF',
                fontSize: '22px',
                letterSpacing: '0.12em',
                cursor: 'pointer',
                padding: 0,
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
