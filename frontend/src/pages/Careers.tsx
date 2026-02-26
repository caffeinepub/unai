import { useState } from 'react';
import { ArrowRight, ChevronDown, Heart, Zap, Globe, Coffee, BookOpen, TrendingUp } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive health coverage, mental wellness programs, and fitness allowances.' },
  { icon: Zap, title: 'Accelerated Growth', desc: 'Structured learning paths, mentorship programs, and rapid career advancement.' },
  { icon: Globe, title: 'Global Exposure', desc: 'Work with international clients and teams across 8+ countries.' },
  { icon: Coffee, title: 'Flexible Culture', desc: 'Hybrid work model, flexible hours, and a results-driven environment.' },
  { icon: BookOpen, title: 'Learning Budget', desc: 'Annual learning budget for courses, conferences, and certifications.' },
  { icon: TrendingUp, title: 'Equity & Rewards', desc: 'Competitive compensation, performance bonuses, and equity participation.' },
];

const positions = [
  {
    title: 'Senior AI/ML Engineer',
    department: 'Engineering',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    desc: 'Lead the design and development of production-grade machine learning systems. You will architect ML pipelines, optimize model performance, and collaborate with cross-functional teams to deliver AI-powered enterprise solutions.',
  },
  {
    title: 'Enterprise Solutions Architect',
    department: 'Engineering',
    location: 'Mumbai / Hybrid',
    type: 'Full-time',
    desc: 'Design and oversee the implementation of complex enterprise technology architectures. You will work directly with clients to understand their needs and translate them into scalable, resilient technical solutions.',
  },
  {
    title: 'Product Manager — UNAI Nexus',
    department: 'Product',
    location: 'Bangalore',
    type: 'Full-time',
    desc: 'Own the product roadmap for UNAI Nexus, our flagship enterprise platform. Drive product strategy, work closely with engineering and design, and ensure we deliver exceptional value to our enterprise customers.',
  },
  {
    title: 'Cloud Infrastructure Engineer',
    department: 'Infrastructure',
    location: 'Remote',
    type: 'Full-time',
    desc: 'Build and maintain our multi-cloud infrastructure serving enterprise clients globally. You will work with Kubernetes, Terraform, and modern DevOps practices to ensure reliability, security, and performance at scale.',
  },
  {
    title: 'UX/UI Designer — Enterprise Products',
    department: 'Design',
    location: 'Bangalore / Remote',
    type: 'Full-time',
    desc: 'Craft exceptional user experiences for complex enterprise software. You will conduct user research, create detailed design systems, and collaborate with engineering to bring elegant, functional interfaces to life.',
  },
];

export default function Careers() {
  const [openPosition, setOpenPosition] = useState<number | null>(null);
  const heroRef = useScrollReveal();
  const benefitsRef = useScrollReveal(0.1);
  const positionsRef = useScrollReveal(0.1);
  const ctaRef = useScrollReveal();

  return (
    <div className="page-fade-in pt-24">
      {/* Culture Statement with animated gradient */}
      <section className="relative py-40 overflow-hidden">
        <div className="absolute inset-0 animated-gradient opacity-90" />
        <div className="absolute inset-0 bg-navy/60" />
        <div ref={heroRef} className="reveal section-container relative z-10 text-center">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-soft-blue mb-6">
            Life at UNAI
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl lg:text-8xl font-bold text-unai-bg leading-none mb-8">
            Build What
            <br />
            <span className="italic text-highlight">Matters Most</span>
          </h1>
          <p className="text-unai-bg/70 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            At UNAI, we believe the best technology is built by people who are empowered, inspired, and deeply committed to making a difference. Join a team that's shaping the future of enterprise technology.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Why Work at UNAI */}
      <section className="py-32">
        <div className="section-container">
          <div ref={benefitsRef} className="reveal text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Why UNAI
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              Why Work With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, i) => (
              <GlassCard
                key={benefit.title}
                className="p-6 card-hover"
                style={{ animationDelay: `${i * 0.08}s` } as React.CSSProperties}
              >
                <div className="w-12 h-12 rounded-2xl bg-highlight/10 flex items-center justify-center mb-4">
                  <benefit.icon size={20} className="text-royal dark:text-highlight" />
                </div>
                <h3 className="font-serif text-lg font-bold text-navy dark:text-unai-bg mb-2">
                  {benefit.title}
                </h3>
                <p className="text-navy/60 dark:text-unai-bg/60 text-sm font-light leading-relaxed">
                  {benefit.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Open Positions */}
      <section className="py-32 bg-white/20 dark:bg-navy/40">
        <div className="section-container">
          <div ref={positionsRef} className="reveal text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Join the Team
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              Open Positions
            </h2>
          </div>

          <div className="space-y-3 max-w-3xl mx-auto">
            {positions.map((pos, i) => (
              <div key={pos.title}>
                <GlassCard className="overflow-hidden">
                  <button
                    onClick={() => setOpenPosition(openPosition === i ? null : i)}
                    className="w-full p-6 flex items-center justify-between text-left hover:bg-white/10 transition-colors duration-300"
                  >
                    <div>
                      <h3 className="font-serif text-lg font-bold text-navy dark:text-unai-bg mb-1">
                        {pos.title}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-xs text-navy/50 dark:text-unai-bg/50">
                        <span>{pos.department}</span>
                        <span>·</span>
                        <span>{pos.location}</span>
                        <span>·</span>
                        <span>{pos.type}</span>
                      </div>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`text-navy/40 dark:text-unai-bg/40 shrink-0 transition-transform duration-300 ${
                        openPosition === i ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-400 ${
                      openPosition === i ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6 border-t border-navy/10 dark:border-unai-bg/10 pt-4">
                      <p className="text-navy/60 dark:text-unai-bg/60 text-sm font-light leading-relaxed mb-4">
                        {pos.desc}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy text-xs font-medium hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 group"
                      >
                        Apply Now
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform duration-300"
                        />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Application CTA */}
      <section className="py-40">
        <div className="section-container text-center">
          <div ref={ctaRef} className="reveal">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
              Your Next Chapter
            </div>
            <h2 className="heading-serif text-5xl md:text-6xl font-bold text-navy dark:text-unai-bg mb-6 leading-tight">
              Shape the Future
              <br />
              <span className="italic text-royal dark:text-highlight">with Us</span>
            </h2>
            <p className="text-navy/60 dark:text-unai-bg/60 text-lg max-w-xl mx-auto mb-12 font-light leading-relaxed">
              Don't see a role that fits? We're always looking for exceptional talent. Send us your story.
            </p>
            <a
              href="mailto:careers@unai.com"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy font-medium tracking-wide hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 shadow-soft-xl group text-base"
            >
              Get in Touch
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
