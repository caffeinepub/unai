import { ArrowRight, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    id: 'ai',
    bgText: 'AI',
    title: 'AI Development',
    subtitle: 'Intelligent Systems at Scale',
    desc: 'We design and deploy AI solutions that transform how enterprises operate — from machine learning pipelines to natural language processing and computer vision systems.',
    features: ['Custom ML Model Development', 'NLP & Conversational AI', 'Computer Vision Systems', 'Predictive Analytics', 'AI Integration & Deployment'],
    img: '/assets/generated/service-ai.dim_600x500.png',
    color: '#7BBDE8',
  },
  {
    id: 'enterprise',
    bgText: 'ERP',
    title: 'Enterprise Software',
    subtitle: 'Systems Built to Endure',
    desc: 'Robust, scalable enterprise software solutions designed to streamline operations, integrate seamlessly with existing infrastructure, and grow with your organization.',
    features: ['ERP & CRM Systems', 'Custom Application Development', 'Legacy System Modernization', 'API Architecture & Integration', 'Microservices & Cloud-Native'],
    img: '/assets/generated/service-enterprise.dim_600x500.png',
    color: '#4E8EA2',
  },
  {
    id: 'cloud',
    bgText: 'CLOUD',
    title: 'Cloud & Infrastructure',
    subtitle: 'Resilient. Scalable. Secure.',
    desc: 'End-to-end cloud strategy, migration, and management services that optimize performance, reduce costs, and ensure enterprise-grade security and compliance.',
    features: ['Cloud Strategy & Migration', 'Multi-Cloud Architecture', 'DevOps & CI/CD Pipelines', 'Security & Compliance', 'Infrastructure as Code'],
    img: '/assets/generated/service-cloud.dim_600x500.png',
    color: '#49769F',
  },
  {
    id: 'data',
    bgText: 'DATA',
    title: 'Data & Analytics',
    subtitle: 'Insight-Driven Decisions',
    desc: 'Transform raw data into strategic intelligence. Our data engineering and analytics solutions give you the clarity to make decisions with confidence.',
    features: ['Data Engineering & Pipelines', 'Business Intelligence Dashboards', 'Real-Time Analytics', 'Data Governance & Quality', 'Advanced Reporting'],
    img: '/assets/generated/service-data.dim_600x500.png',
    color: '#6EA2B3',
  },
  {
    id: 'consulting',
    bgText: 'STRATEGY',
    title: 'Consulting',
    subtitle: 'Strategic Technology Leadership',
    desc: 'Expert advisory services that align technology investments with business objectives — from digital roadmaps to organizational transformation and change management.',
    features: ['Digital Transformation Strategy', 'Technology Roadmapping', 'IT Architecture Review', 'Change Management', 'Executive Advisory'],
    img: '/assets/generated/service-consulting.dim_600x500.png',
    color: '#0A4174',
  },
];

const processSteps = [
  { step: '01', title: 'Discovery', desc: 'Deep-dive into your business context, challenges, and objectives.' },
  { step: '02', title: 'Strategy', desc: 'Craft a tailored technology roadmap aligned with your goals.' },
  { step: '03', title: 'Design', desc: 'Architect solutions with precision, scalability, and elegance.' },
  { step: '04', title: 'Build', desc: 'Develop and iterate with agility, quality, and transparency.' },
  { step: '05', title: 'Deploy', desc: 'Launch with confidence through rigorous testing and validation.' },
  { step: '06', title: 'Evolve', desc: 'Continuous optimization and support to maximize long-term value.' },
];

function ServiceBlock({ svc, index }: { svc: (typeof services)[0]; index: number }) {
  const ref = useScrollReveal(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Faded background text */}
      <div
        className="bg-text absolute top-1/2 -translate-y-1/2 pointer-events-none select-none"
        style={{ [isReversed ? 'right' : 'left']: '-2%' }}
      >
        {svc.bgText}
      </div>

      <div className="section-container relative z-10">
        <div ref={ref} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative rounded-3xl overflow-hidden aspect-[6/5]">
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{ background: `linear-gradient(135deg, ${svc.color}40, transparent)` }}
              />
            </div>
          </div>

          {/* Text */}
          <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
            <div
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: svc.color }}
            >
              {svc.subtitle}
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg mb-6 leading-tight">
              {svc.title}
            </h2>
            <p className="text-navy/60 dark:text-unai-bg/60 leading-relaxed mb-8 font-light text-lg">
              {svc.desc}
            </p>
            <ul className="space-y-3 mb-8">
              {svc.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-navy/70 dark:text-unai-bg/70">
                  <CheckCircle size={16} style={{ color: svc.color, flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium border-b pb-1 transition-all duration-300 group"
              style={{ color: svc.color, borderColor: `${svc.color}40` }}
            >
              Learn More
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted sub-component so hook is called at top level
function ProcessStep({
  step,
  index,
}: {
  step: (typeof processSteps)[0];
  index: number;
}) {
  const stepRef = useScrollReveal(0.3);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={stepRef}
      className="reveal relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Node */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-highlight border-2 border-unai-bg dark:border-navy z-10 hidden md:block" />

      <div className={isLeft ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}>
        <GlassCard className="p-6 inline-block w-full">
          <div className="font-serif text-4xl font-bold text-navy/10 dark:text-unai-bg/10 mb-2">
            {step.step}
          </div>
          <h3 className="font-serif text-xl font-bold text-navy dark:text-unai-bg mb-2">
            {step.title}
          </h3>
          <p className="text-navy/60 dark:text-unai-bg/60 text-sm font-light leading-relaxed">
            {step.desc}
          </p>
        </GlassCard>
      </div>
    </div>
  );
}

function ProcessTimeline() {
  const titleRef = useScrollReveal();

  return (
    <section className="py-32 bg-white/20 dark:bg-navy/40">
      <div className="section-container">
        <div ref={titleRef} className="reveal text-center mb-20">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
            How We Work
          </div>
          <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
            Our Process
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-navy/10 dark:bg-unai-bg/10 -translate-x-1/2 hidden md:block" />

          <div className="space-y-12">
            {processSteps.map((step, i) => (
              <ProcessStep key={step.step} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <div className="page-fade-in pt-24">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          SERVICES
        </div>
        <div className="section-container relative z-10 text-center">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            What We Offer
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl font-bold text-navy dark:text-unai-bg leading-none mb-6">
            Our Services
          </h1>
          <p className="text-navy/60 dark:text-unai-bg/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            Comprehensive technology solutions designed to transform, scale, and future-proof your enterprise.
          </p>
        </div>
      </section>

      {services.map((svc, i) => (
        <div key={svc.id}>
          <ServiceBlock svc={svc} index={i} />
          {i < services.length - 1 && <SectionDivider />}
        </div>
      ))}

      <SectionDivider />
      <ProcessTimeline />
    </div>
  );
}
