import {
  Home,
  MedicalServices,
  Security,
  AccessTime,
  LocalHospital,
  Psychology,
  Healing,
} from '@mui/icons-material';
import { CompanyInfo } from '@/types/company';
import { Language } from './translations';

export const getCompanyData = (lang: Language): CompanyInfo => {
  const baseData = {
    name: 'Opetitsoins',
    services: [
      {
        icon: <Home />,
        label: lang === 'fr' ? 'Traduction' : 'תרגום',
        description: lang === 'fr' ? 'Soins personnalisés dans le confort de votre domicile' : 'טיפול מותאם בנוחות הבית שלכם'
      },
      {
        icon: <MedicalServices />,
        label: lang === 'fr' ? 'Soins infirmiers à domicile' : ' בבית שירותי סיעוד',
        description: lang === 'fr' ? 'Équipe d\'infirmières diplômées et expérimentées' : 'צוות אחיות מוסמכות ומנוסות'
      },
      {
        icon: <LocalHospital />,
        label: lang === 'fr' ? 'Hospitalisation psychiatrique' : 'אשפוז פסיכיאטרי',
        description: lang === 'fr' ? 'Suivi psychiatrique à domicile spécialisé' : 'מעקב פסיכיאטרי מתמחה בבית'
      },
      {
        icon: <Psychology />,
        label: lang === 'fr' ? 'Prise en charge démence' : 'טיפול בדמנציה',
        description: lang === 'fr' ? 'Accompagnement pour troubles démentiels et Alzheimer' : 'ליווי בהפרעות דמנציה ואלצהיימר'
      },
      {
        icon: <Healing />,
        label: lang === 'fr' ? 'Injection | Pansement' : 'זריקות | חבישות',
        description: lang === 'fr' ? 'Soins techniques : injections et pansements' : 'טיפולים טכניים: זריקות וחבישות'
      },
      {
        icon: <Security />,
        label: lang === 'fr' ? 'Accompagnement aux rendez-vous médicaux' : 'מעקב רפואי',
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
        Notre équipe d'infirmiers qualifiées vous accompagne avec professionnalisme et bienveillance, 
        dans le confort de votre foyer. Disponibles 24h/24, nous garantissons des soins de qualité 
        adaptés à vos besoins spécifiques.`,
    };
  } else {
    return {
      ...baseData,
      tagline: 'שירותי סיעוד בבית',
      description: `Opetitsoins הוא השותף המהימן שלכם לכל הצרכים שלכם בתחום הסיעוד הביתי. 
        צוות האחיים המוסמכים שלנו מלווה אתכם במקצועיות ובהקפדה, 
        בנוחות הבית שלכם. זמינים 24/7, אנו מבטיחים טיפול איכותי 
        המותאם לצרכים הספציפיים שלכם.`,
    };
  }
};

// Pour compatibilité avec l'ancien code
export const opetitsoinsData = getCompanyData('fr'); 