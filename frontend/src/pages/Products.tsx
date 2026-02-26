import { ArrowRight, Check, X } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import SectionDivider from '../components/SectionDivider';
import { useScrollReveal } from '../hooks/useScrollReveal';

const products = [
  {
    img: '/assets/generated/product-mockup-1.dim_800x560.png',
    name: 'UNAI Nexus',
    tagline: 'Enterprise Intelligence Platform',
    specs: 'Cloud-native · Multi-tenant · 99.99% SLA',
    features: [
      'Unified enterprise data orchestration',
      'Real-time AI-powered insights dashboard',
      'Role-based access control & governance',
      'Seamless ERP/CRM integration layer',
      'Advanced workflow automation engine',
      'Enterprise-grade security & compliance',
    ],
    color: '#7BBDE8',
  },
  {
    img: '/assets/generated/product-mockup-2.dim_800x560.png',
    name: 'UNAI Pulse',
    tagline: 'AI Analytics & Intelligence Suite',
    specs: 'API-first · Real-time · Scalable to billions',
    features: [
      'Predictive analytics with ML models',
      'Natural language query interface',
      'Automated anomaly detection',
      'Custom KPI tracking & alerting',
      'Multi-source data connectors',
      'Executive reporting & storytelling',
    ],
    color: '#4E8EA2',
  },
  {
    img: '/assets/generated/product-mockup-3.dim_800x560.png',
    name: 'UNAI Core',
    tagline: 'Infrastructure & Cloud Management',
    specs: 'Multi-cloud · IaC · Zero-downtime deploys',
    features: [
      'Automated cloud infrastructure provisioning',
      'Cost optimization & resource management',
      'Security posture management',
      'CI/CD pipeline orchestration',
      'Disaster recovery & backup automation',
      'Compliance monitoring & reporting',
    ],
    color: '#49769F',
  },
];

const comparisonFeatures = [
  'AI/ML Capabilities',
  'Real-time Analytics',
  'Cloud-Native Architecture',
  'Enterprise Integrations',
  'Custom Workflows',
  'Advanced Security',
  'API Access',
  'Dedicated Support',
];

const comparisonMatrix: Record<string, boolean[]> = {
  'AI/ML Capabilities': [true, true, false],
  'Real-time Analytics': [true, true, true],
  'Cloud-Native Architecture': [true, true, true],
  'Enterprise Integrations': [true, false, true],
  'Custom Workflows': [true, false, true],
  'Advanced Security': [true, true, true],
  'API Access': [true, true, true],
  'Dedicated Support': [true, false, false],
};

// Extracted sub-component so hook is called at top level
function ProductBlock({
  product,
  index,
}: {
  product: (typeof products)[0];
  index: number;
}) {
  const productRef = useScrollReveal(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <section className="py-24 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-5"
        style={{
          background: `radial-gradient(ellipse at ${isReversed ? '80%' : '20%'} 50%, ${product.color}, transparent 70%)`,
        }}
      />
      <div className="section-container relative z-10">
        <div ref={productRef} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={isReversed ? 'lg:order-2' : 'lg:order-1'}>
            <div className="relative rounded-3xl overflow-hidden shadow-soft-xl">
              <img
                src={product.img}
                alt={product.name}
                className="w-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div
                className="absolute inset-0 opacity-10"
                style={{ background: `linear-gradient(135deg, ${product.color}, transparent)` }}
              />
            </div>
          </div>

          {/* Content */}
          <div className={isReversed ? 'lg:order-1' : 'lg:order-2'}>
            <div
              className="text-xs font-medium tracking-[0.2em] uppercase mb-4"
              style={{ color: product.color }}
            >
              {product.tagline}
            </div>
            <h2 className="heading-serif text-5xl md:text-6xl font-bold text-navy dark:text-unai-bg mb-3 leading-none">
              {product.name}
            </h2>
            <p className="text-navy/40 dark:text-unai-bg/40 text-sm mb-8 font-light tracking-wide">
              {product.specs}
            </p>
            <ul className="space-y-3 mb-10">
              {product.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-navy/70 dark:text-unai-bg/70">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: `${product.color}20` }}
                  >
                    <Check size={11} style={{ color: product.color }} />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
            <button
              className="flex items-center gap-2 px-7 py-3.5 rounded-full text-unai-bg font-medium text-sm tracking-wide hover:opacity-90 transition-all duration-300 shadow-soft group"
              style={{ background: product.color }}
            >
              Request Demo
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      {index < products.length - 1 && (
        <div className="mt-24">
          <SectionDivider />
        </div>
      )}
    </section>
  );
}

export default function Products() {
  const heroRef = useScrollReveal();
  const compRef = useScrollReveal(0.1);

  return (
    <div className="page-fade-in pt-24">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          PRODUCTS
        </div>
        <div ref={heroRef} className="reveal section-container relative z-10 text-center">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            Our Products
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl font-bold text-navy dark:text-unai-bg leading-none mb-6">
            Built for Scale
          </h1>
          <p className="text-navy/60 dark:text-unai-bg/60 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            A suite of enterprise-grade products engineered to deliver intelligence, efficiency, and resilience at every layer of your organization.
          </p>
        </div>
      </section>

      {/* Product Showcases */}
      {products.map((product, i) => (
        <ProductBlock key={product.name} product={product} index={i} />
      ))}

      <SectionDivider />

      {/* Comparison */}
      <section className="py-32">
        <div className="section-container">
          <div ref={compRef} className="reveal text-center mb-16">
            <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-4">
              Compare
            </div>
            <h2 className="heading-serif text-4xl md:text-5xl font-bold text-navy dark:text-unai-bg">
              Product Comparison
            </h2>
          </div>

          <GlassCard className="overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-navy/10 dark:border-unai-bg/10">
                    <th className="text-left p-6 text-sm font-medium text-navy/50 dark:text-unai-bg/50 w-1/3">
                      Feature
                    </th>
                    {products.map((p) => (
                      <th key={p.name} className="p-6 text-center">
                        <div className="font-serif font-bold text-navy dark:text-unai-bg">{p.name}</div>
                        <div className="text-xs text-navy/40 dark:text-unai-bg/40 mt-1 font-light">{p.tagline}</div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonFeatures.map((feature, i) => (
                    <tr
                      key={feature}
                      className={`border-b border-navy/5 dark:border-unai-bg/5 ${i % 2 === 0 ? 'bg-white/10 dark:bg-navy/10' : ''}`}
                    >
                      <td className="p-6 text-sm text-navy/70 dark:text-unai-bg/70 font-light">{feature}</td>
                      {comparisonMatrix[feature].map((has, j) => (
                        <td key={j} className="p-6 text-center">
                          {has ? (
                            <Check size={18} className="mx-auto text-teal" />
                          ) : (
                            <X size={18} className="mx-auto text-navy/20 dark:text-unai-bg/20" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </GlassCard>
        </div>
      </section>
    </div>
  );
}
