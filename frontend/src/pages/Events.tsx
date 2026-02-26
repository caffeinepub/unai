import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

type EventCategory = 'All' | 'Conferences' | 'Product Launches' | 'Tech Summits' | 'Webinars';

const allEvents = [
  {
    category: 'Tech Summits' as const,
    date: 'March 15, 2026',
    title: 'AI & Enterprise Summit 2026',
    desc: 'Exploring the frontier of enterprise AI — from large language models to autonomous systems reshaping industries.',
    featured: true,
  },
  {
    category: 'Product Launches' as const,
    date: 'April 8, 2026',
    title: 'UNAI Nexus 3.0 Launch',
    desc: 'Unveiling the next generation of our flagship enterprise intelligence platform with groundbreaking AI capabilities.',
    featured: false,
  },
  {
    category: 'Conferences' as const,
    date: 'May 22, 2026',
    title: 'Digital Leaders Forum',
    desc: 'Where C-suite executives and technology leaders converge to shape the digital agenda for the decade ahead.',
    featured: true,
  },
  {
    category: 'Webinars' as const,
    date: 'June 5, 2026',
    title: 'Cloud Architecture Masterclass',
    desc: 'A deep-dive into modern cloud-native architecture patterns for enterprise-scale applications.',
    featured: false,
  },
  {
    category: 'Tech Summits' as const,
    date: 'July 18, 2026',
    title: 'Data & Analytics Innovation Summit',
    desc: 'Cutting-edge insights on data engineering, real-time analytics, and the future of business intelligence.',
    featured: false,
  },
  {
    category: 'Conferences' as const,
    date: 'August 30, 2026',
    title: 'Global Technology Conference',
    desc: 'An international gathering of technology innovators, researchers, and enterprise leaders driving global change.',
    featured: true,
  },
  {
    category: 'Webinars' as const,
    date: 'September 12, 2026',
    title: 'AI Ethics & Governance Webinar',
    desc: 'Navigating the complex landscape of responsible AI deployment in enterprise environments.',
    featured: false,
  },
  {
    category: 'Product Launches' as const,
    date: 'October 20, 2026',
    title: 'UNAI Pulse Analytics Launch',
    desc: 'Introducing our revolutionary AI-powered analytics suite designed for real-time enterprise intelligence.',
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Conferences: '#7BBDE8',
  'Product Launches': '#4E8EA2',
  'Tech Summits': '#0A4174',
  Webinars: '#49769F',
};

export default function Events() {
  const [activeCategory, setActiveCategory] = useState<EventCategory>('All');
  const bannerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const titleRef = useScrollReveal();

  const categories: EventCategory[] = ['All', 'Conferences', 'Product Launches', 'Tech Summits', 'Webinars'];

  const filtered =
    activeCategory === 'All' ? allEvents : allEvents.filter((e) => e.category === activeCategory);

  useEffect(() => {
    const onScroll = () => {
      if (!bannerRef.current || !bgRef.current) return;
      const rect = bannerRef.current.getBoundingClientRect();
      const progress = -rect.top / rect.height;
      bgRef.current.style.transform = `translateY(${progress * 40}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-fade-in pt-24">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          EVENTS
        </div>
        <div ref={titleRef} className="reveal section-container relative z-10 text-center">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            Events & Innovation
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl font-bold text-navy dark:text-unai-bg leading-none mb-6">
            Where Ideas
            <br />
            <span className="italic text-royal dark:text-highlight">Shape Industries</span>
          </h1>
        </div>
      </section>

      {/* Parallax Banner */}
      <section ref={bannerRef} className="relative h-64 md:h-80 overflow-hidden bg-navy">
        <div
          ref={bgRef}
          className="absolute inset-0 -top-10 -bottom-10"
          style={{ willChange: 'transform' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy via-royal/80 to-navy" />
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-highlight/10" />
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border border-soft-blue/10" />
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <h2 className="heading-serif text-4xl md:text-5xl lg:text-6xl font-bold text-unai-bg italic">
            "Where Innovation Meets Industry"
          </h2>
        </div>
      </section>

      <SectionDivider />

      {/* Filter + Events */}
      <section className="py-32">
        <div className="section-container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-16 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-navy dark:bg-highlight text-unai-bg dark:text-navy shadow-soft'
                    : 'glass text-navy dark:text-unai-bg hover:bg-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            {filtered.map((event, i) => {
              const color = categoryColors[event.category];
              return (
                <div
                  key={`${event.title}-${i}`}
                  className="masonry-item"
                  style={{
                    animation: 'pageFadeIn 0.4s ease forwards',
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <GlassCard
                    className={`p-6 card-hover ${event.featured ? 'border-l-2' : ''}`}
                    style={{ borderLeftColor: event.featured ? color : undefined } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                        style={{ background: `${color}15`, color }}
                      >
                        <Tag size={10} />
                        {event.category}
                      </div>
                      {event.featured && (
                        <div className="text-xs font-medium text-highlight tracking-wide">Featured</div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-navy/40 dark:text-unai-bg/40 text-xs mb-3">
                      <Calendar size={12} />
                      {event.date}
                    </div>
                    <h3 className="font-serif text-lg font-bold text-navy dark:text-unai-bg mb-3 leading-snug">
                      {event.title}
                    </h3>
                    <p className="text-navy/55 dark:text-unai-bg/55 text-sm font-light leading-relaxed mb-4">
                      {event.desc}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-xs font-medium group"
                      style={{ color }}
                    >
                      Learn More
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-1 transition-transform duration-300"
                      />
                    </a>
                  </GlassCard>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
