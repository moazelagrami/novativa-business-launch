import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, ArrowRight, Target, Clock, Palette, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-laser-cutting.jpg';
import laserEngraving from '@/assets/laser-engraving.jpg';
import promotionalProducts from '@/assets/promotional-products.jpg';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      title: t('features.precision.title'),
      description: t('features.precision.desc'),
    },
    {
      icon: Clock,
      title: t('features.fast.title'),
      description: t('features.fast.desc'),
    },
    {
      icon: Palette,
      title: t('features.custom.title'),
      description: t('features.custom.desc'),
    },
    {
      icon: DollarSign,
      title: t('features.competitive.title'),
      description: t('features.competitive.desc'),
    },
  ];

  const services = [
    {
      image: heroImage,
      title: t('services.laser.title'),
      description: t('services.laser.desc'),
    },
    {
      image: laserEngraving,
      title: t('services.engraving.title'),
      description: t('services.engraving.desc'),
    },
    {
      image: promotionalProducts,
      title: t('services.promo.title'),
      description: t('services.promo.desc'),
    },
  ];

  const whatsappNumber = '+201234567890';
  const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about your services.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        </div>

        {/* Content */}
        <div className="container-custom relative z-10">
          <div className="max-w-3xl space-y-8 animate-fade-in-up">
            <h1 className="heading-display text-primary-foreground leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" asChild>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  {t('hero.cta.whatsapp')}
                </a>
              </Button>
              <Button variant="heroOutline" asChild>
                <Link to="/contact">
                  {t('hero.cta.contact')}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="w-6 h-10 border-2 border-primary-foreground/40 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-primary-foreground/60 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border card-hover"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-accent/10 text-accent mb-4">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="section-divider mx-auto mb-4" />
            <h2 className="heading-section text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-lg card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button variant="navy" size="lg" asChild>
              <Link to="/services">
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
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
              <Link to="/contact">
                {t('hero.cta.contact')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
