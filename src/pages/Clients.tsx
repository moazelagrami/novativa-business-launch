import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

const Clients: React.FC = () => {
  const { t } = useLanguage();

  // Placeholder client logos - these would be replaced with real logos
  const clients = [
    { name: 'Company Alpha', sector: 'Advertising' },
    { name: 'Brand Beta', sector: 'Event Management' },
    { name: 'Corp Gamma', sector: 'Corporate' },
    { name: 'Agency Delta', sector: 'Marketing' },
    { name: 'Group Epsilon', sector: 'Manufacturing' },
    { name: 'Media Zeta', sector: 'Media' },
    { name: 'Tech Eta', sector: 'Technology' },
    { name: 'Print Theta', sector: 'Printing' },
  ];

  const testimonials = [
    {
      quote: "Novativa delivered exceptional quality for our corporate event. The laser-cut signage was perfect and the turnaround time exceeded our expectations.",
      author: "Ahmed Hassan",
      company: "Event Solutions Egypt",
      role: "Managing Director",
    },
    {
      quote: "We've been working with Novativa for over 3 years. Their attention to detail and flexibility makes them our preferred partner for all promotional products.",
      author: "Sarah Ibrahim",
      company: "Creative Agency Cairo",
      role: "Creative Director",
    },
    {
      quote: "The custom laser-cut awards we ordered were stunning. Our clients were impressed with the craftsmanship and quality.",
      author: "Mohamed Khaled",
      company: "Marketing Pro",
      role: "Operations Manager",
    },
  ];

  const whatsappNumber = '+201234567890';
  const whatsappMessage = encodeURIComponent('Hello! I would like to discuss a project with Novativa.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="section-divider mx-auto mb-6" />
            <h1 className="heading-display text-foreground mb-6">
              {t('clients.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('clients.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-8 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all duration-300"
              >
                {/* Placeholder logo */}
                <div className="w-20 h-20 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <span className="text-2xl font-bold text-muted-foreground group-hover:text-accent transition-colors">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <span className="text-sm font-medium text-foreground text-center">
                  {client.name}
                </span>
                <span className="text-xs text-muted-foreground mt-1">
                  {client.sector}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="heading-section text-foreground mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card shadow-lg border border-border"
              >
                {/* Quote mark */}
                <div className="text-6xl text-accent/20 font-serif leading-none mb-4">
                  "
                </div>
                <p className="text-foreground leading-relaxed mb-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-semibold">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-custom text-center">
          <h2 className="heading-section text-primary-foreground mb-4">
            Join Our Growing List of Clients
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Experience the Novativa difference. Contact us today to discuss your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <Link to="/contact">
                {t('hero.cta.contact')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
