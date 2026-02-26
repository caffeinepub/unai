import { useState } from 'react';
import { ArrowRight, MapPin, Mail, Phone, CheckCircle } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSubmitContact } from '../hooks/useQueries';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<typeof form>>({});
  const [submitted, setSubmitted] = useState(false);

  const titleRef = useScrollReveal();
  const formRef = useScrollReveal();
  const infoRef = useScrollReveal();

  const { mutate: submitContact, isPending } = useSubmitContact();

  const validate = () => {
    const newErrors: Partial<typeof form> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.company.trim()) newErrors.company = 'Company is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    submitContact(
      {
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        message: form.message,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', company: '', email: '', phone: '', message: '' });
        },
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <div className="page-fade-in pt-24">
      {/* Hero Headline */}
      <section className="py-24 relative overflow-hidden">
        <div className="bg-text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
          CONTACT
        </div>
        <div ref={titleRef} className="reveal section-container relative z-10">
          <div className="text-xs font-medium tracking-[0.2em] uppercase text-muted-blue dark:text-soft-blue mb-6">
            Get in Touch
          </div>
          <h1 className="heading-serif text-6xl md:text-7xl lg:text-8xl font-bold text-navy dark:text-unai-bg leading-none">
            Start the
            <br />
            <span className="italic text-royal dark:text-highlight">Conversation.</span>
          </h1>
        </div>
      </section>

      {/* Split Screen */}
      <section className="pb-32">
        <div className="section-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: Form */}
            <div ref={formRef} className="reveal">
              {submitted ? (
                <GlassCard className="p-10 flex flex-col items-center justify-center text-center min-h-96">
                  <div className="w-16 h-16 rounded-full bg-teal/10 flex items-center justify-center mb-6">
                    <CheckCircle size={32} className="text-teal" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-navy dark:text-unai-bg mb-3">
                    Message Received
                  </h3>
                  <p className="text-navy/60 dark:text-unai-bg/60 font-light leading-relaxed max-w-sm">
                    Thank you for reaching out. Our team will be in touch with you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-sm font-medium text-royal dark:text-highlight border-b border-royal/30 dark:border-highlight/30 pb-1 hover:border-royal dark:hover:border-highlight transition-all duration-300"
                  >
                    Send another message
                  </button>
                </GlassCard>
              ) : (
                <GlassCard className="p-8">
                  <h2 className="font-serif text-2xl font-bold text-navy dark:text-unai-bg mb-8">
                    Send a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-navy/60 dark:text-unai-bg/60 mb-2 tracking-wide">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="input-glass"
                        />
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-navy/60 dark:text-unai-bg/60 mb-2 tracking-wide">
                          Company *
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={form.company}
                          onChange={handleChange}
                          placeholder="Your company"
                          className="input-glass"
                        />
                        {errors.company && (
                          <p className="text-xs text-red-500 mt-1">{errors.company}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-medium text-navy/60 dark:text-unai-bg/60 mb-2 tracking-wide">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="input-glass"
                        />
                        {errors.email && (
                          <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-navy/60 dark:text-unai-bg/60 mb-2 tracking-wide">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="input-glass"
                        />
                        {errors.phone && (
                          <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-navy/60 dark:text-unai-bg/60 mb-2 tracking-wide">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        className="input-glass resize-none"
                      />
                      {errors.message && (
                        <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isPending}
                      className="w-full flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-navy dark:bg-highlight text-unai-bg dark:text-navy font-medium text-sm tracking-wide hover:bg-royal dark:hover:bg-soft-blue transition-all duration-300 shadow-soft disabled:opacity-60 disabled:cursor-not-allowed group"
                    >
                      {isPending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-unai-bg/30 border-t-unai-bg rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <ArrowRight
                            size={14}
                            className="group-hover:translate-x-1 transition-transform duration-300"
                          />
                        </>
                      )}
                    </button>
                  </form>
                </GlassCard>
              )}
            </div>

            {/* Right: Map + Info */}
            <div ref={infoRef} className="reveal space-y-6">
              {/* Stylized Map Placeholder */}
              <GlassCard className="overflow-hidden aspect-[4/3] relative">
                {/* Grid lines */}
                <div className="absolute inset-0 opacity-20">
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`h-${i}`}
                      className="absolute w-full h-px bg-navy dark:bg-unai-bg"
                      style={{ top: `${(i + 1) * 11}%` }}
                    />
                  ))}
                  {[...Array(8)].map((_, i) => (
                    <div
                      key={`v-${i}`}
                      className="absolute h-full w-px bg-navy dark:bg-unai-bg"
                      style={{ left: `${(i + 1) * 11}%` }}
                    />
                  ))}
                </div>
                {/* Roads */}
                <div className="absolute inset-0 opacity-15">
                  <div className="absolute top-1/3 left-0 right-0 h-2 bg-navy dark:bg-unai-bg rounded" />
                  <div className="absolute top-2/3 left-0 right-0 h-1 bg-navy dark:bg-unai-bg rounded" />
                  <div className="absolute left-1/3 top-0 bottom-0 w-2 bg-navy dark:bg-unai-bg rounded" />
                  <div className="absolute left-2/3 top-0 bottom-0 w-1 bg-navy dark:bg-unai-bg rounded" />
                </div>
                {/* Pin */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-navy dark:bg-highlight flex items-center justify-center shadow-soft-lg">
                    <MapPin size={18} className="text-unai-bg dark:text-navy" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-navy dark:bg-highlight mt-1 opacity-50" />
                </div>
                {/* Label */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <GlassCard className="px-4 py-2 text-xs font-medium text-navy dark:text-unai-bg whitespace-nowrap">
                    UNAI Headquarters, Bangalore
                  </GlassCard>
                </div>
              </GlassCard>

              {/* Contact Details */}
              <GlassCard className="p-8">
                <h3 className="font-serif text-xl font-bold text-navy dark:text-unai-bg mb-6">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center shrink-0">
                      <MapPin size={16} className="text-royal dark:text-highlight" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-navy/50 dark:text-unai-bg/50 mb-1 tracking-wide uppercase">
                        Address
                      </div>
                      <p className="text-sm text-navy dark:text-unai-bg font-light leading-relaxed">
                        UNAI Technology Park, 4th Floor<br />
                        Whitefield, Bangalore — 560066<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center shrink-0">
                      <Mail size={16} className="text-royal dark:text-highlight" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-navy/50 dark:text-unai-bg/50 mb-1 tracking-wide uppercase">
                        Email
                      </div>
                      <a
                        href="mailto:hello@unai.com"
                        className="text-sm text-navy dark:text-unai-bg hover:text-royal dark:hover:text-highlight transition-colors duration-300"
                      >
                        hello@unai.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-highlight/10 flex items-center justify-center shrink-0">
                      <Phone size={16} className="text-royal dark:text-highlight" />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-navy/50 dark:text-unai-bg/50 mb-1 tracking-wide uppercase">
                        Phone
                      </div>
                      <a
                        href="tel:+918012345678"
                        className="text-sm text-navy dark:text-unai-bg hover:text-royal dark:hover:text-highlight transition-colors duration-300"
                      >
                        +91 80 1234 5678
                      </a>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
