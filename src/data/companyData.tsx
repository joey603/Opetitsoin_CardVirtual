import {
  Home,
  MedicalServices,
  Security,
  AccessTime,
} from '@mui/icons-material';
import { CompanyInfo } from '@/types/company';
import { Language } from './translations';

export const getCompanyData = (lang: Language): CompanyInfo => {
  const baseData = {
    name: 'Opetitsoins',
    services: [
      {
        icon: <Home />,
        label: lang === 'fr' ? 'Soins à domicile' : 'טיפול בבית',
        description: lang === 'fr' ? 'Soins personnalisés dans le confort de votre domicile' : 'טיפול מותאם בנוחות הבית שלכם'
      },
      {
        icon: <MedicalServices />,
        label: lang === 'fr' ? 'Soins infirmiers' : 'שירותי סיעוד',
        description: lang === 'fr' ? 'Équipe d\'infirmières diplômées et expérimentées' : 'צוות אחיות מוסמכות ומנוסות'
      },
      {
        icon: <Security />,
        label: lang === 'fr' ? 'Suivi médical' : 'מעקב רפואי',
        description: lang === 'fr' ? 'Accompagnement et surveillance médicale continue' : 'ליווי ומעקב רפואי מתמיד'
      },
      {
        icon: <AccessTime />,
        label: lang === 'fr' ? '24h/24' : '24/7',
        description: lang === 'fr' ? 'Disponibilité permanente pour vos urgences' : 'זמינות קבועה למקרי חירום'
      }
    ],
    contact: {
      phone: '+972585524343',
      email: 'Arielbarthel@gmail.com',
      address: lang === 'fr' ? 'Ashdod, Israël' : 'אשדוד, ישראל',
      website: 'www.opetitsoins.fr'
    },
    rating: {
      score: 5,
      maxScore: 5,
      label: lang === 'fr' ? 'Excellent service' : 'שירות מעולה'
    }
  };

  if (lang === 'fr') {
    return {
      ...baseData,
      tagline: 'Soins infirmiers à domicile',
      description: `Opetitsoins est votre partenaire de confiance pour tous vos besoins de soins infirmiers à domicile. 
        Notre équipe d'infirmières qualifiées vous accompagne avec professionnalisme et bienveillance, 
        dans le confort de votre foyer. Disponibles 24h/24, nous garantissons des soins de qualité 
        adaptés à vos besoins spécifiques.`,
    };
  } else {
    return {
      ...baseData,
      tagline: 'שירותי סיעוד בבית',
      description: `Opetitsoins הוא השותף המהימן שלכם לכל הצרכים שלכם בתחום הסיעוד הביתי. 
        צוות האחיות המוסמכות שלנו מלווה אתכם במקצועיות ובהקפדה, 
        בנוחות הבית שלכם. זמינים 24/7, אנו מבטיחים טיפול איכותי 
        המותאם לצרכים הספציפיים שלכם.`,
    };
  }
};

// Pour compatibilité avec l'ancien code
export const opetitsoinsData = getCompanyData('fr'); 