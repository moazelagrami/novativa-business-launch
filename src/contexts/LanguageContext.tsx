import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.clients': 'Clients',
    'nav.contact': 'Contact',
    'nav.catalog': 'Download Catalog',
    
    // Hero
    'hero.title': 'Precision Laser Cutting & Custom Promotional Products',
    'hero.subtitle': 'Transform your brand with high-quality CO2 laser cutting, engraving, and customized promotional items. Trusted by leading Egyptian companies for precision, speed, and reliability.',
    'hero.cta.whatsapp': 'Chat on WhatsApp',
    'hero.cta.contact': 'Request a Quote',
    
    // Features
    'features.precision.title': 'Precision Cutting',
    'features.precision.desc': 'State-of-the-art CO2 laser technology for flawless results every time.',
    'features.fast.title': 'Fast Turnaround',
    'features.fast.desc': 'Quick delivery without compromising on quality.',
    'features.custom.title': 'Custom Solutions',
    'features.custom.desc': 'Tailored products designed specifically for your brand.',
    'features.competitive.title': 'Competitive Pricing',
    'features.competitive.desc': 'Premium quality at prices that fit your budget.',
    
    // About
    'about.title': 'About Novativa',
    'about.subtitle': 'Your Trusted Partner in Laser Cutting Excellence',
    'about.p1': 'Novativa is a leading provider of CO2 laser cutting and customized promotional products in Egypt. With years of industry experience, we have established ourselves as a trusted partner for businesses seeking high-quality, precision-crafted solutions.',
    'about.p2': 'Our commitment to quality, reliability, and flexibility has made us the go-to choice for advertising agencies, event management companies, and businesses across Egypt. We understand that every project is unique, and we take pride in delivering customized solutions that exceed expectations.',
    'about.p3': 'From intricate laser engravings to large-scale promotional items, our state-of-the-art equipment and skilled team ensure exceptional results for every order.',
    'about.values.quality': 'Uncompromising Quality',
    'about.values.reliability': 'Proven Reliability',
    'about.values.flexibility': 'Complete Flexibility',
    'about.values.experience': 'Years of Experience',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'Comprehensive Laser Cutting & Promotional Solutions',
    'services.laser.title': 'CO2 Laser Cutting',
    'services.laser.desc': 'High-precision cutting for acrylic, wood, leather, fabric, and more. Perfect for signage, displays, and decorative elements.',
    'services.engraving.title': 'Laser Engraving',
    'services.engraving.desc': 'Detailed engraving on various materials including metal, glass, and wood. Ideal for awards, plaques, and personalized gifts.',
    'services.custom.title': 'Custom Laser Products',
    'services.custom.desc': 'Bespoke products designed and manufactured to your exact specifications. From prototypes to production runs.',
    'services.promo.title': 'Promotional Items',
    'services.promo.desc': 'Branded merchandise, corporate gifts, and marketing materials that make your brand stand out.',
    'services.events.title': 'Event Products',
    'services.events.desc': 'Custom items for conferences, exhibitions, and corporate events. Backdrops, signage, and giveaways.',
    
    // Clients
    'clients.title': 'Trusted by Leading Companies',
    'clients.subtitle': 'We are proud to partner with some of Egypt\'s most respected businesses and organizations.',
    
    // Contact
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'Ready to start your project? Contact us today for a free quote.',
    'contact.form.name': 'Your Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.submit': 'Send Message',
    'contact.whatsapp': 'Chat on WhatsApp',
    'contact.email': 'Email Us',
    'contact.location': 'Cairo, Egypt',
    
    // Footer
    'footer.tagline': 'Precision laser cutting and customized promotional products for Egyptian businesses.',
    'footer.quicklinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // CTA
    'cta.title': 'Ready to Elevate Your Brand?',
    'cta.subtitle': 'Contact us today for a free consultation and quote. Let\'s bring your vision to life.',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'عن الشركة',
    'nav.services': 'خدماتنا',
    'nav.clients': 'عملاؤنا',
    'nav.contact': 'اتصل بنا',
    'nav.catalog': 'تحميل الكتالوج',
    
    // Hero
    'hero.title': 'القطع بالليزر الدقيق والمنتجات الدعائية المخصصة',
    'hero.subtitle': 'حوّل علامتك التجارية مع خدمات القطع بالليزر CO2 عالية الجودة والنقش والمنتجات الدعائية المخصصة. موثوق به من قبل الشركات المصرية الرائدة.',
    'hero.cta.whatsapp': 'تواصل عبر واتساب',
    'hero.cta.contact': 'اطلب عرض سعر',
    
    // Features
    'features.precision.title': 'قطع دقيق',
    'features.precision.desc': 'تقنية ليزر CO2 متطورة لنتائج مثالية في كل مرة.',
    'features.fast.title': 'تسليم سريع',
    'features.fast.desc': 'توصيل سريع دون التنازل عن الجودة.',
    'features.custom.title': 'حلول مخصصة',
    'features.custom.desc': 'منتجات مصممة خصيصاً لعلامتك التجارية.',
    'features.competitive.title': 'أسعار تنافسية',
    'features.competitive.desc': 'جودة ممتازة بأسعار تناسب ميزانيتك.',
    
    // About
    'about.title': 'عن نوفاتيفا',
    'about.subtitle': 'شريكك الموثوق في التميز بالقطع بالليزر',
    'about.p1': 'نوفاتيفا هي شركة رائدة في مجال القطع بالليزر CO2 والمنتجات الدعائية المخصصة في مصر. مع سنوات من الخبرة في الصناعة، أثبتنا أنفسنا كشريك موثوق للشركات التي تبحث عن حلول عالية الجودة.',
    'about.p2': 'التزامنا بالجودة والموثوقية والمرونة جعلنا الخيار الأول لوكالات الإعلان وشركات إدارة الفعاليات والشركات في جميع أنحاء مصر.',
    'about.p3': 'من النقوش الدقيقة بالليزر إلى المنتجات الدعائية الكبيرة، تضمن معداتنا المتطورة وفريقنا الماهر نتائج استثنائية لكل طلب.',
    'about.values.quality': 'جودة لا تُضاهى',
    'about.values.reliability': 'موثوقية مثبتة',
    'about.values.flexibility': 'مرونة كاملة',
    'about.values.experience': 'سنوات من الخبرة',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'حلول شاملة للقطع بالليزر والمنتجات الدعائية',
    'services.laser.title': 'القطع بليزر CO2',
    'services.laser.desc': 'قطع عالي الدقة للأكريليك والخشب والجلد والقماش والمزيد. مثالي للافتات والعروض والعناصر الزخرفية.',
    'services.engraving.title': 'النقش بالليزر',
    'services.engraving.desc': 'نقش تفصيلي على مواد متنوعة بما في ذلك المعادن والزجاج والخشب. مثالي للجوائز واللوحات والهدايا الشخصية.',
    'services.custom.title': 'منتجات ليزر مخصصة',
    'services.custom.desc': 'منتجات مصممة ومصنعة حسب مواصفاتك الدقيقة. من النماذج الأولية إلى الإنتاج.',
    'services.promo.title': 'منتجات دعائية',
    'services.promo.desc': 'بضائع ذات علامة تجارية وهدايا للشركات ومواد تسويقية تجعل علامتك التجارية تتميز.',
    'services.events.title': 'منتجات الفعاليات',
    'services.events.desc': 'منتجات مخصصة للمؤتمرات والمعارض وفعاليات الشركات. خلفيات ولافتات وهدايا.',
    
    // Clients
    'clients.title': 'موثوق به من قبل الشركات الرائدة',
    'clients.subtitle': 'نحن فخورون بالشراكة مع بعض من أكثر الشركات والمؤسسات احتراماً في مصر.',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'هل أنت مستعد لبدء مشروعك؟ اتصل بنا اليوم للحصول على عرض سعر مجاني.',
    'contact.form.name': 'اسمك',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'رسالتك',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.whatsapp': 'تواصل عبر واتساب',
    'contact.email': 'راسلنا عبر البريد',
    'contact.location': 'القاهرة، مصر',
    
    // Footer
    'footer.tagline': 'القطع الدقيق بالليزر والمنتجات الدعائية المخصصة للشركات المصرية.',
    'footer.quicklinks': 'روابط سريعة',
    'footer.services': 'الخدمات',
    'footer.contact': 'اتصل بنا',
    'footer.rights': 'جميع الحقوق محفوظة.',
    
    // CTA
    'cta.title': 'هل أنت مستعد لرفع مستوى علامتك التجارية؟',
    'cta.subtitle': 'اتصل بنا اليوم للحصول على استشارة مجانية وعرض سعر. دعنا نحقق رؤيتك.',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : 'font-sans'}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
