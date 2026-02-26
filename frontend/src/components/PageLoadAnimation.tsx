import { useEffect, useState } from 'react';

export default function PageLoadAnimation() {
  const [visible, setVisible] = useState(() => {
    return !sessionStorage.getItem('unai_loaded');
  });

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem('unai_loaded', '1');
    }, 2200);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
      style={{
        animation: 'loadReveal 0.9s cubic-bezier(0.76, 0, 0.24, 1) 1.4s forwards',
        transformOrigin: 'top',
      }}
    >
      <div
        className="text-center"
        style={{ animation: 'pageFadeIn 0.6s ease 0.3s both' }}
      >
        <div
          className="font-serif text-6xl md:text-8xl font-bold tracking-widest text-unai-bg"
          style={{ letterSpacing: '0.3em' }}
        >
          UNAI
        </div>
        <div
          className="mt-4 text-soft-blue text-sm tracking-[0.4em] uppercase font-light"
          style={{ animation: 'pageFadeIn 0.6s ease 0.6s both', opacity: 0 }}
        >
          Technology with Purpose
        </div>
        <div className="mt-8 flex justify-center gap-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-highlight"
              style={{
                animation: `pulseGlow 1.2s ease ${i * 0.2}s infinite`,
                opacity: 0.7,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
