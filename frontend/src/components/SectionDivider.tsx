interface SectionDividerProps {
  className?: string;
  light?: boolean;
}

export default function SectionDivider({ className = '', light = false }: SectionDividerProps) {
  return (
    <div className={`relative flex items-center justify-center py-2 ${className}`}>
      <div className="section-divider" />
      <div
        className="absolute flex items-center gap-2"
        style={{ transform: 'translateY(-50%)', top: '50%' }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: light ? 'rgba(189,216,233,0.4)' : 'rgba(0,29,57,0.2)' }}
        />
        <div
          className="w-8 h-px"
          style={{ background: light ? 'rgba(189,216,233,0.3)' : 'rgba(0,29,57,0.15)' }}
        />
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 2L9.5 6.5H14L10.5 9L12 13.5L8 11L4 13.5L5.5 9L2 6.5H6.5L8 2Z"
            fill={light ? 'rgba(123,189,232,0.35)' : 'rgba(0,29,57,0.12)'}
          />
        </svg>
        <div
          className="w-8 h-px"
          style={{ background: light ? 'rgba(189,216,233,0.3)' : 'rgba(0,29,57,0.15)' }}
        />
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: light ? 'rgba(189,216,233,0.4)' : 'rgba(0,29,57,0.2)' }}
        />
      </div>
    </div>
  );
}
