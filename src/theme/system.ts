import { createSystem, defaultConfig, defineConfig, defineRecipe } from '@chakra-ui/react';

const buttonRecipe = defineRecipe({
  variants: {
    variant: {
      minimal: {
        bg: 'transparent',
        color: 'fg',
        borderWidth: '1px',
        borderColor: 'fg',
        borderRadius: '0',
        fontWeight: 'medium',
        _hover: {
          bg: 'fg',
          color: 'fg.inverted',
          borderColor: 'fg',
          opacity: '1',
        },
        _active: {
          bg: 'fg',
          color: 'fg.inverted',
          opacity: '0.9',
        },
      },
      minimalInverse: {
        bg: 'transparent',
        color: 'fg.inverted',
        borderWidth: '1px',
        borderColor: 'border.inverted',
        borderRadius: '0',
        fontWeight: 'medium',
        _hover: {
          bg: 'fg.inverted',
          color: 'fg',
          borderColor: 'border.inverted',
          opacity: '1',
        },
        _active: {
          bg: 'fg.inverted',
          color: 'fg',
          opacity: '0.9',
        },
      },
    },
  },
});

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: '#F7F2EC' },
          100: { value: '#EDE3D6' },
          200: { value: '#D9C4AE' },
          300: { value: '#C4A484' },
          400: { value: '#A88460' },
          500: { value: '#7C5C3E' },
          600: { value: '#6B4F35' },
          700: { value: '#56402C' },
          800: { value: '#413124' },
          900: { value: '#2C2118' },
          950: { value: '#1A140E' },
        },
        salon: {
          stone: { value: '#F5F3F0' },
          charcoal: { value: '#2C2C2C' },
          muted: { value: '#5C5C5C' },
          line: { value: '#E5E2DD' },
        },
      },
      fonts: {
        heading: {
          value: '"Cormorant Garamond", "Times New Roman", serif',
        },
        body: {
          value: '"DM Sans", "Helvetica Neue", Arial, sans-serif',
        },
      },
      radii: {
        none: { value: '0' },
        sm: { value: '0' },
        md: { value: '0.5rem' },
        lg: { value: '0.5rem' },
        xl: { value: '0.75rem' },
        '2xl': { value: '1rem' },
        '3xl': { value: '1.5rem' },
        full: { value: '9999px' },
        l1: { value: '0' },
        l2: { value: '0' },
        l3: { value: '0.25rem' },
      },
      shadows: {
        xs: { value: '0 1px 2px rgba(44, 44, 44, 0.06)' },
        sm: { value: '0 2px 8px rgba(44, 44, 44, 0.08)' },
        md: { value: '0 4px 16px rgba(44, 44, 44, 0.1)' },
        lg: { value: '0 8px 28px rgba(44, 44, 44, 0.12)' },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: { value: '{colors.white}' },
          subtle: { value: '{colors.salon.stone}' },
          muted: { value: '{colors.brand.100}' },
          emphasized: { value: '{colors.brand.200}' },
          inverted: { value: '{colors.salon.charcoal}' },
          panel: { value: '{colors.white}' },
        },
        fg: {
          DEFAULT: { value: '{colors.salon.charcoal}' },
          muted: { value: '{colors.salon.muted}' },
          subtle: { value: '{colors.brand.400}' },
          inverted: { value: '{colors.white}' },
        },
        border: {
          DEFAULT: { value: '{colors.salon.line}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.salon.line}' },
          emphasized: { value: '{colors.brand.300}' },
          inverted: { value: '{colors.white}' },
        },
        brand: {
          solid: { value: '{colors.brand.600}' },
          contrast: { value: '{colors.white}' },
          fg: { value: '{colors.brand.700}' },
          muted: { value: '{colors.brand.100}' },
          subtle: { value: '{colors.brand.50}' },
          emphasized: { value: '{colors.brand.700}' },
          focusRing: { value: '{colors.brand.500}' },
        },
      },
    },
    textStyles: {
      display: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'semibold',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          lineHeight: '1.1',
          fontSize: { base: '2.5rem', md: '3.75rem' },
        },
      },
      heroTitle: {
        value: {
          fontFamily: 'body',
          fontWeight: 'bold',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          lineHeight: '1.15',
          fontSize: { base: '1.5rem', md: '2rem', lg: '2.25rem' },
        },
      },
      heroTagline: {
        value: {
          fontFamily: 'body',
          fontWeight: 'semibold',
          letterSpacing: '0.02em',
          lineHeight: '1.4',
          fontSize: { base: '1rem', md: '1.125rem' },
        },
      },
      sectionTitle: {
        value: {
          fontFamily: 'heading',
          fontWeight: 'semibold',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          lineHeight: '1.2',
          fontSize: { base: '1.75rem', md: '2.25rem' },
        },
      },
      eyebrow: {
        value: {
          fontFamily: 'body',
          fontWeight: 'semibold',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          fontSize: 'xs',
        },
      },
      logo: {
        value: {
          fontFamily: 'heading',
          fontWeight: '600',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          lineHeight: '1',
          fontSize: { base: '2.15rem', md: '2.75rem' },
        },
      },
      logoSub: {
        value: {
          fontFamily: 'body',
          fontWeight: '500',
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          fontSize: { base: '0.85rem', md: '0.95rem' },
        },
      },
    },
    layerStyles: {
      section: {
        value: {
          py: { base: '16', md: '24' },
        },
      },
      sectionMuted: {
        value: {
          py: { base: '16', md: '24' },
          bg: 'bg.subtle',
        },
      },
      sectionAbout: {
        value: {
          py: { base: '16', md: '24' },
          position: 'relative',
          overflow: 'hidden',
          bgImage: 'url(/images/placeholders/about-bg.svg)',
          bgSize: 'cover',
          bgPos: 'center',
          _before: {
            content: '""',
            position: 'absolute',
            inset: '0',
            bg: 'whiteAlpha.700',
          },
        },
      },
      heroOverlay: {
        value: {
          bgImage:
            'radial-gradient(ellipse at center, rgba(0, 0, 0, 0.72) 0%, rgba(0, 0, 0, 0.5) 55%, rgba(0, 0, 0, 0.45) 100%)',
          color: 'fg.inverted',
        },
      },
      photoBand: {
        value: {
          bg: 'blackAlpha.600',
          color: 'fg.inverted',
          textAlign: 'center',
        },
      },
      mediaTile: {
        value: {
          bg: 'bg.muted',
          rounded: 'md',
          shadow: 'sm',
          overflow: 'hidden',
        },
      },
    },
    recipes: {
      button: buttonRecipe,
    },
  },
  globalCss: {
    body: {
      bg: 'bg',
      color: 'fg',
      fontFamily: 'body',
    },
    '.chakra-button': {
      borderRadius: '0',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
    },
  },
});

export const system = createSystem(defaultConfig, config);
