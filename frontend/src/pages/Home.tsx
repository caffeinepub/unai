import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ChevronRight, Brain, Building2, Zap, LineChart } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Brain,
    title: 'AI Solutions',
    desc: 'Intelligent systems that learn, adapt, and transform your operations at scale.',
    color: '#7BBDE8',
  },
  {
    icon: Building2,
    title: 'Enterprise Systems',
    desc: 'Robust, scalable infrastructure built for the demands of modern enterprise.',
    color: '#4E8EA2',
  },
  {
    icon: Zap,
    title: 'Digital Transformation',
    desc: 'End-to-end digital evolution strategies that future-proof your business.',
    color: '#49769F',
  },
  {
    icon: LineChart,
    title: 'Consulting & Strategy',
    desc: 'Expert guidance to navigate complexity and unlock sustainable growth.',
    color: '#0A4174',
  },
];

const products = [
  { img: '/assets/generated/product-mockup-1.dim_800x560.png', name: 'UNAI Nexus', tag: 'Enterprise Platform' },
  { img: '/assets/generated/product-mockup-2.dim_800x560.png', name: 'UNAI Pulse', tag: 'AI Analytics' },
  { img: '/assets/generated/product-mockup-3.dim_800x560.png', name: 'UNAI Core', tag: 'Infrastructure' },
];

const events = [
  { date: 'Mar 15, 2026', title: 'AI Summit 2026', type: 'Tech Summit', desc: 'Exploring the frontier of enterprise AI.' },
  { date: 'Apr 8, 2026', title: 'UNAI Product Launch', type: 'Product Launch', desc: 'Unveiling our next-generation platform.' },
  { date: 'May 22, 2026', title: 'Digital Leaders Forum', type: 'Conference', desc: 'Where industry leaders shape the future.' },
];

function ParallaxHero() {
  const bgRef = useRef<HTMLDivElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (bgRef.current) bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      if (shapeRef.current) shapeRef.current.style.transform = `translateY(${y * 0.15}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div
        ref={bgRef}
        className="absolute inset-0 -top-20 -bottom-20"
        style={{ willChange: 'transform' }}
      >
        <img
          src="/assets/generated/hero-bg.dim_1920x1080.png"
          alt=""
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-unai-bg via-unai-bg/80 to-transparent dark:from-navy dark:via-navy/80" />
      </div>

      <div ref={shapeRef} className="absolute inset-0 pointer-events-none" style={{ willChange: 'transform' }}>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full border border-highlight/20 float-anim" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/3 w-32 h-32 rounded-full border border-soft-blue/15 float-anim" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/5 w-48 h-48 rounded-2xl border border-teal/10 float-anim" style={{ animationDelay: '1s', transform: 'rotate(15deg)' }} />
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-highlight/40"
            style={{
              top: `${15 + i * 10}%`,
              right: `${10 + (i % 4) * 15}%`,
              animation: `float ${4 + i * 0.5}s ease-in-out ${i * 0.3}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="section-container relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="page-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
              <div className="w-2 h-2 rounded-full bg-highlight animate-pulse" />
              <span className="text-xs font-medium tracking-[0.15em] uppercase text-navy dark:text-unai-bg">
                Enterprise Technology
              </span>
            </div>

            <h1 className="heading-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-unai-bg mb-6 leading-tight">
              Enterprise
              <br />
              <span className="italic text-royal dark:text-highlight">Technology.</span>
              <br />
              Reimagined.
            </h1>

            <p className="text-navy/60 dark:text-unai-bg/60 text-lg leading-relaxed max-w-md mb-10 font-light">
              AI-powered transformation. Innovation-driven systems. Smart automation solutions built for the enterprises of tomorrow.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy font-medium text-sm tracking-wide hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 shadow-soft-lg group"
              >
                Explore Services
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                to="/contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full glass border border-navy/20 dark:border-unai-bg/20 text-navy dark:text-unai-bg font-medium text-sm tracking-wide hover:bg-white/20 transition-all duration-300 group"
              >
                Talk to Us
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex flex-col gap-4 items-end">
            <GlassCard className="p-5 w-64">
              <div className="text-3xl font-serif font-bold text-navy dark:text-unai-bg">12+</div>
              <div className="text-sm text-navy/60 dark:text-unai-bg/60 mt-1">Years of Excellence</div>
            </GlassCard>
            <GlassCard className="p-5 w-56 ml-8">
              <div className="text-3xl font-serif font-bold text-navy dark:text-unai-bg">350+</div>
              <div className="text-sm text-navy/60 dark:text-unai-bg/60 mt-1">Projects Delivered</div>
            </GlassCard>
            <GlassCard className="p-5 w-64">
              <div className="text-3xl font-serif font-bold text-navy dark:text-unai-bg">18</div>
              <div className="text-sm text-navy/60 dark:text-unai-bg/60 mt-1">Industries Served</div>
            </GlassCard>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <div className="w-px h-12 bg-navy dark:bg-unai-bg animate-pulse" />
        <span className="text-xs tracking-[0.2em] uppercase text-navy dark:text-unai-bg">Scroll</span>
      </div>
    </section>
  );
}

function AboutPreview() {
  const ref = useScrollReveal();
  const imgRef = useScrollReveal<HTMLDivElement>();

  return (
    <section className="py-32 overflow-hidden">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imgRef} className="reveal relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src="/assets/generated/about-feature.dim_900x700.png"
                alt="UNAI Office"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/30 to-transparent" />
            </div>
            <GlassCard className="absolute -bottom-6 -right-6 p-6 w-56">
              <div className="space-y-3">
                {[
                  { val: '12+', label: 'Years Experience' },
                  { val: '350+', label: 'Projects Delivered' },
                  { val: '18', label: 'Industries Served' },
                ].map((m) => (
                  <div key={m.label} className="flex items-center justify-between">
                    <span className="text-xs text-navy/60 dark:text-unai-bg/60">{m.label}</span>
                    <span className="font-serif font-bold text-navy dark:text-unai-bg">{m.val}</span>
                  </div>
                ))}
              </div>
            </GlassCard>
          </div>

          <div ref={ref} className="reveal">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              About UNAI
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg mb-6 leading-tight">
              Technology
              <br />
              <span className="italic">with Purpose</span>
            </h2>
            <p className="text-navy/60 dark:text-unai-bg/60 leading-relaxed mb-6 font-light">
              UNAI is an enterprise technology company at the intersection of artificial intelligence, digital transformation, and strategic consulting. We partner with organizations to build the systems that define their future.
            </p>
            <p className="text-navy/60 dark:text-unai-bg/60 leading-relaxed mb-8 font-light">
              Our approach is rooted in precision, purpose, and a deep understanding of the industries we serve. Every solution we build is crafted to endure.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sm font-medium text-royal dark:text-highlight border-b border-royal/30 dark:border-highlight/30 pb-1 hover:border-royal dark:hover:border-highlight transition-all duration-300 group"
            >
              Discover Our Story
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted sub-component so hook is called at top level
function ServiceCard({
  svc,
  delay,
}: {
  svc: (typeof services)[0];
  delay: number;
}) {
  const cardRef = useScrollReveal();
  return (
    <div ref={cardRef} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <GlassCard className="p-8 card-hover border-reveal h-full group cursor-pointer">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${svc.color}20` }}
        >
          <svc.icon size={22} style={{ color: svc.color }} />
        </div>
        <h3 className="font-serif text-xl font-bold text-navy dark:text-unai-bg mb-3">
          {svc.title}
        </h3>
        <p className="text-navy/60 dark:text-unai-bg/60 text-sm leading-relaxed font-light">
          {svc.desc}
        </p>
        <div className="mt-6 flex items-center gap-2 text-xs font-medium text-royal dark:text-highlight opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Learn More <ArrowRight size={12} />
        </div>
      </GlassCard>
    </div>
  );
}

function ServicesSection() {
  const titleRef = useScrollReveal();

  return (
    <section className="py-32 bg-white/20 dark:bg-navy/40">
      <div className="section-container">
        <div ref={titleRef} className="reveal text-center mb-16">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
            What We Do
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <ServiceCard key={svc.title} svc={svc} delay={i * 0.1} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-navy/20 dark:border-unai-bg/20 text-navy dark:text-unai-bg text-sm font-medium hover:bg-navy hover:text-unai-bg dark:hover:bg-unai-bg dark:hover:text-navy transition-all duration-300"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProductsHighlight() {
  const trackRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useScrollReveal();

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current || !trackRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const maxTranslate = trackRef.current.scrollWidth - (trackRef.current.parentElement?.clientWidth ?? 0);
      trackRef.current.style.transform = `translateX(-${progress * maxTranslate * 0.6}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="py-32 overflow-hidden">
      <div className="section-container mb-12">
        <div ref={titleRef} className="reveal flex items-end justify-between">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Our Products
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              Built for Scale
            </h2>
          </div>
          <Link
            to="/products"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-royal dark:text-highlight hover:gap-3 transition-all duration-300"
          >
            View All <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="pl-[calc((100vw-1200px)/2+2rem)] overflow-hidden">
        <div
          ref={trackRef}
          className="flex gap-6"
          style={{ willChange: 'transform', transition: 'transform 0.1s linear' }}
        >
          {products.map((p) => (
            <div key={p.name} className="shrink-0 w-80 md:w-96">
              <GlassCard className="overflow-hidden card-hover">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium tracking-[0.15em] uppercase text-muted-blue dark:text-soft-blue mb-2">
                    {p.tag}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-navy dark:text-unai-bg">{p.name}</h3>
                </div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Extracted sub-component so hook is called at top level
function EventCard({
  ev,
  delay,
}: {
  ev: (typeof events)[0];
  delay: number;
}) {
  const cardRef = useScrollReveal();
  return (
    <div ref={cardRef} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <GlassCard dark className="p-6 h-full card-hover">
        <div className="inline-flex px-3 py-1 rounded-full bg-highlight/10 text-highlight text-xs font-medium tracking-wide mb-4">
          {ev.type}
        </div>
        <div className="text-soft-blue/60 text-xs mb-3">{ev.date}</div>
        <h3 className="font-serif text-lg font-bold text-unai-bg mb-2">{ev.title}</h3>
        <p className="text-unai-bg/50 text-sm font-light leading-relaxed">{ev.desc}</p>
      </GlassCard>
    </div>
  );
}

function EventsSection() {
  const titleRef = useScrollReveal();

  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-royal/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-teal/10 blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div ref={titleRef} className="reveal flex items-end justify-between mb-16">
          <div>
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-soft-blue mb-4">
              Events & Innovation
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-unai-bg leading-tight">
              Where Ideas
              <br />
              <span className="italic text-highlight">Meet Industry</span>
            </h2>
          </div>
          <Link
            to="/events"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-highlight hover:gap-3 transition-all duration-300"
          >
            View All Events <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {events.map((ev, i) => (
            <EventCard key={ev.title} ev={ev} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const ref = useScrollReveal();

  return (
    <section className="py-40">
      <div className="section-container text-center">
        <div ref={ref} className="reveal">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            Let's Collaborate
          </div>
          <h2 className="heading-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-unai-bg mb-6 leading-tight">
            Let's Build the
            <br />
            <span className="italic text-royal dark:text-highlight">Future Together</span>
          </h2>
          <p className="text-navy/60 dark:text-unai-bg/60 text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
            Partner with UNAI to architect the technology that will define your industry's next chapter.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy font-medium tracking-wide hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 shadow-soft-xl group text-base"
          >
            Start a Project
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="page-fade-in">
      <ParallaxHero />
      <SectionDivider />
      <AboutPreview />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ProductsHighlight />
      <SectionDivider />
      <EventsSection />
      <SectionDivider />
      <CTASection />
    </div>
  );
}
