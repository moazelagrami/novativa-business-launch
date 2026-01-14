import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Award, Shield, Clock, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import { useLanguage } from '@/contexts/LanguageContext';
import laserEngraving from '@/assets/laser-engraving.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    { icon: Award, label: t('about.values.quality') },
    { icon: Shield, label: t('about.values.reliability') },
    { icon: CheckCircle, label: t('about.values.flexibility') },
    { icon: Clock, label: t('about.values.experience') },
  ];

  const whatsappNumber = '+201234567890';
  const whatsappMessage = encodeURIComponent('Hello! I would like to learn more about Novativa.');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <div className="section-divider mx-auto mb-6" />
            <h1 className="heading-display text-foreground mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={laserEngraving}
                  alt="Laser engraving craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <p className="text-foreground leading-relaxed text-lg">
                {t('about.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.p2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.p3')}
              </p>

              {/* Values */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <value.icon className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-sm font-medium text-foreground">
                      {value.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">10+</div>
              <div className="text-primary-foreground/70 text-sm">Years of Experience</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">500+</div>
              <div className="text-primary-foreground/70 text-sm">Projects Completed</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">100+</div>
              <div className="text-primary-foreground/70 text-sm">Happy Clients</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">24h</div>
              <div className="text-primary-foreground/70 text-sm">Quick Turnaround</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom text-center">
          <h2 className="heading-section text-foreground mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" asChild>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5" />
                {t('hero.cta.whatsapp')}
              </a>
            </Button>
            <Button variant="navyOutline" size="lg" asChild>
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

export default About;
