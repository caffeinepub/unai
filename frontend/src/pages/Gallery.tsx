import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type GalleryCategory = 'All' | 'Events' | 'Products' | 'Office' | 'Webinars';

const galleryItems = [
  { img: '/assets/generated/gallery-events-1.dim_800x600.png', title: 'AI Summit 2025', category: 'Events' as const },
  { img: '/assets/generated/gallery-events-2.dim_800x600.png', title: 'UNAI Keynote', category: 'Events' as const },
  { img: '/assets/generated/gallery-events-3.dim_800x600.png', title: 'Leadership Roundtable', category: 'Events' as const },
  { img: '/assets/generated/gallery-products-1.dim_800x600.png', title: 'UNAI Nexus Platform', category: 'Products' as const },
  { img: '/assets/generated/gallery-products-2.dim_800x600.png', title: 'UNAI Pulse Interface', category: 'Products' as const },
  { img: '/assets/generated/gallery-products-3.dim_800x600.png', title: 'UNAI Core Architecture', category: 'Products' as const },
  { img: '/assets/generated/gallery-office-1.dim_800x600.png', title: 'UNAI Headquarters', category: 'Office' as const },
  { img: '/assets/generated/gallery-office-2.dim_800x600.png', title: 'Reception & Lobby', category: 'Office' as const },
  { img: '/assets/generated/gallery-office-3.dim_800x600.png', title: 'Innovation Lounge', category: 'Office' as const },
  { img: '/assets/generated/gallery-webinar-1.dim_800x600.png', title: 'Digital Transformation Webinar', category: 'Webinars' as const },
  { img: '/assets/generated/gallery-webinar-2.dim_800x600.png', title: 'AI Strategy Session', category: 'Webinars' as const },
  { img: '/assets/generated/gallery-webinar-3.dim_800x600.png', title: 'Cloud Architecture Deep Dive', category: 'Webinars' as const },
];

const categoryColors: Record<string, string> = {
  Events: '#7BBDE8',
  Products: '#4E8EA2',
  Office: '#49769F',
  Webinars: '#0A4174',
};

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('All');
  const titleRef = useScrollReveal();

  const categories: GalleryCategory[] = ['All', 'Events', 'Products', 'Office', 'Webinars'];

  const filtered =
    activeCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <div className="page-fade-in pt-24">
      {/* Hero */}
      <section className="py-32 relative overflow-hidden">
        <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          GALLERY
        </div>
        <div ref={titleRef} className="reveal section-container relative z-10 text-center">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            Visual Stories
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl font-bold text-navy dark:text-unai-bg leading-none mb-6">
            Our Gallery
          </h1>
          <p className="text-navy/60 dark:text-unai-bg/60 text-xl max-w-xl mx-auto font-light leading-relaxed">
            A curated collection of moments, milestones, and the spaces where innovation happens.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-16 pb-32">
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
            {filtered.map((item, i) => {
              const color = categoryColors[item.category];
              return (
                <div
                  key={`${item.title}-${i}`}
                  className="masonry-item group relative overflow-hidden rounded-2xl cursor-pointer"
                  style={{
                    animation: 'pageFadeIn 0.4s ease forwards',
                    animationDelay: `${i * 0.05}s`,
                    opacity: 0,
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-navy/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                    <div
                      className="text-xs font-medium tracking-[0.15em] uppercase mb-3"
                      style={{ color }}
                    >
                      {item.category}
                    </div>
                    <h3 className="font-serif text-xl font-bold text-unai-bg text-center leading-snug">
                      {item.title}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
