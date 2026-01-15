import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, PenTool, Box, Gift, Calendar, MessageCircle, ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';

// Product images
import coasters from '@/assets/products/coasters.jpg';
import giftBox from '@/assets/products/gift-box.jpg';
import penHolder from '@/assets/products/pen-holder.jpg';
import boxesMandala from '@/assets/products/boxes-mandala.jpg';
import calendar from '@/assets/products/calendar.jpg';

const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Scissors,
      image: coasters,
      title: t('services.laser.title'),
      description: t('services.laser.desc'),
      features: ['Acrylic', 'Wood', 'Leather', 'Fabric', 'Paper'],
    },
    {
      icon: PenTool,
      image: giftBox,
      title: t('services.engraving.title'),
      description: t('services.engraving.desc'),
      features: ['Glass', 'Wood', 'Acrylic', 'Leather', 'Stone'],
    },
    {
      icon: Box,
      image: penHolder,
      title: t('services.custom.title'),
      description: t('services.custom.desc'),
      features: ['Prototypes', 'Small Batches', 'Large Orders', 'Custom Designs'],
    },
    {
      icon: Gift,
      image: boxesMandala,
      title: t('services.promo.title'),
      description: t('services.promo.desc'),
      features: ['Corporate Gifts', 'Branded Items', 'Marketing Materials', 'Packaging'],
    },
    {
      icon: Calendar,
      image: calendar,
      title: t('services.events.title'),
      description: t('services.events.desc'),
      features: ['Backdrops', 'Signage', 'Giveaways', 'Displays'],
    },
  ];

  const whatsappUrl = 'https://wa.me/201080221415?text=' + encodeURIComponent('Hello! I would like to inquire about your services.');

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="section-divider mx-auto mb-6" />
            <h1 className="heading-display text-foreground mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`order-1 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full aspect-video object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
                  </div>
                </div>

                {/* Content */}
                <div className={`order-2 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-2 rounded-full bg-secondary text-sm text-foreground font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <Button variant="accent" asChild>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-4 h-4" />
                      Get a Quote
                    </a>
                  </Button>
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
            {t('cta.title')}
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
            <Button variant="heroOutline" asChild>
              <a href="/catalog.pdf" download>
                <Download className="w-5 h-5" />
                {t('hero.cta.catalog')}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
