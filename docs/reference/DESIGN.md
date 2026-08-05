---
name: Obsidian Slate
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cb'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909095'
  outline-variant: '#45474b'
  surface-tint: '#c6c6cc'
  primary: '#c6c6cc'
  on-primary: '#2f3035'
  primary-container: '#0f1115'
  on-primary-container: '#7b7c82'
  inverse-primary: '#5d5e63'
  secondary: '#c3c6ce'
  on-secondary: '#2d3137'
  secondary-container: '#43474e'
  on-secondary-container: '#b2b5bd'
  tertiary: '#00dce5'
  on-tertiary: '#003739'
  tertiary-container: '#001415'
  on-tertiary-container: '#008b90'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e8'
  primary-fixed-dim: '#c6c6cc'
  on-primary-fixed: '#1a1c20'
  on-primary-fixed-variant: '#45474b'
  secondary-fixed: '#dfe2eb'
  secondary-fixed-dim: '#c3c6ce'
  on-secondary-fixed: '#181c22'
  on-secondary-fixed-variant: '#43474e'
  tertiary-fixed: '#63f7ff'
  tertiary-fixed-dim: '#00dce5'
  on-tertiary-fixed: '#002021'
  on-tertiary-fixed-variant: '#004f53'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
  mono-code:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  section-gap: 120px
  element-gap: 32px
---

## Brand & Style

This design system is built for the high-end creative developer. The brand personality is precise, authoritative, and sophisticated. It targets a discerning audience of hiring managers, tech founders, and design leads who value technical depth paired with aesthetic restraint.

The visual style is **Modern Minimalism** with a focus on structural integrity. It avoids unnecessary decoration, relying instead on intentional white space (or "dark space") and a high-contrast information hierarchy. The interface should feel like a premium physical portfolio—heavy, deliberate, and expensive. Every interaction should be calm and purposeful, evoking a sense of confidence and mastery.

## Colors

The palette is anchored in deep, architectural tones to ensure focus remains on the showcased work.

*   **Primary (Background):** A deep charcoal (#0F1115) that provides a noiseless canvas.
*   **Secondary (Containers):** Slate grays (#1E2228) used for cards and structural blocks to create subtle depth without relying on heavy shadows.
*   **Tertiary (Accent):** An "Electric Cyan" (#00F5FF) reserved exclusively for high-priority calls to action, active states, and critical highlights.
*   **Neutral (Text/UI):** A spectrum of muted slates (#94A3B8) for secondary text, maintaining a low-vibration UI that doesn't compete with the content.

Backgrounds should remain flat or use very subtle linear gradients (top-to-bottom) to suggest a light source from above.

## Typography

The typography strategy employs a "Typewriter-to-Titan" scale. **Montserrat** is used for impactful headings to provide a geometric, modern weight. **Inter** handles the heavy lifting of body copy for its exceptional readability in dark mode. **Geist** is introduced for labels and technical data, reinforcing the "developer" aspect of the portfolio.

*   **Headings:** Use tight letter-spacing and bold weights.
*   **Body:** Ensure a generous line-height (1.6) to prevent text "halation" (glowing) against the dark background.
*   **Technical Labels:** Always use uppercase with increased tracking for the Geist mono-spaced font to denote metadata or tags.

## Layout & Spacing

The layout follows a **Fixed-Fluid Hybrid** model. Content is contained within a 1200px max-width grid to ensure readability on ultrawide monitors, but uses fluid percentages for internal column widths.

*   **Desktop:** 12-column grid with 24px gutters.
*   **Mobile:** 4-column grid with 20px margins.
*   **Rhythm:** Use a strict 8px base unit. Section spacing is intentionally aggressive (120px+) to create a "gallery" feel, forcing the user to focus on one project or statement at a time.
*   **Alignment:** Use a mix of centered hero sections and left-aligned body content to create visual interest.

## Elevation & Depth

This design system rejects heavy shadows in favor of **Tonal Layering** and **Low-Contrast Outlines**.

1.  **Level 0 (Base):** Primary color (#0F1115).
2.  **Level 1 (Cards/Sections):** Secondary color (#1E2228) with a 1px solid border of a slightly lighter gray (#2E333D).
3.  **Interactive Depth:** On hover, elements should not "lift" with shadows. Instead, the border color should transition to the Accent color or the background should slightly lighten.
4.  **Glassmorphism:** Reserved only for persistent navigation bars. Use a `backdrop-filter: blur(12px)` with a 40% opaque secondary color to maintain context of the content scrolling underneath.

## Shapes

The shape language is **Architectural and Soft-Grotesque**. 

Using a `Soft` roundedness (0.25rem) ensures the UI feels modern and engineered rather than "bubbly" or "playful." This slight radius removes the harshness of a pure 0px corner while maintaining a professional, structured silhouette. 

*   **Buttons:** Standard buttons use the base roundedness.
*   **Project Cards:** Use `rounded-lg` (0.5rem) to frame media content effectively.
*   **Inputs:** Keep the base 0.25rem to maintain a technical, form-focused appearance.

## Components

### Buttons
*   **Primary:** Solid Accent color (#00F5FF) with black text. No shadow. 
*   **Secondary:** Ghost style. 1px border using #2E333D, transitioning to Accent color on hover.
*   **Tertiary:** Text-only with an animated underline that expands from center on hover.

### Cards (Project/Work)
*   Background: Secondary color.
*   Border: 1px solid #2E333D.
*   Image: 16:9 aspect ratio, slightly desaturated, returning to full color on hover.

### Inputs & Forms
*   Background: #0F1115 (inset).
*   Border: 1px solid #2E333D. 
*   Focus State: Border changes to Accent color with a subtle 2px outer glow of the same color.

### Navigation
*   Floating top bar with glassmorphism effect.
*   Links use the `label-caps` typography style.
*   Active state indicated by a 2px horizontal bar of the Accent color positioned 4px below the text.

### Additional Components
*   **Code Block:** Uses the Secondary background with a distinct 4px left-border of the Accent color.
*   **Status Dot:** A small, pulsing circle in the Accent color to indicate "Available for Work."