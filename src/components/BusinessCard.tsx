'use client';

import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Box,
  Typography,
  Avatar,
  Chip,
  IconButton,
  Divider,
  Button,
  Tooltip,
  Zoom,
  Fade,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';
import {
  Phone,
  Email,
  LocationOn,
  MedicalServices,
  Star,
  Share,
  WhatsApp,
  Language as LanguageIcon,
  Public,
} from '@mui/icons-material';
import { getCompanyData } from '@/data/companyData';
import { translations, Language } from '@/data/translations';
import Image from 'next/image';

export const BusinessCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false);
  const [language, setLanguage] = useState<Language>('fr');
  const company = getCompanyData(language);
  const t = translations[language];

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${company.name} - ${company.tagline}`,
          text: company.description,
          url: window.location.href,
        });
      } catch (error) {
        // L'utilisateur a annulé le partage - c'est normal
        if ((error as Error).name !== 'AbortError') {
          console.log('Erreur lors du partage:', error);
        }
      }
    }
  };

  const handleEmail = () => {
    const subject = t.emailSubject.replace('{name}', company.name);
    const body = t.emailBody;
    const mailtoLink = `mailto:${company.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsApp = () => {
    // Nettoyer le numéro de téléphone (enlever espaces, tirets, etc.)
    const cleanPhone = company.contact.phone.replace(/\s+/g, '').replace(/-/g, '');
    const message = t.whatsappText.replace('{name}', company.name).replace('{tagline}', company.tagline.toLowerCase());
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleLanguageChange = (event: any) => {
    setLanguage(event.target.value as Language);
  };

  return (
    <Zoom in={true} timeout={1000}>
      <Card
        elevation={12}
        sx={{
          maxWidth: { xs: '95vw', sm: 420 },
          width: { xs: '95vw', sm: 420 },
          minHeight: { xs: 'auto', sm: 'auto' },
          borderRadius: 4,
          // Couleurs inspirées du logo : bleu marine vers bleu plus clair
          background: 'linear-gradient(135deg, #2E4F99 0%, #4A6BC5 50%, #87CEEB 100%)',
          color: 'white',
          overflow: 'visible',
          position: 'relative',
          mx: { xs: 'auto', sm: 0 },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: -2,
            left: -2,
            right: -2,
            bottom: -2,
            // Bordure avec couleurs du logo
            background: 'linear-gradient(45deg, #2E4F99, #CD853F, #87CEEB, #2E4F99)',
            borderRadius: 4,
            zIndex: -1,
            opacity: 0.8,
          }
        }}
      >
        {/* Header Section */}
        <CardContent sx={{ 
          pb: 1,
          p: { xs: 3, sm: 2 },
          '&:last-child': { pb: { xs: 3, sm: 2 } }
        }}>
          <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={2}>
            <Box display="flex" alignItems="center">
              {/* Logo de l'entreprise */}
              <Box
                sx={{
                  width: { xs: 100, sm: 80 },
                  height: { xs: 100, sm: 80 },
                  borderRadius: '50%',
                  bgcolor: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  mr: { xs: 2.5, sm: 2 },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: '2px solid rgba(205, 133, 63, 0.3)', // Couleur orange du logo
                  overflow: 'hidden',
                }}
              >
                <Image
                  src="/logo-opetitsoins.png"
                  alt="Logo Opetitsoins"
                  width={100}
                  height={100}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '30%',
                  }}
                />
              </Box>
              <Box>
                <Typography 
                  variant="h4" 
                  fontWeight="bold" 
                  sx={{ 
                    mb: 0.5,
                    fontSize: { xs: '1.8rem', sm: '2.125rem' }
                  }}
                >
                  {company.name}
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    opacity: 0.9,
                    fontSize: { xs: '1rem', sm: '0.875rem' }
                  }}
                >
                  {company.tagline}
                </Typography>
              </Box>
            </Box>
            <Box>
              <Tooltip title={t.share}>
                <IconButton onClick={handleShare} sx={{ color: 'white' }}>
                  <Share />
                </IconButton>
              </Tooltip>
              
              {/* Sélecteur de langue */}
              <Box mt={1} display="flex" justifyContent="center">
                <FormControl size="small">
                  <Select
                    value={language}
                    onChange={handleLanguageChange}
                    sx={{
                      color: 'white',
                      fontSize: { xs: '0.7rem', sm: '0.75rem' },
                      minWidth: { xs: 80, sm: 100 },
                      height: { xs: 32, sm: 40 },
                      '& .MuiSelect-select': {
                        py: { xs: 0.5, sm: 1 },
                        px: { xs: 1, sm: 1.5 },
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(205, 133, 63, 0.5)', // Couleur orange du logo
                      },
                      '&:hover .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'rgba(205, 133, 63, 0.8)',
                      },
                      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#CD853F', // Orange du logo
                      },
                      '& .MuiSelect-icon': {
                        color: 'white',
                      },
                    }}
                  >
                    <MenuItem value="fr" sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                      {t.languages.fr}
                    </MenuItem>
                    <MenuItem value="he" sx={{ fontSize: { xs: '0.7rem', sm: '0.875rem' } }}>
                      {t.languages.he}
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(205, 133, 63, 0.4)', mb: 2 }} />

          {/* Services Section */}
          <Box mb={3}>
            <Typography variant="h6" fontWeight="600" mb={1.5}>
              {t.services}
            </Typography>
            <Box display="flex" flexWrap="wrap" gap={1}>
              {company.services.map((service: any, index: number) => (
                <Chip
                  key={index}
                  icon={service.icon}
                  label={service.label}
                  size="small"
                  sx={{
                    // Couleurs alternées inspirées du logo
                    bgcolor: index % 2 === 0 
                      ? 'rgba(135, 206, 235, 0.3)' // Bleu clair du logo
                      : 'rgba(205, 133, 63, 0.3)', // Orange du logo
                    color: 'white',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${index % 2 === 0 
                      ? 'rgba(135, 206, 235, 0.5)' 
                      : 'rgba(205, 133, 63, 0.5)'}`,
                    '& .MuiChip-icon': { color: 'white' },
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Rating Section */}
          <Box display="flex" alignItems="center" mb={2}>
            <Box display="flex" mr={1}>
              {[...Array(company.rating.maxScore)].map((_, i) => (
                <Star key={i} sx={{ 
                  color: i < company.rating.score ? '#CD853F' : 'rgba(255, 255, 255, 0.3)', // Orange du logo pour les étoiles
                  fontSize: 20 
                }} />
              ))}
            </Box>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              {company.rating.score}.0 • {company.rating.label}
            </Typography>
          </Box>

          <Divider sx={{ bgcolor: 'rgba(205, 133, 63, 0.4)', mb: 2 }} />

          {/* Contact Information */}
          <Box>
            <Typography variant="h6" fontWeight="600" mb={1.5}>
              {t.contact}
            </Typography>
            
            <Box 
              display="flex" 
              alignItems="center" 
              mb={1.5}
              onClick={handleWhatsApp}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transform: 'translateX(2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <WhatsApp sx={{ mr: 2, fontSize: 20 }} />
              <Typography variant="body2">
                WhatsApp: {company.contact.phone}
              </Typography>
            </Box>

            <Box 
              display="flex" 
              alignItems="center" 
              mb={1.5}
              onClick={handleEmail}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transform: 'translateX(2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <Email sx={{ mr: 2, fontSize: 20 }} />
              <Typography variant="body2">
                {company.contact.email}
              </Typography>
            </Box>

            <Box display="flex" alignItems="center" mb={1.5}>
              <LocationOn sx={{ mr: 2, fontSize: 20 }} />
              <Typography variant="body2">
                {company.contact.address}
              </Typography>
            </Box>

            <Box 
              display="flex" 
              alignItems="center" 
              mb={2}
              onClick={() => window.open('https://optitsoins-site.vercel.app', '_blank')}
              sx={{ 
                cursor: 'pointer',
                '&:hover': {
                  opacity: 0.8,
                  transform: 'translateX(2px)'
                },
                transition: 'all 0.2s ease'
              }}
            >
              <Public sx={{ mr: 2, fontSize: 20 }} />
              <Typography variant="body2">
                optitsoins-site.vercel.app
              </Typography>
            </Box>
          </Box>

          {/* Action Buttons */}
          <Box 
            display="flex" 
            gap={{ xs: 1.5, sm: 1 }} 
            justifyContent="center"
            flexDirection={{ xs: 'column', sm: 'row' }}
            sx={{ mt: { xs: 3, sm: 2 } }}
          >
            <Button
              variant="contained"
              startIcon={<WhatsApp />}
              onClick={handleWhatsApp}
              sx={{
                bgcolor: 'rgba(37, 211, 102, 0.8)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                py: { xs: 1.5, sm: 1 },
                px: { xs: 3, sm: 2 },
                fontSize: { xs: '1.1rem', sm: '0.875rem' },
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  bgcolor: 'rgba(37, 211, 102, 0.9)',
                }
              }}
            >
              WhatsApp
            </Button>
            <Button
              variant="outlined"
              startIcon={<Email />}
              onClick={handleEmail}
              sx={{
                borderColor: 'rgba(205, 133, 63, 0.6)', // Orange du logo
                color: 'white',
                py: { xs: 1.5, sm: 1 },
                px: { xs: 3, sm: 2 },
                fontSize: { xs: '1.1rem', sm: '0.875rem' },
                width: { xs: '100%', sm: 'auto' },
                '&:hover': {
                  borderColor: '#CD853F', // Orange du logo
                  bgcolor: 'rgba(205, 133, 63, 0.2)',
                }
              }}
            >
              Email
            </Button>
          </Box>

          {/* Expandable Description */}
          <Fade in={expanded} timeout={500}>
            <Box mt={2} display={expanded ? 'block' : 'none'}>
              <Divider sx={{ bgcolor: 'rgba(205, 133, 63, 0.4)', mb: 2 }} />
              <Typography variant="body2" sx={{ opacity: 0.9, lineHeight: 1.6 }}>
                {company.description}
              </Typography>
            </Box>
          </Fade>

          <Box textAlign="center" mt={2}>
            <Button
              size="small"
              onClick={() => setExpanded(!expanded)}
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)',
                '&:hover': {
                  color: '#CD853F' // Orange du logo au survol
                }
              }}
            >
              {expanded ? t.readLess : t.readMore}
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Zoom>
  );
}; 