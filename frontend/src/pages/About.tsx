import { useEffect, useRef } from 'react';
import { ArrowRight, Target, Lightbulb, Shield, Globe, Award, Users } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const timeline = [
  { year: '2012', title: 'Founded', desc: 'UNAI established with a vision to redefine enterprise technology.' },
  { year: '2014', title: 'First Enterprise Client', desc: 'Delivered our first large-scale enterprise transformation project.' },
  { year: '2016', title: 'AI Division Launch', desc: 'Launched dedicated AI research and development division.' },
  { year: '2018', title: 'Global Expansion', desc: 'Expanded operations across 8 countries and 3 continents.' },
  { year: '2020', title: 'UNAI Nexus', desc: 'Released flagship enterprise platform serving 100+ organizations.' },
  { year: '2022', title: 'Industry Recognition', desc: 'Named among top 10 enterprise technology innovators globally.' },
  { year: '2024', title: 'AI Transformation', desc: 'Pioneered AI-first enterprise solutions across 18 industries.' },
  { year: '2026', title: 'The Future', desc: 'Continuing to build technology that shapes tomorrow.' },
];

const team = [
  { img: '/assets/generated/team-1.dim_400x500.png', name: 'Arjun Mehta', role: 'Chief Executive Officer' },
  { img: '/assets/generated/team-2.dim_400x500.png', name: 'Priya Sharma', role: 'Chief Technology Officer' },
  { img: '/assets/generated/team-3.dim_400x500.png', name: 'Rahul Verma', role: 'Chief Strategy Officer' },
  { img: '/assets/generated/team-4.dim_400x500.png', name: 'Ananya Patel', role: 'Head of AI Research' },
  { img: '/assets/generated/team-5.dim_400x500.png', name: 'Vikram Singh', role: 'VP Engineering' },
];

const values = [
  { icon: Target, title: 'Precision', desc: 'Every solution crafted with meticulous attention to detail and purpose.' },
  { icon: Lightbulb, title: 'Innovation', desc: 'Continuously pushing boundaries to deliver transformative outcomes.' },
  { icon: Shield, title: 'Integrity', desc: 'Unwavering commitment to transparency, ethics, and trust.' },
  { icon: Globe, title: 'Impact', desc: 'Technology that creates meaningful change at scale.' },
  { icon: Award, title: 'Excellence', desc: 'Relentless pursuit of the highest standards in everything we do.' },
  { icon: Users, title: 'Partnership', desc: 'Deep collaboration that makes your success our success.' },
];

const stats = [
  { num: '12+', label: 'Years of Excellence', desc: 'Over a decade of enterprise technology leadership.' },
  { num: '350+', label: 'Projects Delivered', desc: 'Successful transformations across diverse industries.' },
  { num: '18', label: 'Industries Served', desc: 'Deep domain expertise across sectors.' },
  { num: '40+', label: 'Global Partners', desc: 'A network of world-class technology alliances.' },
];

const philosophyPillars = [
  { title: 'Human-Centered', desc: 'Technology built around people — their needs, their potential, their future.' },
  { title: 'Systems Thinking', desc: 'We see the whole picture, designing solutions that work in harmony with your ecosystem.' },
  { title: 'Long-Term Vision', desc: 'We build for decades, not quarters — creating enduring value that compounds over time.' },
];

// Extracted sub-component so hook is called at top level
function ValueCard({ v, delay }: { v: (typeof values)[0]; delay: number }) {
  const vRef = useScrollReveal();
  return (
    <div ref={vRef} className="reveal" style={{ transitionDelay: `${delay}s` }}>
      <GlassCard className="p-6 card-hover text-center">
        <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center mx-auto mb-4">
          <v.icon size={20} className="text-royal dark:text-highlight" />
        </div>
        <h3 className="font-serif text-lg font-bold text-navy dark:text-unai-bg mb-2">{v.title}</h3>
        <p className="text-navy/55 dark:text-unai-bg/55 text-xs leading-relaxed font-light">{v.desc}</p>
      </GlassCard>
    </div>
  );
}

export default function About() {
  const heroRef = useScrollReveal();
  const missionRef = useScrollReveal();
  const philosophyRef = useScrollReveal();
  const valuesRef = useScrollReveal();
  const timelineContainerRef = useRef<HTMLDivElement>(null);
  const timelineTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!timelineContainerRef.current || !timelineTrackRef.current) return;
      const rect = timelineContainerRef.current.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const maxTranslate =
        timelineTrackRef.current.scrollWidth -
        (timelineTrackRef.current.parentElement?.clientWidth ?? 0);
      timelineTrackRef.current.style.transform = `translateX(-${progress * maxTranslate}px)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="page-fade-in pt-24">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
            ABOUT
          </div>
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div ref={heroRef} className="reveal lg:col-span-7">
              <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
                Our Story
              </div>
              <h1 className="heading-serif text-6xl md:text-7xl lg:text-8xl font-bold text-navy dark:text-unai-bg leading-none mb-8">
                Technology
                <br />
                <span className="italic text-royal dark:text-highlight">with Purpose</span>
              </h1>
              <p className="text-navy/60 dark:text-unai-bg/60 text-xl leading-relaxed max-w-lg font-light">
                We are architects of enterprise transformation — building intelligent systems that empower organizations to lead in an era defined by technology.
              </p>
            </div>
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl overflow-hidden aspect-[3/4]">
                <img
                  src="/assets/generated/about-feature.dim_900x700.png"
                  alt="UNAI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Vision & Mission */}
      <section className="py-32">
        <div className="section-container">
          <div ref={missionRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
                Vision & Mission
              </div>
              <div className="font-serif text-[120px] font-bold text-navy/5 dark:text-unai-bg/5 leading-none select-none -mt-8 mb-4">
                01
              </div>
              <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg mb-6 -mt-8">
                Our Vision
              </h2>
              <p className="text-navy/60 dark:text-unai-bg/60 leading-relaxed font-light text-lg mb-8">
                To be the defining enterprise technology partner for organizations navigating the complexities of the digital age — enabling them to operate with intelligence, agility, and purpose.
              </p>
              <div className="w-12 h-px bg-highlight mb-8" />
              <h3 className="font-serif text-2xl font-bold text-navy dark:text-unai-bg mb-4">Our Mission</h3>
              <p className="text-navy/60 dark:text-unai-bg/60 leading-relaxed font-light">
                To architect and deliver transformative technology solutions that create lasting competitive advantage, operational excellence, and meaningful impact for the enterprises we serve.
              </p>
            </div>
            <div className="space-y-4">
              {stats.map((stat) => (
                <GlassCard key={stat.num} className="p-6 flex items-center gap-6">
                  <div className="font-serif text-3xl font-bold text-navy dark:text-unai-bg w-20 shrink-0">
                    {stat.num}
                  </div>
                  <div>
                    <div className="font-medium text-navy dark:text-unai-bg text-sm mb-1">{stat.label}</div>
                    <div className="text-navy/50 dark:text-unai-bg/50 text-xs font-light">{stat.desc}</div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Leadership Philosophy */}
      <section className="py-32 bg-white/20 dark:bg-navy/40">
        <div className="section-container">
          <div ref={philosophyRef} className="reveal text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
              Leadership Philosophy
            </div>
            <h2 className="heading-serif text-5xl md:text-6xl lg:text-7xl font-bold text-navy dark:text-unai-bg italic">
              "Innovation with Integrity"
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {philosophyPillars.map((p, i) => (
              <GlassCard key={p.title} className="p-8 card-hover">
                <div className="font-serif text-5xl font-bold text-navy/10 dark:text-unai-bg/10 mb-4">
                  0{i + 1}
                </div>
                <h3 className="font-serif text-xl font-bold text-navy dark:text-unai-bg mb-3">{p.title}</h3>
                <p className="text-navy/60 dark:text-unai-bg/60 text-sm leading-relaxed font-light">{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Why UNAI */}
      <section className="py-32">
        <div className="section-container">
          <div ref={valuesRef} className="reveal text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Why UNAI
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <ValueCard key={v.title} v={v} delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Timeline */}
      <section
        ref={timelineContainerRef}
        className="relative"
        style={{ height: '300vh' }}
      >
        <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
          <div className="section-container mb-12">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Our Journey
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              Company Timeline
            </h2>
          </div>
          <div className="pl-[calc((100vw-1200px)/2+2rem)] overflow-hidden">
            <div
              ref={timelineTrackRef}
              className="flex gap-8 items-stretch"
              style={{ willChange: 'transform', transition: 'transform 0.05s linear' }}
            >
              {timeline.map((item) => (
                <div key={item.year} className="shrink-0 w-64">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 rounded-full bg-highlight shrink-0" />
                    <div className="h-px flex-1 bg-navy/20 dark:bg-unai-bg/20" />
                  </div>
                  <GlassCard className="p-6">
                    <div className="font-serif text-3xl font-bold text-royal dark:text-highlight mb-2">
                      {item.year}
                    </div>
                    <h3 className="font-medium text-navy dark:text-unai-bg mb-2">{item.title}</h3>
                    <p className="text-navy/55 dark:text-unai-bg/55 text-xs leading-relaxed font-light">{item.desc}</p>
                  </GlassCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Team */}
      <section className="py-32">
        <div className="section-container">
          <div className="text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Our People
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              The Team Behind UNAI
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {team.map((member) => (
              <div key={member.name} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="font-serif font-bold text-unai-bg text-sm">{member.name}</div>
                  <div className="text-soft-blue text-xs mt-0.5">{member.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
